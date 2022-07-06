import { Group, Vector3, AxesHelper, BoxHelper } from 'three';
import { OutContainer } from './out_container';
import { InContainer } from './in_container';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(info) {
    super();
    // calculate size
    if (!info.unit) info.unit = 'm';
    const width = Dimensioning.cmFromMeasureRaw(
      info.defaultSize.width,
      info.unit,
    );
    const height = Dimensioning.cmFromMeasureRaw(
      info.defaultSize.height,
      info.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      info.defaultSize.length,
      info.unit,
    );
    this.size = new Vector3(width, height, length);
    this.outContainer = new OutContainer(info);
    this.inContainer = new InContainer(info);
  }

  initObject() {}
}
