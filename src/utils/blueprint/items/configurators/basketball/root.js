import { Group, PlaneGeometry } from 'three';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;

    const dimensionInfo = this.getOuterDimensionInfo(item.metadata.components);
    this.redrawItem(dimensionInfo);
  }

  getOuterDimensionInfo(components) {
    // calculate dimension size.
    const width = Dimensioning.cmFromMeasureRaw(
      components.dimension.value.outer_width.value,
      this.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      components.dimension.value.outer_length.value,
      this.unit,
    );
    return { width, length };
  }

  redrawItem({ width, length }) {
    this.item.geometry = new PlaneGeometry(width, length);
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const dimensionInfo = this.getOuterDimensionInfo(components);
    this.redrawItem(dimensionInfo);
  }
}
