import { Group, BoxGeometry, TextureLoader, AxesHelper } from 'three';
import { Dimensioning } from '../../../core/dimensioning';
import { minSize } from '../../../core/constants';
import { Outside } from './outside';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;

    const components = item.metadata.components;
    const dimensionInfo = this.getDimensionInfo(components);
    this.redrawItem(dimensionInfo);
    this.textures = this.getAllTextures(components);

    this.outside = new Outside({
      item,
      compInfo: { dimensionInfo, textures: this.textures },
    });
    this.add(this.outside);

    this.add(new AxesHelper(1000));
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
    const freeThreePointLineDistance = Dimensioning.cmFromMeasureRaw(
      dimension.free_three_point_line_distance.value,
      this.unit,
    );
    const cornerWidth = Dimensioning.cmFromMeasureRaw(
      dimension.corner_width.value,
      this.unit,
    );
    const lineWidth = Dimensioning.cmFromMeasureRaw(
      dimension.line_width.value,
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
      freeThreePointLineDistance,
      cornerWidth,
      lineWidth,
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
    textures.innerGround = {};
    components.material.value.inner_ground.options.forEach((option) => {
      textures.innerGround[option.value] = textureLoader.load(option.value);
    });

    // Get key ground textures.
    textures.keyGround = {};
    components.material.value.key_ground.options.forEach((option) => {
      textures.keyGround[option.value] = textureLoader.load(option.value);
    });

    return textures;
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
