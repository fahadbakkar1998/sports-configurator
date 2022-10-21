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
import { OutPlane } from './out.plane';

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
    console.log('dividersDimension: ', dividersDimension);

    if (dividersDimension) {
      const instMesh = new InstancedMesh(
        new TubeGeometry(
          new CatmullRomCurve3([
            new Vector3(0, 0, -compInfo.outLength / 2),
            new Vector3(0, 0, compInfo.outLength / 2),
          ]),
          10,
          compInfo.ribLineDiameter / 2,
          10,
          false,
        ),
        new MeshLambertMaterial({
          color: 0x333333,
          side: DoubleSide,
        }),
        dividersDimension.length + 1,
      );
      let dividerCurX = 0;

      for (let i in dividersDimension) {
        const dividerDimension = dividersDimension[i];
        dividerCurX += dividerDimension.deltaX;
        instMesh.setMatrixAt(
          i,
          tempMatrix1.setPosition(
            tempVec1
              .clone()
              .set(
                dividerCurX -
                  compInfo.outWidth / 2 -
                  dividerDimension.deltaX / 2,
                compInfo.outHeight / 2 + compInfo.ribLineDiameter / 2,
                0,
              ),
          ),
        );
      }

      const x =
        dividerCurX -
        compInfo.outWidth / 2 +
        (compInfo.outWidth - dividerCurX) / 2;
      console.log('x: ', x);
      instMesh.setMatrixAt(
        dividersDimension.length,
        tempMatrix1.setPosition(
          tempVec1
            .clone()
            .set(x, compInfo.outHeight / 2 + compInfo.ribLineDiameter / 2, 0),
        ),
      );

      if (this.ribLineInstMesh) {
        this.remove(this.ribLineInstMesh);
      }
      this.ribLineInstMesh = instMesh;
      this.add(this.ribLineInstMesh);
    }
  }
}
