import {
  EventDispatcher,
  Scene,
  Vector3,
  CylinderGeometry,
  MeshBasicMaterial,
  Mesh,
  SphereGeometry,
  Object3D,
  MeshLambertMaterial,
} from 'three';

import { EVENT_ITEM_SELECTED, EVENT_ITEM_UNSELECTED } from '../core/events.js';

// As far as I understand, the HUD is here to show a rotation control on every item
// If this idea is correct, then it seriously sucks. A whole rendering to show just cones and lines as arrows?
export class HUD extends EventDispatcher {
  constructor(three, scene) {
    super();
    let scope = this;
    this.three = three;
    this.scene = scene ? scene : new Scene();
    this.selectedItem = null;
    this.rotating = false;
    this.mouseover = false;
    this.color = '#ffffff';
    this.hoverColor = '#f1c40f';
    this.activeObject = null;
    this.itemSelectedEvent = (o) => {
      scope.itemSelected(o.item);
    };
    this.itemUnselectedEvent = () => {
      scope.itemUnselected();
    };
    this.init();
  }

  init() {
    // this.three.itemSelectedCallbacks.add(itemSelected);
    // this.three.itemUnselectedCallbacks.add(itemUnselected);
    this.three.addEventListener(EVENT_ITEM_SELECTED, this.itemSelectedEvent);
    this.three.addEventListener(
      EVENT_ITEM_UNSELECTED,
      this.itemUnselectedEvent,
    );
  }

  getScene() {
    return this.scene;
  }

  getObject() {
    return this.activeObject;
  }

  resetSelectedItem() {
    this.selectedItem = null;

    if (this.activeObject) {
      this.scene.remove(this.activeObject);
      this.activeObject = null;
    }
  }

  itemSelected(item) {
    if (this.selectedItem != item) {
      this.resetSelectedItem();

      if (item.allowRotate && !item.fixed) {
        this.selectedItem = item;
        this.activeObject = this.makeObject(this.selectedItem);
        this.scene.add(this.activeObject);
      }
    }
  }

  itemUnselected() {
    this.resetSelectedItem();
  }

  setRotating(isRotating) {
    this.rotating = isRotating;
    this.setColor();
  }

  setMouseover(isMousedOver) {
    this.mouseover = isMousedOver;
    this.setColor();
  }

  setColor() {
    let scope = this;

    if (scope.activeObject) {
      scope.activeObject.children.forEach((obj) => {
        obj.material.color.set(scope.getColor());
      });
    }

    scope.three.ensureNeedsUpdate();
  }

  getColor() {
    return this.mouseover || this.rotating ? this.hoverColor : this.color;
  }

  update() {
    if (this.activeObject) {
      this.activeObject.rotation.y = this.selectedItem.rotation.y;
      this.activeObject.position.x = this.selectedItem.position.x;
      this.activeObject.position.z = this.selectedItem.position.z;
    }
  }

  makeLineGeometry(item) {
    let geometry = new CylinderGeometry();
    geometry.vertices.push(new Vector3(0, 0, 0), this.rotateVector(item));
    return geometry;
  }

  rotateVector(item) {
    let vec = new Vector3(
      0,
      0,
      Math.max(item.halfSize.x, item.halfSize.z) + 1.4 + this.distance,
    );
    return vec;
  }

  makeLineMaterial() {
    let mat = new MeshLambertMaterial({ color: this.getColor() });
    return mat;
  }

  setVars(item) {
    const length = Math.max(item.getWidth(), item.getDepth());
    this.coneRadius = length / 20;
    this.coneHeight = this.coneRadius * 2;
    this.sphereRadius = this.coneRadius * 0.8;
    this.lineRadius = this.coneRadius * 0.6;
    this.lineLength = length / 2 + 200;
    this.height = this.coneRadius + 50;
    // console.log(
    //   'hud dimensions: ',
    //   this.coneRadius,
    //   this.coneHeight,
    //   this.sphereRadius,
    //   this.lineRadius,
    //   this.lineLength,
    //   this.height,
    // );
  }

  makeLineMesh() {
    const geo = new CylinderGeometry(
      this.lineRadius,
      this.lineRadius,
      this.lineLength,
    );
    const mat = new MeshBasicMaterial({ color: this.getColor() });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(0, 0, this.lineLength / 2);
    mesh.rotation.x = -Math.PI / 2.0;
    return mesh;
  }

  makeConeMesh() {
    const geo = new CylinderGeometry(this.coneRadius, 0, this.coneHeight);
    const mat = new MeshBasicMaterial({ color: this.getColor() });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(0, 0, this.lineLength + this.coneHeight / 2);
    mesh.rotation.x = -Math.PI / 2;
    return mesh;
  }

  makeSphereMesh() {
    const geo = new SphereGeometry(this.sphereRadius, 16, 16);
    const mat = new MeshBasicMaterial({ color: this.getColor() });
    const mesh = new Mesh(geo, mat);
    return mesh;
  }

  makeObject(item) {
    this.setVars(item);
    let object = new Object3D();
    let lineMesh = this.makeLineMesh();
    let coneMesh = this.makeConeMesh();
    let sphereMesh = this.makeSphereMesh();
    object.add(lineMesh);
    object.add(coneMesh);
    object.add(sphereMesh);
    object.position.x = item.position.x;
    object.rotation.y = item.rotation.y;
    object.position.z = item.position.z;
    object.position.y = this.height;
    return object;
  }
}
