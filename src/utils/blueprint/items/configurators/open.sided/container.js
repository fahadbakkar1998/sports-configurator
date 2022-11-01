import {
  CatmullRomCurve3,
  CylinderGeometry,
  Group,
  InstancedMesh,
  MeshBasicMaterial,
  TubeGeometry,
  Vector3,
} from 'three';
import {
  multiTempMatrix1,
  tempMatrix1,
  tempMatrix2,
  tempVec1,
  xVec,
  zVec,
} from '../../../core/constants';
import { Plane } from './plane';

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

    this.redrawEdges({ components, compInfo });
  }

  makeEdgeMesh({ radius, length, count }) {
    const geo = new CylinderGeometry(radius, radius, length);
    const mat = new MeshBasicMaterial({ color: 0x111 });
    const instMesh = new InstancedMesh(geo, mat, count);
    return instMesh;
  }

  redrawEdges({ components, compInfo }) {
    const { width, height, length, edgeDiameter } = compInfo;
    const netRadius = edgeDiameter / 2;

    if (this.topHorizontalMesh) this.remove(this.topHorizontalMesh);
    const topHorizontalMesh = this.makeEdgeMesh({
      radius: netRadius,
      length: width,
      count: 2,
    });
    this.add(topHorizontalMesh);
    this.topHorizontalMesh = topHorizontalMesh;
    topHorizontalMesh.setMatrixAt(
      0,
      multiTempMatrix1.multiplyMatrices(
        tempMatrix1.setPosition(
          tempVec1.clone().set(0, height / 2, -length / 2),
        ),
        tempMatrix2.makeRotationAxis(zVec, Math.PI / 2),
      ),
    );
    topHorizontalMesh.setMatrixAt(
      1,
      multiTempMatrix1.multiplyMatrices(
        tempMatrix1.setPosition(
          tempVec1.clone().set(0, height / 2, length / 2),
        ),
        tempMatrix2.makeRotationAxis(zVec, Math.PI / 2),
      ),
    );

    if (this.topVerticalMesh) this.remove(this.topVerticalMesh);
    const topVerticalMesh = this.makeEdgeMesh({
      radius: netRadius,
      length: length,
      count: 2,
    });
    this.add(topVerticalMesh);
    this.topVerticalMesh = topVerticalMesh;
    topVerticalMesh.setMatrixAt(
      0,
      multiTempMatrix1.multiplyMatrices(
        tempMatrix1.setPosition(
          tempVec1.clone().set(-width / 2, height / 2, 0),
        ),
        tempMatrix2.makeRotationAxis(xVec, Math.PI / 2),
      ),
    );
    topVerticalMesh.setMatrixAt(
      1,
      multiTempMatrix1.multiplyMatrices(
        tempMatrix1.setPosition(tempVec1.clone().set(width / 2, height / 2, 0)),
        tempMatrix2.makeRotationAxis(xVec, Math.PI / 2),
      ),
    );

    if (this.verticalMesh) this.remove(this.verticalMesh);
    const verticalMesh = this.makeEdgeMesh({
      radius: netRadius,
      length: height,
      count: 4,
    });
    this.add(verticalMesh);
    this.verticalMesh = verticalMesh;
    verticalMesh.setMatrixAt(
      0,
      tempMatrix1.setPosition(tempVec1.clone().set(-width / 2, 0, length / 2)),
    );
    verticalMesh.setMatrixAt(
      1,
      tempMatrix1.setPosition(tempVec1.clone().set(-width / 2, 0, -length / 2)),
    );
    verticalMesh.setMatrixAt(
      2,
      tempMatrix1.setPosition(tempVec1.clone().set(width / 2, 0, -length / 2)),
    );
    verticalMesh.setMatrixAt(
      3,
      tempMatrix1.setPosition(tempVec1.clone().set(width / 2, 0, length / 2)),
    );
  }
}
