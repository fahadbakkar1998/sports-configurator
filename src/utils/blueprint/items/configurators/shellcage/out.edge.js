import {
  Group,
  Mesh,
  Vector3,
  MeshBasicMaterial,
  DoubleSide,
  Geometry,
} from 'three';
import { addFaces } from '../../../../../common';

export class OutEdge extends Group {
  constructor() {
    super();

    const geometry = new Geometry();
    geometry.verticesNeedUpdate = true;
    geometry.__dirtyVertices = true;
    geometry.dynamic = true;
    const vertices = [
      new Vector3(), // left top
      new Vector3(), // left bottom
      new Vector3(), // right bottom
      new Vector3(), // right top
    ];
    geometry.vertices = vertices;
    addFaces(geometry);
    this.edgeMesh = new Mesh(
      geometry,
      new MeshBasicMaterial({ side: DoubleSide, color: 0x333333 }),
    );
    this.add(this.edgeMesh);
  }

  redrawComponents({ components, compInfo, subCompInfo }) {
    this.edgeMesh.geometry.vertices[0].x =
      compInfo.outEdgeThickness - subCompInfo.width / 2;
    this.edgeMesh.geometry.vertices[0].y = compInfo.outEdgeThickness;
    this.edgeMesh.geometry.vertices[1].x = -subCompInfo.width / 2;
    this.edgeMesh.geometry.vertices[1].y = 0;
    this.edgeMesh.geometry.vertices[2].x = subCompInfo.width / 2;
    this.edgeMesh.geometry.vertices[2].y = 0;
    this.edgeMesh.geometry.vertices[3].x =
      subCompInfo.width / 2 - compInfo.outEdgeThickness;
    this.edgeMesh.geometry.vertices[3].y = compInfo.outEdgeThickness;
    this.edgeMesh.geometry.verticesNeedUpdate = true;
  }
}
