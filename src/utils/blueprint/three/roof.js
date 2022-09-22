import { EVENT_CHANGED } from '../core/events.js';
import {
  EventDispatcher,
  Vector3,
  Face3,
  Geometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  DoubleSide,
  TextureLoader,
  RepeatWrapping,
  FrontSide,
  BackSide,
  PlaneGeometry,
} from 'three';
import { Configuration, configWallThickness } from '../core/configuration';
import { degToRad } from '../../../common';
import { Vector2 } from 'three';

export class Roof extends EventDispatcher {
  constructor({ scene, room, three, controls }) {
    super();
    this.scene = scene;
    this.room = room;
    this.three = three;
    this.controls = controls;

    this.textureLoader = new TextureLoader();
    this.topTexture = this.textureLoader.load('assets/rooms/textures/roof.jpg');
    this.bottomTexture = this.textureLoader.load(
      'assets/rooms/textures/hardwood.png',
    );
    this.thicknessTexture = this.textureLoader.load(
      'assets/rooms/textures/hardwood.png',
    );
    this.sideTexture = this.textureLoader.load(room.getTexture().url);

    this.middleHeight = 100;
    this.singleHeight = this.middleHeight * 2;
    this.wallThickness = Configuration.getNumericValue(configWallThickness);
    // this.thickness = this.wallThickness;
    this.thickness = 0.1;
    this.type = 'GABLED'; // GABLED, SINGLE, FLAT

    this.minX = this.minY = this.maxX = this.maxY = this.offsetFromLeft = 0;
    this.roomWidth = this.roomLength = this.roomHeight = 0;

    this.topPlane = null;
    this.bottomPlane = null;
    this.thicknessPlane = null;
    this.frontPlane = null;
    this.backPlane = null;

    this.visible = false;

    this.generateBasicData();
    this.generateRoofPlane();

    this.room.roof = this;

    this.room.addEventListener(EVENT_CHANGED, () => {
      this.sideTexture = this.textureLoader.load(this.room.getTexture().url);
      this.frontPlane.material.map = this.sideTexture;
      this.frontPlane.material.needsUpdate = true;
      this.backPlane.material.map = this.sideTexture;
      this.backPlane.material.needsUpdate = true;
      this.three.render(true);
    });
  }

  set setType(val) {
    this.type = val;
    switch (val) {
      case 'GABLED':
        this.offsetFromLeft = this.roomWidth / 2;
        break;
      case 'SINGLE':
        this.offsetFromLeft = this.roomWidth;
        break;
      case 'FLAT':
        this.setMiddleHeight = 0;
        break;
    }
    this.redraw();
  }

  set setMiddleHeight(val) {
    this.middleHeight = val;
    this.redraw();
  }

  set setVisible(val) {
    this.updateVisible(val);
    this.redraw();
  }

  updateVisible(flag) {
    this.visible = flag;
    this.topPlane.material.visible = flag;
    this.bottomPlane.material.visible = flag;
    this.frontPlane.material.visible = flag;
    this.backPlane.material.visible = flag;
    this.scene.scene.needsUpdate = true;
    this.three.render(true);
  }

  redraw() {
    this.generateRoofPlane();
    this.addToScene();
  }

  generateBasicData() {
    if (!this.room || !this.room.corners || !this.room.corners.length) return;
    const firstCorner = this.room.corners[0];
    this.minX = this.maxX = firstCorner.x;
    this.minY = this.maxY = firstCorner.y;

    this.room.corners.forEach((corner) => {
      if (this.minX > corner.x) this.minX = corner.x;
      if (this.minY > corner.y) this.minY = corner.y;
      if (this.maxX < corner.x) this.maxX = corner.x;
      if (this.maxY < corner.y) this.maxY = corner.y;
      if (this.roomHeight < corner.elevation)
        this.roomHeight = corner.elevation;
    });

    this.roomWidth = this.maxX - this.minX;
    this.roomLength = this.maxY - this.minY;
    this.offsetFromLeft = this.roomWidth / 2;
  }

