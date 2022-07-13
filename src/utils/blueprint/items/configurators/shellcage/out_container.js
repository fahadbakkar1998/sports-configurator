import {
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshLambertMaterial,
  Mesh,
  DoubleSide,
} from 'three';
import { OutPlane } from './out_plane';
import { Dimensioning } from '../../../core/dimensioning';

export class OutContainer extends Group {
  constructor({ item, parentInfo }) {
    super();
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    const { width, height, length } = parentInfo;
    const dividers = item.metadata.components.dividers;

    // generate planes
    this.frontPlane = new OutPlane({ item, parentInfo: { width, height } });
    this.frontPlane.position.copy(new Vector3(0, 0, length / 2));
    this.add(this.frontPlane);

    this.backPlane = new OutPlane({ item, parentInfo: { width, height } });
    this.backPlane.position.copy(new Vector3(0, 0, -length / 2));
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new OutPlane({
      item,
      parentInfo: { width: length, height },
    });
    this.leftPlane.position.copy(new Vector3(-width / 2, 0, 0));
    this.leftPlane.rotateY(Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new OutPlane({
      item,
      parentInfo: { width: length, height },
    });
    this.rightPlane.position.copy(new Vector3(width / 2, 0, 0));
    this.rightPlane.rotateY(-Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new OutPlane({
      item,
      parentInfo: { width, height: length },
    });
    this.topPlane.position.copy(new Vector3(0, height / 2, 0));
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);

    this.bottomPlane = new OutPlane({
      item,
      parentInfo: { width, height: length },
    });
    this.bottomPlane.position.copy(new Vector3(0, -height / 2, 0));
    this.bottomPlane.rotateX(Math.PI / 2);
    this.add(this.bottomPlane);

    // generate rib lines
    this.ribLines = [];
    const ribLineDiameter = Dimensioning.cmFromMeasureRaw(
      item.metadata.components.rib_line.value.diameter.value,
      this.unit,
    );
    const ribLineAllowableLaneWidth = Dimensioning.cmFromMeasureRaw(
      item.metadata.components.rib_line.value.allowableLaneWidth.value,
      this.unit,
    );
    if (dividers && dividers.value && dividers.value.length) {
      let dividerCurX = 0;
      dividers.value.forEach((divider) => {
        const dividerDeltaX = Dimensioning.cmFromMeasureRaw(
          divider.value.deltaX.value,
          this.unit,
        );
        this.generateRibLine({
          x: dividerCurX + dividerDeltaX / 2 - width / 2,
          y: height / 2 + ribLineDiameter / 2,
          length,
          diameter: ribLineDiameter,
        });
        dividerCurX += dividerDeltaX;
      });
      if (dividerCurX + ribLineAllowableLaneWidth <= width) {
        this.generateRibLine({
          x: dividerCurX / 2,
          y: height / 2 + ribLineDiameter / 2,
          length,
          diameter: ribLineDiameter,
        });
      }
    }
  }

  generateRibLine({ x, y, length, diameter }) {
    const pipeSpline = new CatmullRomCurve3([
      new Vector3(x, 0, -length / 2),
      new Vector3(x, 0, length / 2),
    ]);
    const geometry = new TubeGeometry(pipeSpline, 10, diameter / 2, 10, false);
    const material = new MeshLambertMaterial({
      color: 0x333333,
      side: DoubleSide,
    });
    const ribLine = new Mesh(geometry, material);
    ribLine.position.copy(new Vector3(0, y, 0));
    this.ribLines.push(ribLine);
    this.add(ribLine);
  }

  redrawComponents({ components, parentInfo }) {
    this.frontPlane.redrawComponents({
      components,
      parentInfo: { width: parentInfo.width, height: parentInfo.height },
    });
    this.frontPlane.position.copy(new Vector3(0, 0, parentInfo.length / 2));

    this.backPlane.redrawComponents({
      components,
      parentInfo: { width: parentInfo.width, height: parentInfo.height },
    });
    this.backPlane.position.copy(new Vector3(0, 0, -parentInfo.length / 2));

    this.leftPlane.redrawComponents({
      components,
      parentInfo: { width: parentInfo.length, height: parentInfo.height },
    });
    this.leftPlane.position.copy(new Vector3(-parentInfo.width / 2, 0, 0));

    this.rightPlane.redrawComponents({
      components,
      parentInfo: { width: parentInfo.length, height: parentInfo.height },
    });
    this.rightPlane.position.copy(new Vector3(parentInfo.width / 2, 0, 0));

    this.topPlane.redrawComponents({
      components,
      parentInfo: { width: parentInfo.width, height: parentInfo.length },
    });
    this.topPlane.position.copy(new Vector3(0, parentInfo.height / 2, 0));

    this.bottomPlane.redrawComponents({
      components,
      parentInfo: { width: parentInfo.width, height: parentInfo.length },
    });
    this.bottomPlane.position.copy(new Vector3(0, -parentInfo.height / 2, 0));
  }
}
