import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

export class Divider extends Group {
  constructor({ item, compInfo }) {
    super();
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;
    const { width, height } = compInfo;

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

  redrawComponents({ components, compInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      compInfo.width,
      compInfo.height,
    );
  }
}
