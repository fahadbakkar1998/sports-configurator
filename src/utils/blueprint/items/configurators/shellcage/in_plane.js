import {
  Group,
  Mesh,
  Vector2,
  Vector3,
  PlaneGeometry,
  MeshStandardMaterial,
  MeshBasicMaterial,
  DoubleSide,
  Plane,
  Object3D,
} from 'three';

export class InPlane extends Group {
  constructor({ info, planeInfo }) {
    super();
    this.info = info;
    this.scene = info.model.scene.scene;
    const { width, height } = planeInfo;

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        color: 0x696969,
        side: DoubleSide,
        transparent: true,
        opacity: 0.3,
      }),
    );
    this.add(this.planeMesh);
  }
}