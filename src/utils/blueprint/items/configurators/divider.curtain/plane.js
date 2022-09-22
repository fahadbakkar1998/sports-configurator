import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
  TextureLoader,
  Vector2,
  RepeatWrapping,
} from 'three';
import { decimalPlaces } from '../../../../../constants';

export class Plane extends Group {
  constructor({ item }) {
    super();
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;

    this.planeMesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
        transparent: true,
      }),
    );
    this.add(this.planeMesh);
  }

  redrawComponents({ compInfo, dimInfo }) {
    const { opacity, color } = compInfo;
    const { width, height } = dimInfo;
    this.planeMesh.geometry = new PlaneGeometry(width, height);
    this.planeMesh.material.opacity = opacity;
    this.planeMesh.material.color.set(color || '#FFFFFF');
  }
}
