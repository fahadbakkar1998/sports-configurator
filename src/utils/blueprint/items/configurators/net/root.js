import { Group, Vector3, PlaneGeometry } from 'three';
import { Plane } from './plane';
import { Net } from './net';
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

    this.plane = new Plane({
      item,
      compInfo: dimensionInfo,
    });
    this.add(this.plane);

    this.net = new Net({ item, compInfo: dimensionInfo });
    this.add(this.net);
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

  redrawComponents(components) {
    const dimensionInfo = this.getDimensionInfo(components);

    this.item.geometry = new PlaneGeometry(
      dimensionInfo.width,
      dimensionInfo.height,
    );
    this.item.position.y = dimensionInfo.height / 2;
    this.item.refreshItem();

    this.plane.redrawComponents({
      components,
      compInfo: dimensionInfo,
    });

    this.net.redrawComponents({ components, compInfo: dimensionInfo });
  }
}
