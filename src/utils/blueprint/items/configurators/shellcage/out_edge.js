import {
  Group,
  Mesh,
  Vector3,
  MeshBasicMaterial,
  DoubleSide,
  Geometry,
} from 'three';
import { Dimensioning } from '../../../core/dimensioning';
import { addFaces } from '../../../core/common';

export class OutEdge extends Group {
  constructor({ info, edgeInfo }) {
    super();
    this.info = info;
    this.scene = info.model.scene.scene;

    // calculate out_edge thickness
    const thickness = Dimensioning.cmFromMeasureRaw(
      info.components.out_edge.value.thickness.value,
      info.unit,
    );

    // generate edge mesh
    const geometry = new Geometry();
    const vertices = [
      new Vector3(thickness - edgeInfo.width / 2, thickness, 0), // left top
      new Vector3(-edgeInfo.width / 2, 0, 0), // left bottom
      new Vector3(edgeInfo.width / 2, 0, 0), // right bottom
      new Vector3(edgeInfo.width / 2 - thickness, thickness, 0), // right top
    ];
    vertices.forEach((vertex) => geometry.vertices.push(vertex));
    addFaces(geometry);
    this.edgeMesh = new Mesh(
      geometry,
      new MeshBasicMaterial({ side: DoubleSide, color: 0x333333 }),
    );
    this.add(this.edgeMesh);
  }
}
