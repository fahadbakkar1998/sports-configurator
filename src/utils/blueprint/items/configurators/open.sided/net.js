import {
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshLambertMaterial,
  DoubleSide,
  InstancedMesh,
} from 'three';
import { netColor, tempMatrix1, tempVec1 } from '../../../core/constants';

export class Net extends Group {
  constructor() {
    super();

    this.netMaterial = new MeshLambertMaterial({
      color: netColor,
      side: DoubleSide,
    });
  }

  redrawComponents({ components, compInfo, subCompInfo }) {
    const verticalCnt = parseInt(subCompInfo.width / compInfo.netHoleSize) + 1;

    const verticalInstMesh = new InstancedMesh(
      new TubeGeometry(
        new CatmullRomCurve3([
          new Vector3(0, -subCompInfo.height / 2, 0),
          new Vector3(0, subCompInfo.height / 2, 0),
        ]),
        10,
        compInfo.netDiameter / 2,
        10,
        false,
      ),
      new MeshLambertMaterial({
        color: netColor,
        side: DoubleSide,
      }),
      verticalCnt,
    );

    for (let i = 0; i < verticalCnt; i++) {
      verticalInstMesh.setMatrixAt(
        i,
        tempMatrix1.setPosition(
          tempVec1
            .clone()
            .set(-subCompInfo.width / 2 + i * compInfo.netHoleSize, 0, 0),
        ),
      );
    }

    if (this.verticalInstMesh) {
      this.remove(this.verticalInstMesh);
    }
    this.verticalInstMesh = verticalInstMesh;
    this.add(this.verticalInstMesh);

    const horizontalCnt =
      parseInt(subCompInfo.height / compInfo.netHoleSize) + 1;

    const horizontalInstMesh = new InstancedMesh(
      new TubeGeometry(
        new CatmullRomCurve3([
          new Vector3(-subCompInfo.width / 2, 0, 0),
          new Vector3(subCompInfo.width / 2, 0, 0),
        ]),
        10,
        compInfo.netDiameter / 2,
        10,
        false,
      ),
      new MeshLambertMaterial({
        color: netColor,
        side: DoubleSide,
      }),
      horizontalCnt,
    );

    for (let i = 0; i < horizontalCnt; i++) {
      horizontalInstMesh.setMatrixAt(
        i,
        tempMatrix1.setPosition(
          tempVec1
            .clone()
            .set(0, -subCompInfo.height / 2 + i * compInfo.netHoleSize, 0),
        ),
      );
    }

    if (this.horizontalInstMesh) {
      this.remove(this.horizontalInstMesh);
    }
    this.horizontalInstMesh = horizontalInstMesh;
    this.add(this.horizontalInstMesh);
  }
}
