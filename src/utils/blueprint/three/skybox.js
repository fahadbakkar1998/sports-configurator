import {
  EventDispatcher,
  PlaneGeometry,
  SphereGeometry,
  MeshBasicMaterial,
  ShaderMaterial,
  Mesh,
  TextureLoader,
  Color,
  DoubleSide,
} from 'three';
import { RepeatWrapping } from 'three';
import { GroundSceneReflector } from 'three-reflector2';

import { AxesHelper } from 'three';
import { sphereRadius } from '../core/constants';

export class Skybox extends EventDispatcher {
  constructor(scene, renderer) {
    super();

    this.defaultEnvironment = 'assets/rooms/textures/envs/Sky.jpg';
    this.useEnvironment = false;
    this.topColor = 0x92b2ce; //0xe9e9e9; //0xf9f9f9; //0x565e63
    this.bottomColor = 0xffffff; //0xD8ECF9
    this.verticalOffset = 400;
    this.exponent = 0.5;

    var uniforms = {
      topColor: { type: 'c', value: new Color(this.topColor) },
      bottomColor: { type: 'c', value: new Color(this.bottomColor) },
      offset: { type: 'f', value: this.verticalOffset },
      exponent: { type: 'f', value: this.exponent },
    };

    this.scene = scene;
    this.renderer = renderer;

    this.widthSegments = 32;
    this.heightSegments = 15;
    this.sky = null;

    this.plainVertexShader = [
      'varying vec3 vWorldPosition;',
      'void main() {',
      'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
      'vWorldPosition = worldPosition.xyz;',
      'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );',
      '}',
    ].join('\n');
    this.plainFragmentShader = [
      'uniform vec3 bottomColor;',
      'uniform vec3 topColor;',
      'uniform float offset;',
      'uniform float exponent;',
      'varying vec3 vWorldPosition;',
      'void main() {',
      ' float h = normalize( vWorldPosition + offset ).y;',
      ' gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h, 0.0 ), exponent ), 0.0 ) ), 1.0 );',
      '}',
    ].join('\n');

    this.vertexShader = [
      'varying vec2 vUV;',
      'void main() {',
      '  vUV=uv;',
      '  vec4 pos = vec4(position, 1.0);',
      '   gl_Position = projectionMatrix * modelViewMatrix * pos;',
      '}',
    ].join('\n');
    this.fragmentShader = [
      'uniform sampler2D texture;',
      'varying vec2 vUV;',
      'void main() {  ',
      'vec4 sample = texture2D(texture, vUV);',
      'gl_FragColor = vec4(sample.xyz, sample.w);',
      '}',
    ].join('\n');

    this.texture = new TextureLoader();
    this.plainSkyMat = new ShaderMaterial({
      vertexShader: this.plainVertexShader,
      fragmentShader: this.plainFragmentShader,
      uniforms: uniforms,
      side: DoubleSide,
    });
    this.skyMat = new MeshBasicMaterial({
      color: 0xeaeaea,
      side: DoubleSide,
      map: new TextureLoader().load(
        'assets/rooms/textures/envs/Sky.jpg',
        function () {},
      ),
    });

    this.skyGeo = new SphereGeometry(
      sphereRadius,
      this.widthSegments,
      this.heightSegments,
    );
    this.sky = new Mesh(this.skyGeo, this.skyMat);
    // this.sky.position.x += sphereRadius*0.5;

    var groundT = new TextureLoader().load(
      'assets/rooms/textures/Ground_4K.jpg',
      function () {},
    );
    groundT.wrapS = groundT.wrapT = RepeatWrapping;
    groundT.repeat.set(sphereRadius / 10, sphereRadius / 10);

    // var uniforms2 = {topColor: {type: 'c',value: new Color(0xFFFFFF)},bottomColor: {type: 'c',value: new Color(0x999999)},offset: {type: 'f',value: this.verticalOffset}, exponent: {type:'f', value: this.exponent}};
    this.groundGeo = new PlaneGeometry(sphereRadius * 2, sphereRadius * 2);
    this.groundMat = new MeshBasicMaterial({
      color: 0xeaeaea,
      side: DoubleSide,
      map: groundT,
    });
    this.ground = new Mesh(this.groundGeo, this.groundMat);
    this.ground.rotateX(-Math.PI * 0.5);
    this.ground.position.y = -1;

    // this.groundSceneReflector = new GroundSceneReflector(
    //   this.ground,
    //   this.renderer,
    //   this.scene,
    //   {
    //     textureOne: 'assets/rooms/textures/Ground_4K.jpg',
    //     textureTwo: 'assets/rooms/textures/GroundRough.jpg',
    //     wrapOne: { x: 40, y: 40 },
    //     wrapTwo: { x: 50, y: 50 },
    //     textureWidth: 512,
    //     textureHeight: 512,
    //     intensity: 0.1,
    //     blendIntensity: 0.05,
    //   },
    // );

    this.scene.add(this.sky);
    this.scene.add(this.ground);

    var axesHelper = new AxesHelper(100);
    this.scene.add(axesHelper);

    this.init();
  }

  setEnabled(flag) {
    // if (!flag) {
    //   this.scene.remove(this.sky);
    //   this.scene.remove(this.ground);
    // } else {
    //   this.scene.add(this.sky);
    //   this.scene.add(this.ground);
    // }
    this.sky.visible = this.ground.visible = flag;
  }

  toggleEnvironment(flag) {
    this.useEnvironment = flag;
    if (!flag) {
      this.ground.visible = true;
      this.sky.material = this.skyMat;
      this.sky.material.needsUpdate = true;
    } else {
      this.ground.visible = false;
      if (!this.plainSkyMat) {
        this.setEnvironmentMap(this.defaultEnvironment);
      } else {
        this.sky.material = this.plainSkyMat;
        this.sky.material.needsUpdate = true;
      }
      this.sky.visible = true;
    }
    this.scene.scene.needsUpdate = true;
  }

  setEnvironmentMap(url) {
    var scope = this;
    scope.texture.load(
      url,
      (t) => {
        var textureUniform = { type: 't', value: t };
        var uniforms = { texture: textureUniform };
        scope.skyMat = new ShaderMaterial({
          vertexShader: scope.vertexShader,
          fragmentShader: scope.fragmentShader,
          uniforms: uniforms,
          side: DoubleSide,
        });
        scope.toggleEnvironment(scope.useEnvironment);
      },
      () => {},
      () => {
        // console.log('skybox: ', 'ERROR LOADING FILE');
      },
    );
  }

  init() {
    this.toggleEnvironment(true);
  }
}
