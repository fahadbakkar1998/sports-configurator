import { Group, Vector3 } from 'three';
import { OutEdge } from './out_edge';

export class OutPlane extends Group {
  constructor({ info, planeInfo }) {
    super();
    this.unit = info.unit;
    this.scene = info.model.scene.scene;

    this.topEdge = new OutEdge({
      info,
      parentInfo: { width: planeInfo.width },
    });
    this.topEdge.position.copy(new Vector3(0, planeInfo.height / 2, 0));
    this.topEdge.rotateZ(Math.PI);
    this.add(this.topEdge);

    this.bottomEdge = new OutEdge({
      info,
      parentInfo: { width: planeInfo.width },
    });
    this.bottomEdge.position.copy(new Vector3(0, -planeInfo.height / 2, 0));
    this.add(this.bottomEdge);

    this.leftEdge = new OutEdge({
      info,
      parentInfo: { width: planeInfo.height },
    });
    this.leftEdge.position.copy(new Vector3(-planeInfo.width / 2, 0, 0));
    this.leftEdge.rotateZ(-Math.PI / 2);
    this.add(this.leftEdge);

    this.rightEdge = new OutEdge({
      info,
      parentInfo: { width: planeInfo.height },
    });
    this.rightEdge.position.copy(new Vector3(planeInfo.width / 2, 0, 0));
    this.rightEdge.rotateZ(Math.PI / 2);
    this.add(this.rightEdge);
  }
}
