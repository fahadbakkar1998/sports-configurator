import {
  Group,
  Mesh,
  Vector2,
  Vector3,
  PlaneGeometry,
  MeshStandardMaterial,
  DoubleSide,
} from 'three';
import { OutEdge } from './out_edge';
import { Dimensioning } from '../../../core/dimensioning';

export class OutPlane extends Group {
  constructor({ info, planeInfo }) {
    super();
    this.info = info;
    this.scene = info.model.scene.scene;

    this.topEdge = new OutEdge({
      info,
      edgeInfo: { width: planeInfo.width },
    });
    this.topEdge.position.copy(new Vector3(0, planeInfo.height / 2, 0));
    this.topEdge.rotateZ(Math.PI);
    this.add(this.topEdge);

    this.bottomEdge = new OutEdge({
      info,
      edgeInfo: { width: planeInfo.width },
    });
    this.bottomEdge.position.copy(new Vector3(0, -planeInfo.height / 2, 0));
    this.add(this.bottomEdge);
  }
}
