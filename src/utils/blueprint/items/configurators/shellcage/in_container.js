import { Group, Vector3 } from 'three';
import { InPlane } from './in_plane';
import { Divider } from './divider';
import { Dimensioning } from '../../../core/dimensioning';

export class InContainer extends Group {
  constructor({ info, parentInfo }) {
    super();
    this.unit = info.unit;
    this.scene = info.model.scene.scene;
    const { width, height, length } = parentInfo;
    const dividers = info.components.dividers;

    // generate planes
    this.frontPlane = new InPlane({ info, parentInfo: { width, height } });
    this.frontPlane.position.copy(new Vector3(0, 0, length / 2));
    this.add(this.frontPlane);

    this.backPlane = new InPlane({ info, parentInfo: { width, height } });
    this.backPlane.position.copy(new Vector3(0, 0, -length / 2));
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new InPlane({
      info,
      parentInfo: { width: length, height },
    });
    this.leftPlane.position.copy(new Vector3(-width / 2, 0, 0));
    this.leftPlane.rotateY(Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new InPlane({
      info,
      parentInfo: { width: length, height },
    });
    this.rightPlane.position.copy(new Vector3(width / 2, 0, 0));
    this.rightPlane.rotateY(-Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new InPlane({
      info,
      parentInfo: { width, height: length },
    });
    this.topPlane.position.copy(new Vector3(0, height / 2, 0));
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);

    // generate dividers
    this.dividerPlanes = [];
    if (dividers && dividers.value && dividers.value.length) {
      let dividerCurX = 0;
      dividers.value.forEach((divider) => {
        const dividerDeltaX = Dimensioning.cmFromMeasureRaw(
          divider.value.deltaX.value,
          this.unit,
        );
        const dividerStartZ = Dimensioning.cmFromMeasureRaw(
          divider.value.deltaZ.value[0],
          this.unit,
        );
        const dividerEndZ = Dimensioning.cmFromMeasureRaw(
          divider.value.deltaZ.value[1],
          this.unit,
        );
        dividerCurX += dividerDeltaX;
        const dividerWidth = dividerEndZ - dividerStartZ;
        const dividerPlane = new Divider({
          info,
          parentInfo: { width: dividerWidth, height },
        });
        dividerPlane.position.copy(
          new Vector3(
            dividerCurX - width / 2,
            0,
            dividerStartZ + dividerWidth / 2 - length / 2,
          ),
        );
        dividerPlane.rotateY(Math.PI / 2);
        this.dividerPlanes.push(dividerPlane);
        this.add(dividerPlane);
      });
    }
  }

  redrawComponents(components) {
    console.log('in_container', this.parent);
  }
}