  removeAllPlane() {
    if (this.topPlane && this.topPlane.parent) {
      this.topPlane.parent.remove(this.topPlane);
    }
    if (this.bottomPlane && this.bottomPlane.parent) {
      this.bottomPlane.parent.remove(this.bottomPlane);
    }
    if (this.thicknessPlane && this.thicknessPlane.parent) {
      this.thicknessPlane.parent.remove(this.thicknessPlane);
    }
    if (this.frontPlane && this.frontPlane.parent) {
      this.frontPlane.parent.remove(this.frontPlane);
    }
    if (this.backPlane && this.backPlane.parent) {
      this.backPlane.parent.remove(this.backPlane);
    }
  }

  generateRoofPlane() {
    if (!this.roomWidth || !this.roomLength) return;
    this.removeAllPlane();

    const topGeometry = new Geometry();
    const bottomGeometry = new Geometry();
    const thicknessGeometry = new Geometry();
    const frontSideGeometry = new Geometry();
    const backSideGeometry = new Geometry();

    const halfRoomWidth = this.roomWidth / 2;
    const roofBottomWidth = Math.sqrt(
      halfRoomWidth * halfRoomWidth + this.middleHeight * this.middleHeight,
    );
    const thicknessHeight = (this.thickness * roofBottomWidth) / halfRoomWidth;
    const gabledBottomHeight = this.roomHeight + this.middleHeight;
    const gabledTopHeight = gabledBottomHeight + thicknessHeight + 0.1;
    const halfWallThickness = this.wallThickness / 2;
    const middleX = this.minX + this.offsetFromLeft;

    let topVertices, bottomVertices, frontSideVertices, backSideVertices;

    // TOP
    topVertices = [
      new Vector3(
        this.minX - halfWallThickness,
        this.roomHeight + 0.1,
        this.minY - halfWallThickness,
      ), // left-top
      new Vector3(
        this.minX - halfWallThickness,
        this.roomHeight + 0.1,
        this.maxY + halfWallThickness,
      ), // left-bottom
      new Vector3(middleX, gabledTopHeight, this.maxY + halfWallThickness), // middle-bottom
      new Vector3(middleX, gabledTopHeight, this.minY - halfWallThickness), // middle-top
      new Vector3(
        this.maxX + halfWallThickness,
        this.roomHeight + 0.1,
        this.minY - halfWallThickness,
      ), // right-top
      new Vector3(
        this.maxX + halfWallThickness,
        this.roomHeight + 0.1,
        this.maxY + halfWallThickness,
      ), // right-bottom
    ];
    topVertices.forEach((vertex) => topGeometry.vertices.push(vertex));

    // BOTTOM
    bottomVertices = [
      new Vector3(
        this.minX + halfWallThickness,
        this.roomHeight,
        this.minY - halfWallThickness,
      ), // left-top
      new Vector3(
        this.minX + halfWallThickness,
        this.roomHeight,
        this.maxY + halfWallThickness,
      ), // left-bottom
      new Vector3(middleX, gabledBottomHeight, this.maxY + halfWallThickness), // middle-bottom
      new Vector3(middleX, gabledBottomHeight, this.minY - halfWallThickness), // middle-top
      new Vector3(
        this.maxX - halfWallThickness,
        this.roomHeight,
        this.minY - halfWallThickness,
      ), // right-top
      new Vector3(
        this.maxX - halfWallThickness,
        this.roomHeight,
        this.maxY + halfWallThickness,
      ), // right-bottom
    ];
    bottomVertices.forEach((vertex) => bottomGeometry.vertices.push(vertex));

    // THICKNESS
    this.generateBetweenVertices(
      thicknessGeometry,
      topVertices,
      bottomVertices,
    );

    // FRONT SIDE
    frontSideVertices = [
      new Vector3(
        this.minX - halfWallThickness,
        this.roomHeight,
        this.maxY + halfWallThickness,
      ),
      new Vector3(middleX, gabledTopHeight, this.maxY + halfWallThickness),
      new Vector3(
        this.maxX + halfWallThickness,
        this.roomHeight,
        this.maxY + halfWallThickness + 0.1,
      ),
    ];
    frontSideVertices.forEach((vertex) =>
      frontSideGeometry.vertices.push(vertex),
    );

    // BACK SIDE
    backSideVertices = [
      new Vector3(
        this.minX - halfWallThickness,
        this.roomHeight,
        this.minY - halfWallThickness,
      ),
      new Vector3(middleX, gabledTopHeight, this.minY - halfWallThickness),
      new Vector3(
        this.maxX + halfWallThickness,
        this.roomHeight,
        this.minY - halfWallThickness - 0.1,
      ),
    ];
    backSideVertices.forEach((vertex) =>
      backSideGeometry.vertices.push(vertex),
    );

    this.addFaces(topGeometry);
    this.topPlane = new Mesh(
      topGeometry,
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.topTexture,
        visible: this.visible,
        opacity: 0.3,
        transparent: true,
      }),
    );

    this.addFaces(bottomGeometry);
    this.bottomPlane = new Mesh(
      bottomGeometry,
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.bottomTexture,
        visible: this.visible,
        opacity: 0.3,
        transparent: true,
      }),
    );

    this.addFaces(thicknessGeometry);
    this.thicknessPlane = new Mesh(
      thicknessGeometry,
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.thicknessTexture,
        visible: this.visible,
        opacity: 0.3,
        transparent: true,
      }),
    );

    this.addFaces(frontSideGeometry);
    this.frontPlane = new Mesh(
      frontSideGeometry,
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.sideTexture,
        visible: this.visible,
        opacity: 0.3,
        transparent: true,
      }),
    );

    this.addFaces(backSideGeometry);
    this.backPlane = new Mesh(
      backSideGeometry,
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.sideTexture,
        visible: this.visible,
        opacity: 0.3,
        transparent: true,
      }),
    );
  }

  generateBetweenVertices(targetGeometry, srcVertices1, srcVertices2) {
    if (
      srcVertices1.length === srcVertices2.length &&
      !(srcVertices1.length % 2) &&
      srcVertices1.length >= 4
    ) {
      const length = srcVertices2.length;
      let isTBDirection = true;

      for (let i = 0; i < length; i++) {
        if (isTBDirection) {
          targetGeometry.vertices.push(srcVertices1[i]);
          targetGeometry.vertices.push(srcVertices2[i]);
        } else {
          targetGeometry.vertices.push(srcVertices2[i]);
          targetGeometry.vertices.push(srcVertices1[i]);
        }
        isTBDirection = !isTBDirection;
      }

      for (let j = length - 4; j >= 0; j -= 2) {
        if (isTBDirection) {
          targetGeometry.vertices.push(srcVertices1[j]);
          targetGeometry.vertices.push(srcVertices2[j]);
          targetGeometry.vertices.push(srcVertices2[j + 1]);
          targetGeometry.vertices.push(srcVertices1[j + 1]);
        } else {
          targetGeometry.vertices.push(srcVertices2[j]);
          targetGeometry.vertices.push(srcVertices1[j]);
          targetGeometry.vertices.push(srcVertices1[j + 1]);
          targetGeometry.vertices.push(srcVertices2[j + 1]);
        }
      }
    }
  }

  addFaces(geometry) {
    if (geometry.vertices.length >= 3) {
      for (let i = 0; i < geometry.vertices.length - 2; i += 2) {
        geometry.faces.push(new Face3(i, i + 1, i + 2));
        geometry.faceVertexUvs[0].push([
          new Vector2(0, 0),
          new Vector2(0, 1),
          new Vector2(1, 1),
        ]);
        if (geometry.vertices.length > i + 3) {
          geometry.faces.push(new Face3(i, i + 2, i + 3));
          geometry.faceVertexUvs[0].push([
            new Vector2(0, 0),
            new Vector2(1, 1),
            new Vector2(1, 0),
          ]);
        }
      }
    }
  }

  removeFromScene() {
    this.scene.remove(this.topPlane);
    this.scene.remove(this.bottomPlane);
    // this.scene.remove(this.thicknessPlane);
    this.scene.remove(this.frontPlane);
    this.scene.remove(this.backPlane);
  }

  addToScene() {
    this.scene.add(this.topPlane);
    this.scene.add(this.bottomPlane);
    // this.scene.add(this.thicknessPlane);
    this.scene.add(this.frontPlane);
    this.scene.add(this.backPlane);
    this.three.render(true);
  }
}
