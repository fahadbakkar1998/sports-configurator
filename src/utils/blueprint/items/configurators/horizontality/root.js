import { Group, BoxGeometry } from 'three';
import { Plane } from './plane';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;

    const dimensionInfo = this.getDimensionInfo(item.metadata.components);
    this.redrawItem(dimensionInfo);

    this.plane = new Plane({
      item,
      compInfo: dimensionInfo,
    });
    this.add(this.plane);
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
    const height = 0.1;
    this.item.geometry = new BoxGeometry(width, height, length);
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
