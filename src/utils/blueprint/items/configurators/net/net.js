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
import { Dimensioning } from '../../../core/dimensioning';

export class Net extends Group {
  constructor({ item, compInfo }) {
    super();
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.redrawComponents({ components: item.metadata.components, compInfo });
  }

  getNetInfo(components) {
    const holeSize = Dimensioning.cmFromMeasureRaw(
      components.hole_size.value,
      this.unit,
    );
    const diameter = Dimensioning.cmFromMeasureRaw(
      components.diameter.value,
      this.unit,
    );
    return { holeSize, diameter };
  }

  redrawComponents({ components, compInfo }) {
    const netInfo = this.getNetInfo(components);
    const verticalCnt = parseInt(compInfo.width / netInfo.holeSize) + 1;

    const verticalInstMesh = new InstancedMesh(
      new TubeGeometry(
        new CatmullRomCurve3([
          new Vector3(0, -compInfo.height / 2, 0),
          new Vector3(0, compInfo.height / 2, 0),
        ]),
        10,
        netInfo.diameter / 2,
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
            .set(-compInfo.width / 2 + i * netInfo.holeSize, 0, 0),
        ),
      );
    }

    if (this.verticalInstMesh) {
      this.remove(this.verticalInstMesh);
    }
    this.verticalInstMesh = verticalInstMesh;
    this.add(this.verticalInstMesh);

    const horizontalCnt = parseInt(compInfo.height / netInfo.holeSize) + 1;

    const horizontalInstMesh = new InstancedMesh(
      new TubeGeometry(
        new CatmullRomCurve3([
          new Vector3(-compInfo.width / 2, 0, 0),
          new Vector3(compInfo.width / 2, 0, 0),
        ]),
        10,
        netInfo.diameter / 2,
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
            .set(0, -compInfo.height / 2 + i * netInfo.holeSize, 0),
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
