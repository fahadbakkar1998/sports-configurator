import {
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshLambertMaterial,
  Mesh,
  DoubleSide,
} from 'three';
import { tempVec } from '../../../core/constants';

export class RibLine extends Group {
  constructor() {
    super();

    const pipeSpline = new CatmullRomCurve3([tempVec, tempVec]);
    const geometry = new TubeGeometry(pipeSpline);
    const material = new MeshLambertMaterial({
      color: 0x333333,
      side: DoubleSide,
    });
    this.ribLine = new Mesh(geometry, material);
    this.add(this.ribLine);
  }

  redrawComponents({ components, compInfo }) {
    const pipeSpline = new CatmullRomCurve3([
      new Vector3(0, compInfo.ribLineDiameter / 2, -compInfo.outLength / 2),
      new Vector3(0, compInfo.ribLineDiameter / 2, compInfo.outLength / 2),
    ]);
    const geometry = new TubeGeometry(
      pipeSpline,
      10,
      compInfo.ribLineDiameter / 2,
      10,
      false,
    );
    this.ribLine.geometry = geometry;
  }
}
