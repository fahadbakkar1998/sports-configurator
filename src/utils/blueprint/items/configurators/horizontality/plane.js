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

export class Plane extends Group {
  constructor({ item, compInfo }) {
    super();
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.textures = {};

    const { width, length } = compInfo;
    const material = item.metadata.components.material;
    const pieceSize = material.piece_size;
    this.materialUrl = material.value;

    // Get all textures.
    const textureLoader = new TextureLoader();
    material.options.forEach((option) => {
      this.textures[option.value] = textureLoader.load(option.value);
    });

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, length),
      new MeshBasicMaterial({
        side: DoubleSide,
        map: this.textures[material.value],
      }),
    );
    this.planeMesh.material.map.wrapS = this.planeMesh.material.map.wrapT =
      RepeatWrapping;
    this.planeMesh.material.map.repeat = new Vector2(
      width / pieceSize.width,
      length / pieceSize.height,
    );
    this.add(this.planeMesh);
  }

  redrawComponents({ components, compInfo }) {
    const pieceSize = components.material.piece_size;
    this.planeMesh.geometry = new PlaneGeometry(
      compInfo.width,
      compInfo.length,
    );
    const materialUrl = components.material.value;

    if (this.materialUrl != materialUrl) {
      this.materialUrl = materialUrl;
      this.planeMesh.material.map = this.textures[materialUrl];
      this.planeMesh.material.map.wrapS = this.planeMesh.material.map.wrapT =
        RepeatWrapping;
      this.planeMesh.material.map.repeat = new Vector2(
        compInfo.width / pieceSize.width,
        compInfo.length / pieceSize.height,
      );
    }
  }
}
