import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  DoubleSide,
  TextureLoader,
} from 'three';

export class Plane extends Group {
  constructor({ item, compInfo }) {
    super();
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.textureLoader = new TextureLoader();
    const { width, height } = compInfo;

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.getTexture(item.metadata.components),
      }),
    );
    this.add(this.planeMesh);
  }

  getTexture(components) {
    let textureUrl = components.material.value;
    if (!textureUrl) textureUrl = 'assets/models/thumbnails/Nothing.png';
    const texture = this.textureLoader.load(textureUrl);
    return texture;
  }

  redrawComponents({ components, compInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      compInfo.width,
      compInfo.height,
    );
  }
}
