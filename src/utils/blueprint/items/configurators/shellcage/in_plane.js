import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

export class InPlane extends Group {
  constructor({ info, parentInfo }) {
    super();
    this.info = info;
    this.scene = info.model.scene.scene;
    const { width, height } = parentInfo;

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
