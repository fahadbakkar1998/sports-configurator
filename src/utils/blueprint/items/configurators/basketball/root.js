import { Group, BoxGeometry, TextureLoader, LoadingManager } from 'three';
import { Dimensioning } from '../../../core/dimensioning';
import { minSize } from '../../../core/constants';
import { Outside } from './outside';
import DRACOLoader from '../../../loaders/three-dracoloader';
import GLTFLoader from '../../../loaders/GLTFLoader';
import OBJLoader from '@calvinscofield/three-objloader';
import FBXLoader from '../../../loaders/FBXLoader';

export class Root extends Group {
  constructor(item) {
    super();
    const components = item.metadata.components;
    const dimensionInfo = this.getDimensionInfo(components);
    if (!item.metadata.unit) item.metadata.unit = 'm';
    this.item = item;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;

    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath('assets/models/draco/gltf/');

    this.gltfLoadingManager = new LoadingManager();
    this.gltfLoader = new GLTFLoader(this.gltfLoadingManager);
    this.gltfLoader.setCrossOrigin('');
    this.gltfLoader.setDRACOLoader(this.dracoLoader);

    this.objLoader = new OBJLoader();

    this.fbxLoadingManager = new LoadingManager();
    this.fbxLoader = new FBXLoader(this.fbxLoadingManager);

    this.textures = this.getAllTextures(components);
    this.models = this.getAllModels(components);

    this.outside = new Outside({
      item,
      compInfo: { dimensionInfo, textures: this.textures },
    });

    this.add(this.outside);
    this.redrawComponents(components);
  }

  getDimensionInfo(components) {
    const dimension = components.dimension.value;
    const outerWidth = Dimensioning.cmFromMeasureRaw(
      dimension.outer_width.value,
      this.unit,
    );
    const outerLength = Dimensioning.cmFromMeasureRaw(
      dimension.outer_length.value,
      this.unit,
    );
    const courtWidth = Dimensioning.cmFromMeasureRaw(
      dimension.court_width.value,
      this.unit,
    );
    const courtLength = Dimensioning.cmFromMeasureRaw(
      dimension.court_length.value,
      this.unit,
    );
    const rimHeight = Dimensioning.cmFromMeasureRaw(
      dimension.rim_height.value,
      this.unit,
    );
    const noChargeZoneArc = Dimensioning.cmFromMeasureRaw(
      dimension.no_charge_zone_arc.value,
      this.unit,
    );
    const centerCircleDiameter = dimension.center_circle_diameter.value;
    const centerInCircleDiameter = Dimensioning.cmFromMeasureRaw(
      centerCircleDiameter.in.value,
      this.unit,
    );
    const centerOutCircleDiameter = Dimensioning.cmFromMeasureRaw(
      centerCircleDiameter.out.value,
      this.unit,
    );
    const threePointLineDistance = dimension.three_point_line_distance.value;
    const threeMinPointLineDistance = Dimensioning.cmFromMeasureRaw(
      threePointLineDistance.min.value,
      this.unit,
    );
    const threeMaxPointLineDistance = Dimensioning.cmFromMeasureRaw(
      threePointLineDistance.max.value,
      this.unit,
    );
    const key = Dimensioning.cmFromMeasureRaw(dimension.key.value, this.unit);
    const freeThrowLineDistance = Dimensioning.cmFromMeasureRaw(
      dimension.free_throw_line_distance.value,
      this.unit,
    );
    const lineWidth = Dimensioning.cmFromMeasureRaw(
      dimension.line_width.value,
      this.unit,
    );
    const hoopsDistance = Dimensioning.cmFromMeasureRaw(
      dimension.hoops_distance.value,
      this.unit,
    );
    const basketDistance = Dimensioning.cmFromMeasureRaw(
      dimension.basket_distance.value,
      this.unit,
    );
    return {
      outerWidth,
      outerLength,
      courtWidth,
      courtLength,
      rimHeight,
      noChargeZoneArc,
      centerInCircleDiameter,
      centerOutCircleDiameter,
      threeMinPointLineDistance,
      threeMaxPointLineDistance,
      key,
      freeThrowLineDistance,
      lineWidth,
      hoopsDistance,
      basketDistance,
    };
  }

  getAllTextures(components) {
    const textures = {};
    const textureLoader = new TextureLoader();

    // Get outer ground textures.
    textures.outerGround = {};
    components.material.value.outer_ground.options.forEach((option) => {
      textures.outerGround[option.value] = textureLoader.load(option.value);
    });

    // Get inner ground textures.
    textures.courtGround = {};
    components.material.value.court_ground.options.forEach((option) => {
      textures.courtGround[option.value] = textureLoader.load(option.value);
    });

    // Get key ground textures.
    textures.keyGround = {};
    components.material.value.key_ground.options.forEach((option) => {
      textures.keyGround[option.value] = textureLoader.load(option.value);
    });

    return textures;
  }

  loadModel({ url, type }) {
    return new Promise((resolve, reject) => {
      switch (type) {
        case 'gltf':
          this.gltfLoader.load(url, resolve, console.log, reject);
          break;
        default:
          resolve();
          break;
      }
    });
  }

  async getAllModels(components) {
    const models = {};
    const hoops = components.hoops;
    const promises = [];
    hoops.options.forEach((option) => {
      promises.push(
        this.loadModel({
          url: option.value,
          type: hoops.types[option.value],
        }).then((model) => model && (models[option.value] = model)),
      );
    });
    await Promise.all(promises);
    console.log('getAllModels: ', models);
  }

  redrawItem({ outerWidth, outerLength }) {
    this.item.geometry = new BoxGeometry(outerWidth, minSize, outerLength);
    this.item.position.y = minSize / 2;
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const dimensionInfo = this.getDimensionInfo(components);
    this.redrawItem(dimensionInfo);
    this.outside.redrawComponents({
      components,
      compInfo: { dimensionInfo, textures: this.textures },
    });
  }
}
