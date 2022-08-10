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
    this.textures = {};
    const { width, height } = compInfo;

    // Get all textures.
    const textureLoader = new TextureLoader();
    item.metadata.components.material.options.forEach((option) => {
      this.textures[option.value] = textureLoader.load(option.value);
    });

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.textures[item.metadata.components.material.value],
      }),
    );
    this.add(this.planeMesh);
  }

  redrawComponents({ components, compInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      compInfo.width,
      compInfo.height,
    );
    this.planeMesh.material.map = this.textures[components.material.value];
  }
}
