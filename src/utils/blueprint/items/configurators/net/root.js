import { Group, Vector3, BoxGeometry } from 'three';
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
    this.plane = new Plane({
      item,
      compInfo: dimensionInfo,
    });
    this.add(this.plane);
  }

  getDimensionInfo(components) {
    // calculate dimension size
    const width = Dimensioning.cmFromMeasureRaw(
      components.dimension.value.width.value,
      this.unit,
    );
    const height = Dimensioning.cmFromMeasureRaw(
      components.dimension.value.height.value,
      this.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      components.dimension.value.length.value,
      this.unit,
    );
    return { width, height, length };
  }

  redrawComponents(components) {
    const outContainerInfo = this.getOutContainerInfo(components);
    const inContainerInfo = this.getInContainerInfo(components);

    this.item.geometry = new BoxGeometry(
      outContainerInfo.width,
      outContainerInfo.height,
      outContainerInfo.length,
    );
    this.item.position.y = outContainerInfo.height / 2;
    this.item.refreshItem();

    this.outContainer.redrawComponents({
      components,
      compInfo: outContainerInfo,
    });

    this.inContainer.redrawComponents({
      components,
      compInfo: inContainerInfo,
    });
    this.inContainer.position.copy(
      new Vector3(
        0,
        0,
        inContainerInfo.startZ +
          inContainerInfo.gap +
          inContainerInfo.length / 2 -
          outContainerInfo.length / 2,
      ),
    );

    this.outContainer.redrawRibLines({
      components,
      compInfo: outContainerInfo,
    });
  }
}
