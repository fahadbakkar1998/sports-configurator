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

    this.outContainer = new OutContainer({ info });
    this.add(this.outContainer);
    this.inContainer = new InContainer({ info });
    this.add(this.inContainer);
  }
}
