import {
  EventDispatcher,
  Vector2,
  Vector3,
  Face3,
  Geometry,
  Shape,
  ShapeGeometry,
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

export class Roof extends EventDispatcher {
  constructor({ scene, room, three }) {
    super();
    this.scene = scene;
    this.room = room;
    this.three = three;
    this.roofTexture = 'assets/rooms/textures/hardwood.png';
    this.sideTexture = 'assets/rooms/textures/wallmap.png';
    this.angle = 30;
    this.type = 'GABLED'; // GABLED, SINGLE, FLAT

    this.boundary = null;
    this.roomWidth = this.roomLength = this.roomHeight = 0;
    this.roofPlane = null;
    this.sidePlane = null;

    this.generateBasicData();
    this.generateRoofPlane();
  }

  generateBasicData() {
    if (!this.room || !this.room.corners || !this.room.corners.length) return;
    const firstCorner = this.room.corners[0];
    let minX, minY, maxX, maxY;
    minX = maxX = firstCorner.x;
    minY = maxY = firstCorner.y;
    this.room.corners.forEach((corner) => {
      if (minX > corner.x) minX = corner.x;
      if (minY > corner.y) minY = corner.y;
      if (maxX < corner.x) maxX = corner.x;
      if (maxY < corner.y) maxY = corner.y;
      if (this.roomHeight < corner.elevation)
        this.roomHeight = corner.elevation;
    });
    this.boundary = { min: { x: minX, y: minY }, max: { x: maxX, y: maxY } };
    this.roomWidth = maxX - minX;
    this.roomLength = maxY - minY;
  }

  generateRoofPlane() {
    if (!this.boundary) return;
    if (this.roofPlane && this.roofPlane.parent) {
      this.roofPlane.parent.remove(this.roofPlane);
    }
    // setup texture
    const geometry = new Geometry();
    switch (this.type) {
      case 'GABLED':
        geometry.vertices.push(this.boundary.min.x, this.roomHeight, this.boundary.min.y);
        geometry.vertices.push(this.boundary.min.x, this.roomHeight, this.boundary.max.y);
        geometry.vertices.push(this.boundary.min.x, this.roomHeight, this.boundary.min.y);
        geometry.vertices.push(this.boundary.min.x, this.roomHeight, this.boundary.min.y);
        geometry.vertices.push(this.boundary.min.x, this.roomHeight, this.boundary.min.y);
        geometry.vertices.push(this.boundary.min.x, this.roomHeight, this.boundary.min.y);
        break;
    }
  }

  removeFromScene() {}

  addToScene() {}

  generateRoofPlanes() {
    if (this.roofPlane && this.roofPlane != null) {
      if (this.roofPlane.parent != null) {
        this.roofPlane.parent.remove(this.roofPlane);
      }
    }
    // setup texture
    let geometry = new Geometry();

    this.corners.forEach((corner) => {
      let vertex = new Vector3(corner.x, corner.elevation, corner.y);
      geometry.vertices.push(vertex);
    });
    for (let i = 2; i < geometry.vertices.length; i++) {
      let face = new Face3(0, i - 1, i);
      geometry.faces.push(face);
    }
    this.roofPlane = new Mesh(
      geometry,
      new MeshBasicMaterial({ side: DoubleSide, visible: false }),
    );
    this.roofPlane.room = this;
  }
}
