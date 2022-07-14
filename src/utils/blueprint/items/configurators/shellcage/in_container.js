import { Group, Vector3 } from 'three';
import { InPlane } from './in_plane';
import { Divider } from './divider';
import { Dimensioning } from '../../../core/dimensioning';

export class InContainer extends Group {
  constructor({ item, compInfo }) {
    super();
    this.item = item;
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;
    const { width, height, length } = compInfo;
    const dividers = item.metadata.components.dividers;

    // generate planes
    this.frontPlane = new InPlane({ item, compInfo: { width, height } });
    this.frontPlane.position.copy(new Vector3(0, 0, length / 2));
    this.add(this.frontPlane);

    this.backPlane = new InPlane({ item, compInfo: { width, height } });
    this.backPlane.position.copy(new Vector3(0, 0, -length / 2));
    this.backPlane.rotateY(Math.PI);
    this.add(this.backPlane);

    this.leftPlane = new InPlane({
      item,
      compInfo: { width: length, height },
    });
    this.leftPlane.position.copy(new Vector3(-width / 2, 0, 0));
    this.leftPlane.rotateY(Math.PI / 2);
    this.add(this.leftPlane);

    this.rightPlane = new InPlane({
      item,
      compInfo: { width: length, height },
    });
    this.rightPlane.position.copy(new Vector3(width / 2, 0, 0));
    this.rightPlane.rotateY(-Math.PI / 2);
    this.add(this.rightPlane);

    this.topPlane = new InPlane({
      item,
      compInfo: { width, height: length },
    });
    this.topPlane.position.copy(new Vector3(0, height / 2, 0));
    this.topPlane.rotateX(-Math.PI / 2);
    this.add(this.topPlane);

    // generate dividers
    this.dividerPlanes = [];
    const ribLineInfo = this.getRibLineInfo(item.metadata.components);
    if (dividers && dividers.value && dividers.value.length) {
      let dividerCurX = 0;
      for (let i in dividers.value) {
        const comp = dividers.value[i];
        const dividerInfo = this.getDividerInfo({
          comp,
          maxLen:
            item.metadata.components.in_container.value.deltaZ.value[1] -
            item.metadata.components.in_container.value.deltaZ.value[0],
        });
        dividerCurX += dividerInfo.deltaX;
        if (dividerCurX > width - ribLineInfo.allowableLaneWidth) break;
        const dividerWidth = dividerInfo.endZ - dividerInfo.startZ;
        const dividerPlane = this.generateDivider({
          item,
          compInfo: { width: dividerWidth, height },
        });
        dividerPlane.position.copy(
          new Vector3(
            dividerCurX - width / 2,
            0,
            dividerInfo.startZ + dividerWidth / 2 - length / 2,
          ),
        );
        dividerPlane.rotateY(Math.PI / 2);
        this.add(dividerPlane);
      }
    }
  }

  generateDivider({ item, compInfo }) {
    const dividerPlane = new Divider({
      item,
      compInfo,
    });
    this.dividerPlanes.push(dividerPlane);
    return dividerPlane;
  }

  getDividerInfo({ comp, maxLen }) {
    // condition
    if (comp.value.deltaX.value < 0) comp.value.deltaX.value = 0;
    if (comp.value.deltaZ.value[0] < 0) comp.value.deltaZ.value[0] = 0;
    if (comp.value.deltaZ.value[1] < comp.value.deltaZ.value[0])
      comp.value.deltaZ.value[1] = comp.value.deltaZ.value[0];
    if (comp.value.deltaZ.value[1] > maxLen)
      comp.value.deltaZ.value[1] = maxLen;

    const deltaX = Dimensioning.cmFromMeasureRaw(
      comp.value.deltaX.value,
      this.unit,
    );
    const startZ = Dimensioning.cmFromMeasureRaw(
      comp.value.deltaZ.value[0],
      this.unit,
    );
    const endZ = Dimensioning.cmFromMeasureRaw(
      comp.value.deltaZ.value[1],
      this.unit,
    );
    return { deltaX, startZ, endZ };
  }

  getRibLineInfo(components) {
    const diameter = Dimensioning.cmFromMeasureRaw(
      components.rib_line.value.diameter.value,
      this.unit,
    );
    const allowableLaneWidth = Dimensioning.cmFromMeasureRaw(
      components.rib_line.value.allowableLaneWidth.value,
      this.unit,
    );
    return { diameter, allowableLaneWidth };
  }

  redrawComponents({ components, compInfo }) {
    this.frontPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.width, height: compInfo.height },
    });
    this.frontPlane.position.copy(new Vector3(0, 0, compInfo.length / 2));
    this.add(this.frontPlane);

    this.backPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.width, height: compInfo.height },
    });
    this.backPlane.position.copy(new Vector3(0, 0, -compInfo.length / 2));
    this.add(this.backPlane);

    this.leftPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.length, height: compInfo.height },
    });
    this.leftPlane.position.copy(new Vector3(-compInfo.width / 2, 0, 0));
    this.add(this.leftPlane);

    this.rightPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.length, height: compInfo.height },
    });
    this.rightPlane.position.copy(new Vector3(compInfo.width / 2, 0, 0));
    this.add(this.rightPlane);

    this.topPlane.redrawComponents({
      components,
      compInfo: { width: compInfo.width, height: compInfo.length },
    });
    this.topPlane.position.copy(new Vector3(0, compInfo.height / 2, 0));
    this.add(this.topPlane);

    const dividers = components.dividers;
    const ribLineInfo = this.getRibLineInfo(components);
    let index = 0;
    if (dividers && dividers.value && dividers.value.length) {
      let dividerCurX = 0;
      for (let i in dividers.value) {
        const comp = dividers.value[i];
        const dividerInfo = this.getDividerInfo({
          comp,
          maxLen:
            components.in_container.value.deltaZ.value[1] -
            components.in_container.value.deltaZ.value[0],
        });
        dividerCurX += dividerInfo.deltaX;
        if (dividerCurX > compInfo.width - ribLineInfo.allowableLaneWidth)
          break;
        const dividerWidth = dividerInfo.endZ - dividerInfo.startZ;
        if (!this.dividerPlanes[index]) {
          this.generateDivider({
            item: this.item,
            compInfo: { width: dividerWidth, height: compInfo.height },
          });
        }
        this.dividerPlanes[index].position.copy(
          new Vector3(
            dividerCurX - compInfo.width / 2,
            0,
            dividerInfo.startZ + dividerWidth / 2 - compInfo.length / 2,
          ),
        );
        this.dividerPlanes[index].redrawComponents({
          components,
          compInfo: { width: dividerWidth, height: compInfo.height },
        });
        index++;
      }
    }
    const dividersNum = this.dividerPlanes.length;
    for (let i = index; i < dividersNum; i++) {
      const dividerPlane = this.dividerPlanes.pop();
      this.remove(dividerPlane);
    }
  }
}
