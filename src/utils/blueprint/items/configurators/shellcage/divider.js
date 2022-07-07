import {
  Group,
  Vector3,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

export class Divider extends Group {
  constructor({ info, dividerInfo }) {
    super();
    this.info = info;
    this.scene = info.model.scene.scene;
    const { width, height } = dividerInfo;

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        color: 0x2ECC40,
        side: DoubleSide,
        transparent: true,
        opacity: 0.3,
      }),
    );
    this.add(this.planeMesh);
  }
}
