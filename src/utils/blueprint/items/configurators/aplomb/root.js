import { Group, BoxGeometry, PlaneGeometry } from 'three';
import { Plane } from './plane';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;

    this.plane = new Plane();
    this.add(this.plane);

    this.redrawComponents(item.metadata.components);
  }

  getDimensionInfo(components) {
    // calculate dimension size.
    const width = Dimensioning.cmFromMeasureRaw(
      components.width.value,
      this.unit,
    );
    const height = Dimensioning.cmFromMeasureRaw(
      components.height.value,
      this.unit,
    );
    return { width, height };
  }

  redrawItem({ width, height }) {
    this.item.geometry = new PlaneGeometry(width, height);
    this.item.position.y = height / 2;
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const dimensionInfo = this.getDimensionInfo(components);
    this.redrawItem(dimensionInfo);

    this.plane.redrawComponents({
      components,
      compInfo: dimensionInfo,
    });
  }
}
