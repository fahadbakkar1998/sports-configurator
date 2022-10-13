import { Group, Vector3 } from 'three';
import { InPlane } from './in.plane';
import { Divider } from './divider';

export class InContainer extends Group {
  constructor() {
    super();

    this.frontPlane = new InPlane();
    this.add(this.frontPlane);

    this.backPlane = new InPlane();
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new InPlane();
    this.leftPlane.rotateY(Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new InPlane();
    this.rightPlane.rotateY(-Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new InPlane();
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);

    this.dividers = [];
  }

  generateDivider() {
    const divider = new Divider();
    divider.rotateY(Math.PI / 2);
    this.dividers.push(divider);
    this.add(divider);
    return divider;
  }

  redrawComponents({ components, compInfo }) {
    this.frontPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth, height: compInfo.outHeight },
    });
    this.frontPlane.position.copy(new Vector3(0, 0, compInfo.inDeltaZ1 / 2));
    this.add(this.frontPlane);

    this.backPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth, height: compInfo.outHeight },
    });
    this.backPlane.position.copy(new Vector3(0, 0, -compInfo.inDeltaZ1 / 2));
    this.add(this.backPlane);

    this.leftPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.inDeltaZ1, height: compInfo.outHeight },
    });
    this.leftPlane.position.copy(new Vector3(-compInfo.outWidth / 2, 0, 0));
    this.add(this.leftPlane);

    this.rightPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.inDeltaZ1, height: compInfo.outHeight },
    });
    this.rightPlane.position.copy(new Vector3(compInfo.outWidth / 2, 0, 0));
    this.add(this.rightPlane);

    this.topPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth, height: compInfo.inDeltaZ1 },
    });
    this.topPlane.position.copy(new Vector3(0, compInfo.outHeight / 2, 0));
    this.add(this.topPlane);

    const { dividersDimension } = compInfo;

    if (dividersDimension) {
      const curDividersNum = this.dividers.length;
      let dividerCurX = 0;

      for (let i = dividersDimension.length; i < curDividersNum; i++) {
        const divider = this.dividers.pop();
        this.remove(divider);
      }

      for (let i in dividersDimension) {
        const dividerDimension = dividersDimension[i];
        dividerCurX += dividerDimension.deltaX;
        const dividerWidth =
          dividerDimension.deltaZ1 - dividerDimension.deltaZ0;
        if (!this.dividers[i]) this.generateDivider();
        this.dividers[i].position.copy(
          new Vector3(
            dividerCurX - compInfo.outWidth / 2,
            0,
            dividerDimension.deltaZ0 +
              dividerWidth / 2 -
              compInfo.inDeltaZ1 / 2,
          ),
        );
        this.dividers[i].redrawComponents({
          components,
          compInfo,
          subCompInfo: { width: dividerWidth, height: compInfo.outHeight },
        });
      }
    }
  }
}
