import { degToRad } from '../../utils/common';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { OrbitControls } from '../../helper/OrbitControls';

import {
  cameraSetting,
  outlinePassSetting,
  buildingSetting,
} from '../../utils/constants';

let camera, scene, renderer, composer, light, controls, renderPass, outlinePass;
let worldMesh,
  groundMesh,
  leftWallMesh,
  rightWallMesh,
  frontWallMesh,
  backWallMesh,
  leftWallTriangleMesh,
  rightWallTriangleMesh,
  frontRoofMesh,
  backRoofMesh;
let textureLoader = new THREE.TextureLoader();
let axesHelper = new THREE.AxesHelper(cameraSetting.far);
axesHelper.setColors(
  new THREE.Color(0xff0000),
  new THREE.Color(0x00ff00),
  new THREE.Color(0x0000ff),
);
let textures;

export default class WebGL {
  constructor(screenObj) {
    this.screenObj = screenObj;
  }

  init() {
    // renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(this.screenObj.clientWidth, this.screenObj.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.screenObj.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(
      cameraSetting.fov,
      this.screenObj.clientWidth / this.screenObj.clientHeight,
      cameraSetting.near,
      cameraSetting.far,
    );
    camera.position.set(0, cameraSetting.posY, cameraSetting.posZ);

    // controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = true;
    controls.minDistance = (cameraSetting.near - 1) / 2;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enablePan = false;

