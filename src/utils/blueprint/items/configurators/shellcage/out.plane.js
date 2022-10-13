import { Group, Vector3 } from 'three';
import { OutEdge } from './out.edge';

export class OutPlane extends Group {
  constructor() {
    super();

    this.topEdge = new OutEdge();
    this.topEdge.rotateZ(Math.PI);
    this.add(this.topEdge);

    this.bottomEdge = new OutEdge();
    this.add(this.bottomEdge);

    this.leftEdge = new OutEdge();
    this.leftEdge.rotateZ(-Math.PI / 2);
    this.add(this.leftEdge);

    this.rightEdge = new OutEdge();
    this.rightEdge.rotateZ(Math.PI / 2);
    this.add(this.rightEdge);
  }

  redrawComponents({ components, compInfo }) {
    this.topEdge.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth },
    });
    this.topEdge.position.copy(new Vector3(0, compInfo.outHeight / 2, 0));

    this.bottomEdge.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth },
    });
    this.bottomEdge.position.copy(new Vector3(0, -compInfo.outHeight / 2, 0));

    this.leftEdge.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outHeight },
    });
    this.leftEdge.position.copy(new Vector3(-compInfo.outWidth / 2, 0, 0));

    this.rightEdge.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outHeight },
    });
    this.rightEdge.position.copy(new Vector3(compInfo.outWidth / 2, 0, 0));
  }
}
