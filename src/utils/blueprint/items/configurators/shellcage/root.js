import { BoxHelper, Group, Vector3, BoxGeometry } from 'three';
import { OutContainer } from './out_container';
import { InContainer } from './in_container';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.maxSize;

    const outContainerInfo = this.getOutContainerInfo(item.metadata.components);
    const inContainerInfo = this.getInContainerInfo(item.metadata.components);

    this.outContainer = new OutContainer({
      item,
      parentInfo: outContainerInfo,
    });
    this.add(this.outContainer);

    this.inContainer = new InContainer({
      item,
      parentInfo: inContainerInfo,
    });
    this.inContainer.position.copy(
      new Vector3(
        0,
        0,
        inContainerInfo.startZ +
          inContainerInfo.length / 2 -
          outContainerInfo.length / 2,
      ),
    );
    this.add(this.inContainer);
  }

  getOutContainerInfo(components) {
    // condition
    if (components.out_container.value.width.value < 0)
      components.out_container.value.width.value = 0;
    if (components.out_container.value.width.value > this.maxSize)
      components.out_container.value.width.value = this.maxSize;

    // calculate out_container size
    const width = Dimensioning.cmFromMeasureRaw(
      components.out_container.value.width.value,
      this.unit,
    );
    const height = Dimensioning.cmFromMeasureRaw(
      components.out_container.value.height.value,
      this.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      components.out_container.value.length.value,
      this.unit,
    );
    return { width, height, length };
  }

  getInContainerInfo(components) {
    // condition
    const rawGap = components.in_container.value.gap.value;
    const rawMaxLen = components.out_container.value.length.value - rawGap * 2;
    if (components.in_container.value.deltaZ.value[0] < 0) {
      components.in_container.value.deltaZ.value[0] = 0;
    }
    if (components.in_container.value.deltaZ.value[0] > rawMaxLen) {
      components.in_container.value.deltaZ.value[0] = rawMaxLen;
    }
    if (
      components.in_container.value.deltaZ.value[1] <
      components.in_container.value.deltaZ.value[0]
    ) {
      components.in_container.value.deltaZ.value[1] =
        components.in_container.value.deltaZ.value[0];
    }
    if (components.in_container.value.deltaZ.value[1] > rawMaxLen) {
      components.in_container.value.deltaZ.value[1] = rawMaxLen;
    }

    // calculate out_container size
    const outContainerInfo = this.getOutContainerInfo(components);

    // calculate in_container size
    const gap = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.gap.value,
      this.unit,
    );
    let startZ = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.deltaZ.value[0],
      this.unit,
    );
    if (startZ < gap) startZ = gap;
    if (startZ > outContainerInfo.length - gap)
      startZ = outContainerInfo.length - gap;
    let endZ = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.deltaZ.value[1],
      this.unit,
    );
    if (endZ > outContainerInfo.length - gap)
      endZ = outContainerInfo.length - gap;
    if (endZ < startZ) endZ = startZ;
    const width = outContainerInfo.width - gap * 2;
    const height = outContainerInfo.height - gap * 2;
    const length = endZ - startZ;
    return {
      width,
      height,
      length,
      startZ,
      endZ,
    };
  }

  redrawComponents(components) {
    const outContainerInfo = this.getOutContainerInfo(components);
    this.item.geometry = new BoxGeometry(
      outContainerInfo.width,
      outContainerInfo.height,
      outContainerInfo.length,
    );
    this.item.position.y = outContainerInfo.height / 2;
    this.item.refreshItem();
    this.outContainer.redrawComponents({
      components,
      parentInfo: outContainerInfo,
    });

    const inContainerInfo = this.getInContainerInfo(components);
    this.inContainer.redrawComponents({
      components,
      parentInfo: inContainerInfo,
    });
    this.inContainer.position.copy(
      new Vector3(
        0,
        0,
        inContainerInfo.startZ +
          inContainerInfo.length / 2 -
          outContainerInfo.length / 2,
      ),
    );
  }
}
