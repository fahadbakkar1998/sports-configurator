import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

export class InPlane extends Group {
  constructor({ item, parentInfo }) {
    super();
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;
    const { width, height } = parentInfo;

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        // color: 0x696969,
        color: 0xff0000,
        side: DoubleSide,
        transparent: true,
        opacity: 0.3,
      }),
    );
    this.add(this.planeMesh);
  }

  redrawComponents({ components, parentInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      parentInfo.width,
      parentInfo.height,
    );
  }
}
