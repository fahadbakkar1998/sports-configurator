import { Group, Vector3 } from 'three';
import { OutEdge } from './out_edge';

export class OutPlane extends Group {
  constructor({ item, parentInfo }) {
    super();
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;

    this.topEdge = new OutEdge({
      item,
      parentInfo: { width: parentInfo.width },
    });
    this.topEdge.position.copy(new Vector3(0, parentInfo.height / 2, 0));
    this.topEdge.rotateZ(Math.PI);
    this.add(this.topEdge);

    this.bottomEdge = new OutEdge({
      item,
      parentInfo: { width: parentInfo.width },
    });
    this.bottomEdge.position.copy(new Vector3(0, -parentInfo.height / 2, 0));
    this.add(this.bottomEdge);

    this.leftEdge = new OutEdge({
      item,
      parentInfo: { width: parentInfo.height },
    });
    this.leftEdge.position.copy(new Vector3(-parentInfo.width / 2, 0, 0));
    this.leftEdge.rotateZ(-Math.PI / 2);
    this.add(this.leftEdge);

    this.rightEdge = new OutEdge({
      item,
      parentInfo: { width: parentInfo.height },
    });
    this.rightEdge.position.copy(new Vector3(parentInfo.width / 2, 0, 0));
    this.rightEdge.rotateZ(Math.PI / 2);
    this.add(this.rightEdge);
  }

  redrawComponents({ components, parentInfo }) {
    this.topEdge.redrawComponents({
      components,
      parentInfo: { width: parentInfo.width },
    });
    this.topEdge.position.copy(new Vector3(0, parentInfo.height / 2, 0));

    this.bottomEdge.redrawComponents({
      components,
      parentInfo: { width: parentInfo.width },
    });
    this.bottomEdge.position.copy(new Vector3(0, -parentInfo.height / 2, 0));

    this.leftEdge.redrawComponents({
      components,
      parentInfo: { width: parentInfo.height },
    });
    this.leftEdge.position.copy(new Vector3(-parentInfo.width / 2, 0, 0));

    this.rightEdge.redrawComponents({
      components,
      parentInfo: { width: parentInfo.height },
    });
    this.rightEdge.position.copy(new Vector3(parentInfo.width / 2, 0, 0));
  }
}
