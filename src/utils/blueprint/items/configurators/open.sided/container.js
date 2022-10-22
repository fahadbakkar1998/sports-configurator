import {
  CatmullRomCurve3,
  DoubleSide,
  Group,
  InstancedMesh,
  MeshLambertMaterial,
  TubeGeometry,
  Vector3,
} from 'three';
import { tempMatrix1, tempVec1 } from '../../../core/constants';
import { Plane } from './plane';

const edgeMaterial = new MeshLambertMaterial({
  color: 0x333333,
  side: DoubleSide,
});

export class Container extends Group {
  constructor() {
    super();

    this.backPlane = new Plane();
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new Plane();
    this.leftPlane.rotateY(-Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new Plane();
    this.rightPlane.rotateY(Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new Plane();
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);
  }

  getEdgesInstMesh({ width, radius, count }) {
    const instMesh = new InstancedMesh(
      new TubeGeometry(
        new CatmullRomCurve3([new Vector3(0, 0, 0), new Vector3(width, 0, 0)]),
        10,
        radius,
        10,
        false,
      ),
      edgeMaterial,
      count,
    );

    return instMesh;
  }

  redrawComponents({ components, compInfo }) {
    const { width, height, length } = compInfo;

    this.backPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: width, height: height },
    });
    this.backPlane.position.copy(new Vector3(0, 0, -length / 2));

    this.leftPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: length, height: height },
    });
    this.leftPlane.position.copy(new Vector3(-width / 2, 0, 0));

    this.rightPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: length, height: height },
    });
    this.rightPlane.position.copy(new Vector3(width / 2, 0, 0));

    this.topPlane.redrawComponents({
      components,
      compInfo,
      subCompInfo: { width: width, height: length },
    });
    this.topPlane.position.copy(new Vector3(0, height / 2, 0));
  }

  // redrawRibLines({ components, compInfo }) {
  //   const dividersDimension = compInfo.dividersDimension;
  //   console.log('dividersDimension: ', dividersDimension);

  //   if (dividersDimension) {
  //     const instMesh = new InstancedMesh(
  //       new TubeGeometry(
  //         new CatmullRomCurve3([
  //           new Vector3(0, 0, -length / 2),
  //           new Vector3(0, 0, length / 2),
  //         ]),
  //         10,
  //         compInfo.ribLineDiameter / 2,
  //         10,
  //         false,
  //       ),
  //       new MeshLambertMaterial({
  //         color: 0x333333,
  //         side: DoubleSide,
  //       }),
  //       dividersDimension.length + 1,
  //     );
  //     let dividerCurX = 0;

  //     for (let i in dividersDimension) {
  //       const dividerDimension = dividersDimension[i];
  //       dividerCurX += dividerDimension.deltaX;
  //       instMesh.setMatrixAt(
  //         i,
  //         tempMatrix1.setPosition(
  //           tempVec1
  //             .clone()
  //             .set(
  //               dividerCurX - width / 2 - dividerDimension.deltaX / 2,
  //               height / 2 + compInfo.ribLineDiameter / 2,
  //               0,
  //             ),
  //         ),
  //       );
  //     }

  //     const x = dividerCurX - width / 2 + (width - dividerCurX) / 2;
  //     console.log('x: ', x);
  //     instMesh.setMatrixAt(
  //       dividersDimension.length,
  //       tempMatrix1.setPosition(
  //         tempVec1.clone().set(x, height / 2 + compInfo.ribLineDiameter / 2, 0),
  //       ),
  //     );

  //     if (this.ribLineInstMesh) {
  //       this.remove(this.ribLineInstMesh);
  //     }
  //     this.ribLineInstMesh = instMesh;
  //     this.add(this.ribLineInstMesh);
  //   }
  // }
}
