import { Group, Vector3 } from 'three';
import { OutPlane } from './out_plane';
import { RibLine } from './rib_line';
import { Dimensioning } from '../../../core/dimensioning';

export class OutContainer extends Group {
  constructor({ item, compInfo }) {
    super();
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    const { width, height, length } = compInfo;
    const dividers = item.metadata.components.dividers;

    // generate planes
    this.frontPlane = new OutPlane({ item, compInfo: { width, height } });
    this.frontPlane.position.copy(new Vector3(0, 0, length / 2));
    this.add(this.frontPlane);

    this.backPlane = new OutPlane({ item, compInfo: { width, height } });
    this.backPlane.position.copy(new Vector3(0, 0, -length / 2));
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new OutPlane({
      item,
      compInfo: { width: length, height },
    });
    this.leftPlane.position.copy(new Vector3(-width / 2, 0, 0));
    this.leftPlane.rotateY(Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new OutPlane({
      item,
      compInfo: { width: length, height },
    });
    this.rightPlane.position.copy(new Vector3(width / 2, 0, 0));
    this.rightPlane.rotateY(-Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new OutPlane({
      item,
      compInfo: { width, height: length },
    });
    this.topPlane.position.copy(new Vector3(0, height / 2, 0));
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);

    this.bottomPlane = new OutPlane({
      item,
      compInfo: { width, height: length },
    });
    this.bottomPlane.position.copy(new Vector3(0, -height / 2, 0));
    this.bottomPlane.rotateX(Math.PI / 2);
    this.add(this.bottomPlane);

    // generate rib lines
    this.ribLines = [];
    const ribLineInfo = this.getRibLineInfo(item.metadata.components);
    if (dividers && dividers.value && dividers.value.length) {
      let dividerCurX = 0;
      dividers.value.forEach((divider) => {
        const dividerDeltaX = Dimensioning.cmFromMeasureRaw(
          divider.value.deltaX.value,
          this.unit,
        );
        const ribLine = new RibLine({
          item,
          compInfo: { length },
        });
        ribLine.position.copy(
          new Vector3(
            dividerCurX + dividerDeltaX / 2 - width / 2,
            height / 2,
            0,
          ),
        );
        this.ribLines.push(ribLine);
        this.add(ribLine);
        dividerCurX += dividerDeltaX;
      });
      if (dividerCurX + ribLineInfo.allowableLaneWidth <= width) {
        const ribLine = new RibLine({
          item,
          compInfo: { length },
        });
        ribLine.position.copy(new Vector3(dividerCurX / 2, height / 2, 0));
        this.ribLines.push(ribLine);
        this.add(ribLine);
      }
    }
  }

  getRibLineInfo(components) {
    const diameter = Dimensioning.cmFromMeasureRaw(
      components.rib_line.value.diameter.value,
      this.unit,
    );
    const allowableLaneWidth = Dimensioning.cmFromMeasureRaw(
      components.rib_line.value.allowableLaneWidth.value,
      this.unit,
    );
    return { diameter, allowableLaneWidth };
  }

  redrawComponents({ components, compInfo }) {
    const ribLineInfo = this.getRibLineInfo(components);
    
    // redraw planes
    this.frontPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.width, height: compInfo.height },
    });
    this.frontPlane.position.copy(new Vector3(0, 0, compInfo.length / 2));

    this.backPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.width, height: compInfo.height },
    });
    this.backPlane.position.copy(new Vector3(0, 0, -compInfo.length / 2));

    this.leftPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.length, height: compInfo.height },
    });
    this.leftPlane.position.copy(new Vector3(-compInfo.width / 2, 0, 0));

    this.rightPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.length, height: compInfo.height },
    });
    this.rightPlane.position.copy(new Vector3(compInfo.width / 2, 0, 0));

    this.topPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.width, height: compInfo.length },
    });
    this.topPlane.position.copy(new Vector3(0, compInfo.height / 2, 0));

    this.bottomPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.width, height: compInfo.length },
    });
    this.bottomPlane.position.copy(new Vector3(0, -compInfo.height / 2, 0));

    // redraw rib lines
    const dividers = components.dividers;
    this.ribLines.forEach((ribLine) =>
      ribLine.redrawComponents({
        components,
        compInfo: { length: compInfo.length },
      }),
    );
    if (dividers && dividers.value && dividers.value.length) {
      let dividerCurX = 0;
      dividers.value.forEach((divider, index) => {
        const dividerDeltaX = Dimensioning.cmFromMeasureRaw(
          divider.value.deltaX.value,
          this.unit,
        );
        this.ribLines[index].position.copy(
          new Vector3(
            dividerCurX + dividerDeltaX / 2 - compInfo.width / 2,
            compInfo.height / 2,
            0,
          ),
        );
        dividerCurX += dividerDeltaX;
      });
      if (dividerCurX + ribLineInfo.allowableLaneWidth <= compInfo.width) {
        this.ribLines[dividers.value.length].position.copy(
          new Vector3(dividerCurX / 2, compInfo.height / 2, 0),
        );
      }
    } else {
    }
  }
}
