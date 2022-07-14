import {
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshLambertMaterial,
  Mesh,
  DoubleSide,
} from 'three';
import { Dimensioning } from '../../../core/dimensioning';

export class RibLine extends Group {
  constructor({ item, compInfo }) {
    super();
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;

    const { length } = compInfo;
    const diameter = Dimensioning.cmFromMeasureRaw(
      item.metadata.components.rib_line.value.diameter.value,
      this.unit,
    );
    const pipeSpline = new CatmullRomCurve3([
      new Vector3(0, diameter / 2, -length / 2),
      new Vector3(0, diameter / 2, length / 2),
    ]);
    const geometry = new TubeGeometry(pipeSpline, 10, diameter / 2, 10, false);
    const material = new MeshLambertMaterial({
      color: 0x333333,
      side: DoubleSide,
    });
    this.ribLine = new Mesh(geometry, material);
    this.add(this.ribLine);
  }

  redrawComponents({ components, compInfo }) {
    const { length } = compInfo;
    const diameter = Dimensioning.cmFromMeasureRaw(
      components.rib_line.value.diameter.value,
      this.unit,
    );
    const pipeSpline = new CatmullRomCurve3([
      new Vector3(0, diameter / 2, -length / 2),
      new Vector3(0, diameter / 2, length / 2),
    ]);
    const geometry = new TubeGeometry(pipeSpline, 10, diameter / 2, 10, false);
    this.ribLine.geometry = geometry;
  }
}