    // light
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 1000, 1000).normalize();
    scene.add(light);

    // composer
    composer = new EffectComposer(renderer);
    renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    outlinePass = new OutlinePass(
      new THREE.Vector2(
        this.screenObj.clientWidth,
        this.screenObj.clientHeight,
      ),
      scene,
      camera,
    );
    outlinePass.edgeStrength = outlinePassSetting.edgeStrength;
    outlinePass.edgeThickness = outlinePassSetting.edgeThickness;
    composer.addPass(outlinePass);

    // loop
    this.animate();

    // load environment
    this.initBuilding();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    composer.render();
  }

  async initBuilding() {
    textures = {
      background: await textureLoader.loadAsync(
        'assets/images/building/background.jpg',
      ),
      ground: await textureLoader.loadAsync(
        'assets/images/building/ground.jpg',
      ),
      floor: await textureLoader.loadAsync('assets/images/building/floor.jpg'),
      roof: await textureLoader.loadAsync('assets/images/building/roof.jpg'),
      wall: await textureLoader.loadAsync('assets/images/building/wall.jpg'),
    };

    // add world
    worldMesh = new THREE.Mesh(
      new THREE.SphereGeometry(
        cameraSetting.far / 2,
        cameraSetting.far / 2,
        cameraSetting.far / 2,
      ),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
      }),
    );
    worldMesh.material.map = textures.background;
    worldMesh.material.map.repeat.set(1, 1);
    worldMesh.material.map.wrapS = THREE.RepeatWrapping;
    worldMesh.material.map.wrapT = THREE.RepeatWrapping;
    worldMesh.material.needsUpdate = true;
    scene.add(worldMesh);

    // add building
    const buildingGroup = new THREE.Group();
    buildingGroup.rotation.x = degToRad(-90);
    buildingGroup.position.y = -10;
    // buildingGroup.add(axesHelper);
    scene.add(buildingGroup);

    // add ground
    groundMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(cameraSetting.far, cameraSetting.far),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: textures.ground,
      }),
    );
    groundMesh.material.map.anisotropy = 16;
    groundMesh.material.map.repeat.set(30, 30);
    groundMesh.material.map.wrapS = THREE.RepeatWrapping;
    groundMesh.material.map.wrapT = THREE.RepeatWrapping;
    buildingGroup.add(groundMesh);

    // left wall
    leftWallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(
        buildingSetting.defaultSideWallWidth,
        buildingSetting.defaultWallHeight,
      ),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: textures.wall,
      }),
    );
    leftWallMesh.rotation.x = degToRad(90);
    leftWallMesh.rotation.y = degToRad(90);
    leftWallMesh.position.x = -buildingSetting.defaultFrontWallWidth / 2;
    leftWallMesh.position.z = buildingSetting.defaultSideWallWidth / 2;
    buildingGroup.add(leftWallMesh);

    // right wall
    rightWallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(
        buildingSetting.defaultSideWallWidth,
        buildingSetting.defaultWallHeight,
      ),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: textures.wall,
      }),
    );
    rightWallMesh.rotation.x = degToRad(90);
    rightWallMesh.rotation.y = degToRad(90);
    rightWallMesh.position.x = buildingSetting.defaultFrontWallWidth / 2;
    rightWallMesh.position.z = buildingSetting.defaultSideWallWidth / 2;
    buildingGroup.add(rightWallMesh);

    // front wall
    frontWallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(
        buildingSetting.defaultFrontWallWidth,
        buildingSetting.defaultWallHeight,
      ),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: textures.wall,
      }),
    );
    frontWallMesh.rotation.x = degToRad(90);
    frontWallMesh.position.y = -buildingSetting.defaultSideWallWidth / 2;
    frontWallMesh.position.z = buildingSetting.defaultSideWallWidth / 2;
    frontWallMesh.material.map.anisotropy = 16;
    frontWallMesh.material.map.repeat.set(30, 30);
    frontWallMesh.material.map.wrapS = THREE.RepeatWrapping;
    frontWallMesh.material.map.wrapT = THREE.RepeatWrapping;
    buildingGroup.add(frontWallMesh);

    // back wall
    backWallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(
        buildingSetting.defaultFrontWallWidth,
        buildingSetting.defaultWallHeight,
      ),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: textures.wall,
      }),
    );
    backWallMesh.rotation.x = degToRad(90);
    backWallMesh.position.y = buildingSetting.defaultSideWallWidth / 2;
    backWallMesh.position.z = buildingSetting.defaultSideWallWidth / 2;
    buildingGroup.add(backWallMesh);

    // front roof
    frontRoofMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(
        buildingSetting.defaultFrontWallWidth + buildingSetting.roofRest * 2,
        buildingSetting.defaultSideWallWidth /
          2 /
          Math.cos(degToRad(buildingSetting.roofAngle)) +
          buildingSetting.roofRest,
      ),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: textures.roof,
      }),
    );
    frontRoofMesh.rotation.x = degToRad(buildingSetting.roofAngle);
    frontRoofMesh.position.y = -(
      buildingSetting.defaultSideWallWidth / 4 +
      (buildingSetting.roofRest / 2) *
        Math.cos(degToRad(buildingSetting.roofAngle))
    );
    frontRoofMesh.position.z =
      buildingSetting.defaultWallHeight +
      (buildingSetting.defaultSideWallWidth / 4) *
        Math.tan(degToRad(buildingSetting.roofAngle));
    frontRoofMesh.material.map.anisotropy = 8;
    frontRoofMesh.material.map.repeat.set(10, 10);
    frontRoofMesh.material.map.wrapS = THREE.RepeatWrapping;
    frontRoofMesh.material.map.wrapT = THREE.RepeatWrapping;
    frontRoofMesh.castShadow = true;
    buildingGroup.add(frontRoofMesh);

    // back roof
    backRoofMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(
        buildingSetting.defaultFrontWallWidth + buildingSetting.roofRest * 2,
        buildingSetting.defaultSideWallWidth /
          2 /
          Math.cos(degToRad(buildingSetting.roofAngle)) +
          buildingSetting.roofRest,
      ),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: textures.roof,
      }),
    );
    backRoofMesh.rotation.x = -degToRad(buildingSetting.roofAngle);
    backRoofMesh.position.y =
      buildingSetting.defaultSideWallWidth / 4 +
      (buildingSetting.roofRest / 2) *
        Math.cos(degToRad(buildingSetting.roofAngle));
    backRoofMesh.position.z =
      buildingSetting.defaultWallHeight +
      (buildingSetting.defaultSideWallWidth / 4) *
        Math.tan(degToRad(buildingSetting.roofAngle));
    buildingGroup.add(backRoofMesh);
  }

  onWindowResize(width, height) {
    console.log(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    camera.left = -width / cameraSetting.factor;
    camera.right = width / cameraSetting.factor;
    camera.top = height / cameraSetting.factor;
    camera.bottom = -height / cameraSetting.factor;
    renderer.setSize(width, height);
  }
}
