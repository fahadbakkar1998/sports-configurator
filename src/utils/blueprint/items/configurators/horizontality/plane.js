import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
  Vector2,
  RepeatWrapping,
} from 'three';
import { decimalPlaces } from '../../../../../constants';
import {
  floorPlanerScale,
  minSize,
  textureLoader,
} from '../../../core/constants';

export class Plane extends Group {
  constructor() {
    super();
    this.textures = {};

    this.planeMesh = new Mesh(
      new PlaneGeometry(minSize, minSize),
      new MeshBasicMaterial({
        side: DoubleSide,
        transparent: true,
      }),
    );
    this.add(this.planeMesh);
  }

  getOpacity(components) {
    if (components.opacity) {
      const opacity = components.opacity.value;
      if (!opacity || opacity < 0 || opacity > 1) components.opacity.value = 1;
      components.opacity.value = parseFloat(
        components.opacity.value.toFixed(decimalPlaces),
      );
      return components.opacity.value;
    }

    return 1;
  }

  redrawComponents({ components, compInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      compInfo.width,
      compInfo.length,
    );
    const material = components.material;

    if (material) {
      const materialUrl = material.value;

      if (this.materialUrl != materialUrl) {
        if (!this.textures[materialUrl]) {
          this.textures[materialUrl] = textureLoader.load(materialUrl);
        }
        this.planeMesh.material.map = this.textures[materialUrl];
        this.materialUrl = materialUrl;
      }

      this.planeMesh.material.map.wrapS = this.planeMesh.material.map.wrapT =
        RepeatWrapping;
      const pieceSize = material.piece_size || { width: 30, height: 30 };
      this.planeMesh.material.map.repeat = new Vector2(
        compInfo.width / (pieceSize.width * floorPlanerScale),
        compInfo.length / (pieceSize.height * floorPlanerScale),
      );
    } else {
      this.planeMesh.material.color.set(
        (components.color && components.color.value) || '#FFFFFF',
      );
    }

    this.planeMesh.material.opacity = this.getOpacity(components);
  }
}
