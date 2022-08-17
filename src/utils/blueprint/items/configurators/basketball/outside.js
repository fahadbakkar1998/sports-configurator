import {
  Group,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  RepeatWrapping,
  Vector2,
} from 'three';
import { minSize } from '../../../core/constants';

export class Outside extends Group {
  constructor({ item, compInfo }) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;
    const components = item.metadata.components;

    this.planeMesh = new Mesh(
      new PlaneGeometry(minSize, minSize),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.add(this.planeMesh);

    this.redrawComponents({ components, compInfo });
  }

  redrawComponents({ components, compInfo }) {
    const dimensionInfo = compInfo.dimensionInfo;
    const outer_ground = components.material.value.outer_ground;
    const materialUrl = outer_ground.value;

    this.planeMesh.geometry = new PlaneGeometry(
      dimensionInfo.outerWidth,
      dimensionInfo.outerLength,
    );

    if (this.materialUrl != materialUrl) {
      this.materialUrl = materialUrl;
      this.planeMesh.material.map = compInfo.textures.outerGround[materialUrl];
      this.planeMesh.material.map.wrapS = this.planeMesh.material.map.wrapT =
        RepeatWrapping;
    }

    const pieceSize = outer_ground.piece_size || {
      width: minSize,
      height: minSize,
    };
    this.planeMesh.material.map.repeat = new Vector2(
      dimensionInfo.outerWidth / pieceSize.width,
      dimensionInfo.outerLength / pieceSize.height,
    );
  }
}
