import { Group, Vector3, BoxGeometry } from 'three';
import { OutContainer } from './out.container';
import { InContainer } from './in.container';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;

    const inContainerInfo = this.getInContainerInfo(item.metadata.components);
    const outContainerInfo = this.getOutContainerInfo(item.metadata.components);
    this.redrawItem(outContainerInfo);

    this.outContainer = new OutContainer({
      item,
      compInfo: outContainerInfo,
    });
    this.add(this.outContainer);

    this.inContainer = new InContainer({
      item,
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
    this.add(this.inContainer);
  }

  getInContainerInfo(components) {
    // condition
    const minWidth =
      components.dividers.value
        .map((divider) => divider.value.deltaX.value)
        .reduce((a, b) => a + b, 0) + components.dividers.min_lane_width;
    // console.log('minWidth: ', minWidth);
    if (components.in_container.value.width.value < minWidth) {
      components.in_container.value.width.value = minWidth;
    }
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
    const width = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.width.value,
      this.unit,
    );
    if (startZ < 0) startZ = 0;
    if (startZ > outContainerInfo.length - gap * 2)
      startZ = outContainerInfo.length - gap * 2;
    let endZ = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.deltaZ.value[1],
      this.unit,
    );
    if (endZ < startZ) endZ = startZ;
    if (endZ > outContainerInfo.length - gap * 2)
      endZ = outContainerInfo.length - gap * 2;
    const height = outContainerInfo.height - gap * 2;
    const length = endZ - startZ;
    return {
      width,
      height,
      length,
      startZ,
      endZ,
      gap,
    };
  }

  getOutContainerInfo(components) {
    // condition
    if (
      components.out_container.value.width.value <
      components.in_container.value.width.value
    )
      components.out_container.value.width.value =
        components.in_container.value.width.value;

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

  redrawItem({ width, height, length }) {
    this.item.geometry = new BoxGeometry(width, height, length);
    this.item.position.y = height / 2;
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const inContainerInfo = this.getInContainerInfo(components);
    const outContainerInfo = this.getOutContainerInfo(components);
    this.redrawItem(outContainerInfo);

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
