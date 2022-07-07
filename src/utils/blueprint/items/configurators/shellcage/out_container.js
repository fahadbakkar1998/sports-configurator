import { Group, Vector3 } from 'three';
import { OutPlane } from './out_plane';
import { Dimensioning } from '../../../core/dimensioning';

export class OutContainer extends Group {
  constructor({ info }) {
    super();
    this.info = info;
    this.scene = info.model.scene.scene;

    // calculate out_container size
    const width = Dimensioning.cmFromMeasureRaw(
      info.components.out_container.width,
      info.unit,
    );
    const height = Dimensioning.cmFromMeasureRaw(
      info.components.out_container.height,
      info.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      info.components.out_container.length,
      info.unit,
    );
    this.size = new Vector3(width, height, length);

    this.frontPlane = new OutPlane({ info, planeInfo: { width, height } });
    this.frontPlane.position.copy(new Vector3(0, 0, length / 2));
    this.add(this.frontPlane);
  }
}
