import {
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshLambertMaterial,
  Mesh,
  BoxGeometry,
  BoxHelper,
  AxesHelper,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';
import { OutPlane } from './out_plane';
import { Dimensioning } from '../../../core/dimensioning';

export class OutContainer extends Group {
  constructor({ info, containerInfo }) {
    super();
    this.info = info;
    this.scene = info.model.scene.scene;
    const { width, height, length } = containerInfo;
    const dividers = info.components.dividers;

    // generate planes
    this.frontPlane = new OutPlane({ info, planeInfo: { width, height } });
    this.frontPlane.position.copy(new Vector3(0, 0, length / 2));
    this.add(this.frontPlane);

    this.backPlane = new OutPlane({ info, planeInfo: { width, height } });
    this.backPlane.position.copy(new Vector3(0, 0, -length / 2));
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new OutPlane({
      info,
      planeInfo: { width: length, height },
    });
    this.leftPlane.position.copy(new Vector3(-width / 2, 0, 0));
    this.leftPlane.rotateY(Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new OutPlane({
      info,
      planeInfo: { width: length, height },
    });
    this.rightPlane.position.copy(new Vector3(width / 2, 0, 0));
    this.rightPlane.rotateY(-Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new OutPlane({
      info,
      planeInfo: { width, height: length },
    });
    this.topPlane.position.copy(new Vector3(0, height / 2, 0));
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);

    this.bottomPlane = new OutPlane({
      info,
      planeInfo: { width, height: length },
    });
    this.bottomPlane.position.copy(new Vector3(0, -height / 2, 0));
    this.bottomPlane.rotateX(Math.PI / 2);
    this.add(this.bottomPlane);

    // generate rib lines
    this.ribLines = [];
    const ribLineDiameter = Dimensioning.cmFromMeasureRaw(
      info.components.rib_line.diameter,
      info.unit,
    );
    const ribLineAllowableLaneWidth = Dimensioning.cmFromMeasureRaw(
      info.components.rib_line.allowableLaneWidth,
      info.unit,
    );
    if (dividers && dividers.length) {
      let dividerCurX = 0;
      dividers.forEach((divider) => {
        const dividerDeltaX = Dimensioning.cmFromMeasureRaw(
          divider.deltaX,
          info.unit,
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
}
