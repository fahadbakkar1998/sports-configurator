import { Group, BoxGeometry } from 'three';
import { Plane } from './plane';
import { Dimensioning } from '../../../core/dimensioning';
import { minSize } from '../../../core/constants';

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
    const length = Dimensioning.cmFromMeasureRaw(
      components.length.value,
      this.unit,
    );
    return { width, length };
  }

  redrawItem({ width, length }) {
    this.item.geometry = new BoxGeometry(width, minSize, length);
    this.item.position.y = minSize / 2;
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
