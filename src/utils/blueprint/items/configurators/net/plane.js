import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

export class Plane extends Group {
  constructor({ item, compInfo }) {
    super();
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    const { width, height } = compInfo;

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

  redrawComponents({ components, compInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      compInfo.width,
      compInfo.height,
    );
  }
}
