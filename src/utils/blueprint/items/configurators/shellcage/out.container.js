import { Group, Vector3 } from 'three';
import { OutPlane } from './out.plane';
import { RibLine } from './rib.line';

export class OutContainer extends Group {
  constructor() {
    super();

    this.frontPlane = new OutPlane();
    this.add(this.frontPlane);

    this.backPlane = new OutPlane();
    this.add(this.backPlane);

    this.leftPlane = new OutPlane();
    this.add(this.leftPlane);

    this.rightPlane = new OutPlane();
    this.add(this.rightPlane);

    this.topPlane = new OutPlane();
    this.add(this.topPlane);

    this.bottomPlane = new OutPlane();
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
    this.frontPlane.redrawComponents({ components, compInfo });
    this.frontPlane.position.copy(new Vector3(0, 0, compInfo.outLength / 2));

    this.backPlane.redrawComponents({ components, compInfo });
    this.backPlane.position.copy(new Vector3(0, 0, -compInfo.outLength / 2));

    this.leftPlane.redrawComponents({ components, compInfo });
    this.leftPlane.position.copy(new Vector3(-compInfo.outWidth / 2, 0, 0));

    this.rightPlane.redrawComponents({ components, compInfo });
    this.rightPlane.position.copy(new Vector3(compInfo.outWidth / 2, 0, 0));

    this.topPlane.redrawComponents({ components, compInfo });
    this.topPlane.position.copy(new Vector3(0, compInfo.outHeight / 2, 0));

    this.bottomPlane.redrawComponents({ components, compInfo });
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

        if (i < dividersDimension - 1) {
          this.ribLines[i].position.copy(
            new Vector3(dividerCurX / 2, compInfo.outHeight / 2, 0),
          );
        } else {
          this.ribLines[i].position.copy(
            new Vector3(
              dividerCurX + dividerDimension.deltaX / 2 - compInfo.outWidth / 2,
              compInfo.outHeight / 2,
              0,
            ),
          );
        }

        this.ribLines[i].redrawComponents({
          components,
          compInfo,
        });
      }
    }
  }
}
