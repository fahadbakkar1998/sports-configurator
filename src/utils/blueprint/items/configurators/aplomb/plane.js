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
    const { width, height } = compInfo;
    const components = item.metadata.components;
    const material = components.material;

    this.planeMesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        side: DoubleSide,
        transparent: true,
        opacity: this.getOpacity(components),
        color: (components.color && components.color.value) || '#FFFFFF',
      }),
    );

    if (material) {
      let pieceSize = material.piece_size || { width: 30, height: 30 };
      this.materialUrl = material.value;

      // Get all textures.
      const textureLoader = new TextureLoader();
      material.options.forEach((option) => {
        this.textures[option.value] = textureLoader.load(option.value);
      });

      this.updateMaterial({ pieceSize, compInfo });
    }

    this.add(this.planeMesh);
  }

  getOpacity(components) {
    if (components.opacity) {
      const opacity = components.opacity.value;
      if (!opacity || opacity < 0 || opacity > 1) components.opacity.value = 1;
      components.opacity.value = parseFloat(
        components.opacity.value.toFixed(2),
      );
      return components.opacity.value;
    }

    return 1;
  }

  updateMaterial({ pieceSize, compInfo }) {
    this.planeMesh.material.map = this.textures[this.materialUrl];
    this.planeMesh.material.map.wrapS = this.planeMesh.material.map.wrapT =
      RepeatWrapping;
    this.planeMesh.material.map.repeat = new Vector2(
      compInfo.width / pieceSize.width,
      compInfo.height / pieceSize.height,
    );
  }

  redrawComponents({ components, compInfo }) {
    this.planeMesh.geometry = new PlaneGeometry(
      compInfo.width,
      compInfo.height,
    );
    const material = components.material;

    if (material) {
      const materialUrl = material.value;

      if (this.materialUrl != materialUrl) {
        this.materialUrl = materialUrl;
        const pieceSize = material.piece_size || { width: 30, height: 30 };
        this.updateMaterial({ pieceSize, compInfo });
      }
    }

    this.planeMesh.material.opacity = this.getOpacity(components);
    this.planeMesh.material.color.set(
      (components.color && components.color.value) || '#FFFFFF',
    );
  }
}
