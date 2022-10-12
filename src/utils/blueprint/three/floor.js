import {
  EventDispatcher,
  TextureLoader,
  RepeatWrapping,
  MeshBasicMaterial,
  MeshPhongMaterial,
  FrontSide,
  DoubleSide,
  Vector2,
  Vector3,
  Face3,
  Geometry,
  Shape,
  ShapeGeometry,
  Mesh,
} from 'three';
import { EVENT_CHANGED } from '../core/events.js';
import { Configuration, configWallHeight } from '../core/configuration.js';
import { floorLayerHeight } from '../../../constants.js';

export class Floor extends EventDispatcher {
  constructor(scene, room, three) {
    super();
    this.scene = scene;
    this.room = room;
    this.three = three;
    this.floorPlane = null;
    this.roofPlane = null;
    this.changedEvent = () => {
      this.redraw();
    };
    this.init();
  }

  switchWireFrame(flag) {
    this.floorPlane.visible = !flag;
    this.roofPlane.visible = !flag;
  }

  init() {
    // this.room.fireOnFloorChange(redraw);
    this.room.addEventListener(EVENT_CHANGED, this.changedEvent);

    this.floorPlane = this.buildFloor();
    // roofs look weird, so commented out
    // this.roofPlane = this.buildRoofUniformHeight();
    this.roofPlane = this.buildRoofVaryingHeight();
    this.roofPlane.visible = false;
  }

  redraw() {
    this.removeFromScene();
    this.floorPlane = this.buildFloor();
    this.roofPlane = this.buildRoofVaryingHeight();
    this.roofPlane.visible = false;
    this.floorPlane.material.needsUpdate =
      this.floorPlane.material.map.needsUpdate = true;
    this.addToScene();
  }

  buildFloor() {
    let textureSettings = this.room.getTexture();
    // setup texture
    // let floorTexture = ImageUtils.loadTexture(textureSettings.url);
    let floorTexture = new TextureLoader().load(textureSettings.url);
    floorTexture.wrapS = RepeatWrapping;
    floorTexture.wrapT = RepeatWrapping;
    floorTexture.repeat.set(1, 1);
    let floorMaterialTop = new MeshPhongMaterial({
      map: floorTexture,
      side: DoubleSide,
      // ambient: 0xffffff,
      color: 0xcccccc,
      specular: 0x0a0a0a,
      // wireframe: true,
    });

    let textureScale = textureSettings.scale;
    // http://stackoverflow.com/questions/19182298/how-to-texture-a-three-js-mesh-created-with-shapegeometry
    // scale down coords to fit 0 -> 1, then rescale

    let points = [];
    this.room.interiorCorners.forEach((corner) => {
      points.push(
        new Vector2(corner.x / textureScale, corner.y / textureScale),
      );
    });
    let shape = new Shape(points);
    let geometry = new ShapeGeometry(shape);
    let floor = new Mesh(geometry, floorMaterialTop);

    floor.rotation.set(Math.PI / 2, 0, 0);
    floor.scale.set(textureScale, textureScale, textureScale);
    floor.receiveShadow = true;
    floor.castShadow = false;
    return floor;
  }

  buildRoofVaryingHeight() {
    // setup texture
    let roofMaterial = new MeshBasicMaterial({
      side: FrontSide,
      color: 0xe5e5e5,
    });
    let geometry = new Geometry();

    this.room.corners.forEach((corner) => {
      let vertex = new Vector3(corner.x, corner.elevation, corner.y);
      geometry.vertices.push(vertex);
    });
    for (let i = 2; i < geometry.vertices.length; i++) {
      let face = new Face3(0, i - 1, i);
      geometry.faces.push(face);
    }
    let roof = new Mesh(geometry, roofMaterial);
    // roof.rotation.set(Math.PI / 2, 0, 0);
    // roof.position.y = Configuration.getNumericValue(configWallHeight);
    return roof;
  }

  buildRoofUniformHeight() {
    // setup texture
    let roofMaterial = new MeshBasicMaterial({
      side: FrontSide,
      color: 0xe5e5e5,
    });
    let points = [];
    this.room.interiorCorners.forEach((corner) => {
      points.push(new Vector2(corner.x, corner.y));
    });
    let shape = new Shape(points);
    let geometry = new ShapeGeometry(shape);
    let roof = new Mesh(geometry, roofMaterial);
    roof.rotation.set(Math.PI / 2, 0, 0);
    roof.position.y = Configuration.getNumericValue(configWallHeight);
    return roof;
  }

  addToScene() {
    this.scene.add(this.floorPlane);
    this.floorPlane.position.y = floorLayerHeight;
    this.scene.add(this.roofPlane);
    // scene.add(roofPlane);
    // hack so we can do intersect testing
    // this.scene.add(this.room.floorPlane);
    // this.scene.add(this.room.roofPlane);
    // this.three.render(true);
  }

  removeFromScene() {
    this.scene.remove(this.floorPlane);
    this.scene.remove(this.roofPlane);
    this.scene.remove(this.room.floorPlane);
    this.scene.remove(this.room.roofPlane);
  }

  showRoof(flag) {
    this.roofPlane.visible = flag;
    this.three.render(true);
  }
}
