import { Group, Vector3 } from 'three';
import { OutContainer } from './out_container';
import { InContainer } from './in_container';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(info) {
    super();
    if (!info.unit) info.unit = 'm';
    this.info = info;
    this.scene = info.model.scene.scene;

    // calculate out_container size
    const outContainerWidth = Dimensioning.cmFromMeasureRaw(
      info.components.out_container.width,
      info.unit,
    );
    const outContainerHeight = Dimensioning.cmFromMeasureRaw(
      info.components.out_container.height,
      info.unit,
    );
    const outContainerLength = Dimensioning.cmFromMeasureRaw(
      info.components.out_container.length,
      info.unit,
    );

    // calculate in_container size
    const gap = Dimensioning.cmFromMeasureRaw(
      info.components.in_container.gap,
      info.unit,
    );
    let inContainerStartZ = Dimensioning.cmFromMeasureRaw(
      info.components.in_container.deltaZ[0],
      info.unit,
    );
    if (inContainerStartZ < gap) inContainerStartZ = gap;
    if (inContainerStartZ > outContainerLength - gap)
      inContainerStartZ = outContainerLength - gap;
    let inContainerEndZ = Dimensioning.cmFromMeasureRaw(
      info.components.in_container.deltaZ[1],
      info.unit,
    );
    if (inContainerEndZ > outContainerLength - gap)
      inContainerEndZ = outContainerLength - gap;
    if (inContainerEndZ < inContainerStartZ)
      inContainerEndZ = inContainerStartZ;
    const inContainerWidth = outContainerWidth - gap * 2;
    const inContainerHeight = outContainerHeight - gap * 2;
    const inContainerLength = inContainerEndZ - inContainerStartZ;

    this.outContainer = new OutContainer({
      info,
      containerInfo: {
        width: outContainerWidth,
        height: outContainerHeight,
        length: outContainerLength,
      },
    });
    this.add(this.outContainer);

    this.inContainer = new InContainer({
      info,
      containerInfo: {
        width: inContainerWidth,
        height: inContainerHeight,
        length: inContainerLength,
      },
    });
    this.inContainer.position.copy(
      new Vector3(
        0,
        0,
        inContainerStartZ + inContainerLength / 2 - outContainerLength / 2,
      ),
    );
    this.add(this.inContainer);
  }
}
