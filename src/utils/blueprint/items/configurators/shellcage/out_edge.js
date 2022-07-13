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
  constructor({ item, parentInfo }) {
    super();
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;

    // calculate out_edge thickness
    const thickness = Dimensioning.cmFromMeasureRaw(
      item.metadata.components.out_edge.value.thickness.value,
      this.unit,
    );

    // generate edge mesh
    const geometry = new Geometry();
    geometry.verticesNeedUpdate = true;
    geometry.__dirtyVertices = true;
    geometry.dynamic = true;
    const vertices = [
      new Vector3(thickness - parentInfo.width / 2, thickness, 0), // left top
      new Vector3(-parentInfo.width / 2, 0, 0), // left bottom
      new Vector3(parentInfo.width / 2, 0, 0), // right bottom
      new Vector3(parentInfo.width / 2 - thickness, thickness, 0), // right top
    ];
    geometry.vertices = vertices;
    addFaces(geometry);
    this.edgeMesh = new Mesh(
      geometry,
      new MeshBasicMaterial({ side: DoubleSide, color: 0x333333 }),
    );
    this.add(this.edgeMesh);
  }

  redrawComponents({ components, parentInfo }) {
    // calculate out_edge thickness
    const thickness = Dimensioning.cmFromMeasureRaw(
      components.out_edge.value.thickness.value,
      this.unit,
    );

    this.edgeMesh.geometry.vertices[0].x = thickness - parentInfo.width / 2;
    this.edgeMesh.geometry.vertices[0].y = thickness;
    this.edgeMesh.geometry.vertices[1].x = -parentInfo.width / 2;
    this.edgeMesh.geometry.vertices[1].y = 0;
    this.edgeMesh.geometry.vertices[2].x = parentInfo.width / 2;
    this.edgeMesh.geometry.vertices[2].y = 0;
    this.edgeMesh.geometry.vertices[3].x = parentInfo.width / 2 - thickness;
    this.edgeMesh.geometry.vertices[3].y = thickness;
    this.edgeMesh.geometry.verticesNeedUpdate = true;
  }
}
