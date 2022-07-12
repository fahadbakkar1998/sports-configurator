import { Group, Vector3 } from 'three';
import { OutContainer } from './out_container';
import { InContainer } from './in_container';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(info) {
    super();
    if (!info.unit) info.unit = 'm';
    this.unit = info.unit;
    this.scene = info.model.scene.scene;

    const outContainerInfo = this.getOutContainerInfo(info.components);
    const inContainerInfo = this.getInContainerInfo(info.components);

    this.outContainer = new OutContainer({
      info,
      parentInfo: outContainerInfo,
    });
    this.add(this.outContainer);

    this.inContainer = new InContainer({
      info,
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
    this.outContainer.redrawComponents({
      components,
      parentInfo: this.getOutContainerInfo(components),
    });
    this.inContainer.redrawComponents({
      components,
      parentInfo: this.getInContainerInfo(components),
    });
  }
}
