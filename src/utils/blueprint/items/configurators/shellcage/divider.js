import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

export class Divider extends Group {
  constructor({ item, parentInfo }) {
    super();
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;
    const { width, height } = parentInfo;

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        color: 0x2ecc40,
        side: DoubleSide,
        transparent: true,
        opacity: 0.3,
      }),
    );
    this.add(this.planeMesh);
  }
}
