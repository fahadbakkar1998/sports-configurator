import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';
import { minSize } from '../../../core/constants';
import { Net } from './net';

export class Plane extends Group {
  constructor() {
    super();

    this.planeMesh = new Mesh(
      new PlaneGeometry(minSize, minSize),
      new MeshBasicMaterial({
        color: 0x696969,
        side: DoubleSide,
        transparent: true,
        opacity: 0.3,
      }),
    );
    this.add(this.planeMesh);

    this.net = new Net();
    this.add(this.net);
  }

  redrawComponents({ components, compInfo, subCompInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      subCompInfo.width,
      subCompInfo.height,
    );

    this.net.redrawComponents({ components, compInfo, subCompInfo });
  }
}
