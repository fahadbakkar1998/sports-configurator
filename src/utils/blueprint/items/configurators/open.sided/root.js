import { Group, BoxGeometry } from 'three';
import { Container } from './container';
import { Dimensioning } from '../../../core/dimensioning';
import { itemLayerHeight } from '../../../../../constants';

export class Root extends Group {
  constructor(item) {
    super();

    if (!item.metadata?.unit) item.metadata.unit = 'm';
    this.item = item;
    this.unit = item.metadata.unit;

    this.container = new Container();
    this.add(this.container);

    this.redrawComponents(item.metadata.components);
  }

  getDimensionInfo(components) {
    const dimension = components.dimension.value;
    const net = components.net.value;

    const width = Dimensioning.cmFromMeasureRaw(
      dimension.width.value,
      this.unit,
    );
    const height = Dimensioning.cmFromMeasureRaw(
      dimension.height.value,
      this.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      dimension.length.value,
      this.unit,
    );
    const netHoleSize = Dimensioning.cmFromMeasureRaw(
      net.hole_size.value,
      this.unit,
    );
    const netDiameter = Dimensioning.cmFromMeasureRaw(
      net.diameter.value,
      this.unit,
    );

    return { width, height, length, netHoleSize, netDiameter };
  }

  redrawItem({ width, height, length }) {
    this.item.geometry = new BoxGeometry(width, height, length);
    this.item.position.y = height / 2 + itemLayerHeight;
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const dimensionInfo = this.getDimensionInfo(components);
    this.redrawItem(dimensionInfo);

    this.container.redrawComponents({
      components,
      compInfo: dimensionInfo,
    });
  }
}
