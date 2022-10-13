import { Group, Vector3 } from 'three';
import { OutPlane } from './out.plane';
import { RibLine } from './rib.line';

export class OutContainer extends Group {
  constructor() {
    super();

    this.frontPlane = new OutPlane();
    this.add(this.frontPlane);

    this.backPlane = new OutPlane();
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new OutPlane();
    this.leftPlane.rotateY(-Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new OutPlane();
    this.rightPlane.rotateY(Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new OutPlane();
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);

    this.bottomPlane = new OutPlane();
    this.bottomPlane.rotateX(Math.PI / 2);
    this.add(this.bottomPlane);

    this.ribLines = [];
  }

  generateRibLine() {
    const ribLine = new RibLine();
    this.ribLines.push(ribLine);
    this.add(ribLine);
    return ribLine;
  }

  redrawComponents({ components, compInfo }) {
    this.frontPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth, height: compInfo.outHeight },
    });
    this.frontPlane.position.copy(new Vector3(0, 0, compInfo.outLength / 2));

    this.backPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth, height: compInfo.outHeight },
    });
    this.backPlane.position.copy(new Vector3(0, 0, -compInfo.outLength / 2));

    this.leftPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outLength, height: compInfo.outHeight },
    });
    this.leftPlane.position.copy(new Vector3(-compInfo.outWidth / 2, 0, 0));

    this.rightPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outLength, height: compInfo.outHeight },
    });
    this.rightPlane.position.copy(new Vector3(compInfo.outWidth / 2, 0, 0));

    this.topPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth, height: compInfo.outLength },
    });
    this.topPlane.position.copy(new Vector3(0, compInfo.outHeight / 2, 0));

    this.bottomPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: compInfo.outWidth, height: compInfo.outLength },
    });
    this.bottomPlane.position.copy(new Vector3(0, -compInfo.outHeight / 2, 0));

    this.redrawRibLines({ components, compInfo });
  }

  redrawRibLines({ components, compInfo }) {
    const dividersDimension = compInfo.dividersDimension;

    if (dividersDimension) {
      const curLibLinesNum = this.ribLines.length;
      let dividerCurX = 0;

      for (let i = dividersDimension.length; i < curLibLinesNum; i++) {
        const ribLine = this.ribLines.pop();
        this.remove(ribLine);
      }

      for (let i in dividersDimension) {
        const dividerDimension = dividersDimension[i];
        dividerCurX += dividerDimension.deltaX;
        if (!this.ribLines[i]) this.generateRibLine();
        this.ribLines[i].position.copy(
          new Vector3(
            dividerCurX - compInfo.outWidth / 2 - dividerDimension.deltaX / 2,
            compInfo.outHeight / 2,
            0,
          ),
        );
        this.ribLines[i].redrawComponents({
          components,
          compInfo,
        });
      }

      if (!this.ribLines[dividersDimension.length]) this.generateRibLine();
      this.ribLines[dividersDimension.length].position.copy(
        new Vector3(
          dividerCurX +
            dividersDimension[dividersDimension.length - 1].deltaX / 2 -
            compInfo.outWidth / 2,
          compInfo.outHeight / 2,
          0,
        ),
      );
      this.ribLines[dividersDimension.length].redrawComponents({
        components,
        compInfo,
      });
    }
  }
}
