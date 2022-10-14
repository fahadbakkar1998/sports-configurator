import { Group, Vector3, BoxGeometry } from 'three';
import { OutContainer } from './out.container';
import { InContainer } from './in.container';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(item) {
    super();

    if (!item.metadata?.unit) item.metadata.unit = 'm';
    this.item = item;
    this.unit = item.metadata.unit;
    // this.maxSize = item.metadata.max_size;

    this.outContainer = new OutContainer();
    this.add(this.outContainer);
    this.inContainer = new InContainer();
    this.add(this.inContainer);

    this.redrawComponents(item.metadata.components);
  }

  getDimensionInfo(components) {
    const dividers = components.dividers.value;
    const minOutWidth =
      dividers
        .map((divider) => divider.value.deltaX.value)
        .reduce((a, b) => a + b, 0) +
      components.rib_line.value.allowableLaneWidth.value;
    const minInLength = Math.max(
      ...dividers.map((divider) => divider.value.deltaZ.value[1]),
    );

    if (components.in_container.value.deltaZ.value[1] < minInLength) {
      components.in_container.value.deltaZ.value[1] = minInLength;
    }
    if (components.out_container.value.width.value < minOutWidth) {
      components.out_container.value.width.value = minOutWidth;
    }
    const minOutLength =
      components.in_container.value.deltaZ.value[1] +
      components.in_container.value.gap.value * 2;
    if (components.out_container.value.length.value < minOutLength) {
      components.out_container.value.length.value = minOutLength;
    }

    const netHoleSize = Dimensioning.cmFromMeasureRaw(
      components.net.value.hole_size.value,
      this.unit,
    );
    const netDiameter = Dimensioning.cmFromMeasureRaw(
      components.net.value.diameter.value,
      this.unit,
    );
    const outLength = Dimensioning.cmFromMeasureRaw(
      components.out_container.value.length.value,
      this.unit,
    );
    const outWidth = Dimensioning.cmFromMeasureRaw(
      components.out_container.value.width.value,
      this.unit,
    );
    const outHeight = Dimensioning.cmFromMeasureRaw(
      components.out_container.value.height.value,
      this.unit,
    );
    const outEdgeThickness = Dimensioning.cmFromMeasureRaw(
      components.out_edge.value.thickness.value,
      this.unit,
    );
    const inGap = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.gap.value,
      this.unit,
    );
    const inDeltaZ0 = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.deltaZ.value[0],
      this.unit,
    );
    const inDeltaZ1 = Dimensioning.cmFromMeasureRaw(
      components.in_container.value.deltaZ.value[1],
      this.unit,
    );
    const ribLineDiameter = Dimensioning.cmFromMeasureRaw(
      components.rib_line.value.diameter.value,
      this.unit,
    );
    const allowableLaneWidth = Dimensioning.cmFromMeasureRaw(
      components.rib_line.value.allowableLaneWidth.value,
      this.unit,
    );
    const dividersDimension = dividers.map((divider) => {
      const deltaX = Dimensioning.cmFromMeasureRaw(
        divider.value.deltaX.value,
        this.unit,
      );
      const deltaZ0 = Dimensioning.cmFromMeasureRaw(
        divider.value.deltaZ.value[0],
        this.unit,
      );
      const deltaZ1 = Dimensioning.cmFromMeasureRaw(
        divider.value.deltaZ.value[1],
        this.unit,
      );
      return { deltaX, deltaZ0, deltaZ1 };
    });

    // console.log('netHoleSize: ', netHoleSize);
    // console.log('netDiameter: ', netDiameter);
    // console.log('outLength: ', outLength);
    // console.log('outWidth: ', outWidth);
    // console.log('outHeight: ', outHeight);
    // console.log('outEdgeThickness: ', outEdgeThickness);
    // console.log('inGap: ', inGap);
    // console.log('inDeltaZ0: ', inDeltaZ0);
    // console.log('inDeltaZ1: ', inDeltaZ1);
    // console.log('dividersDimension: ', dividersDimension);
    // console.log('ribLineDiameter: ', ribLineDiameter);
    // console.log('allowableLaneWidth: ', allowableLaneWidth);

    return {
      netHoleSize,
      netDiameter,
      outLength,
      outWidth,
      outHeight,
      outEdgeThickness,
      inGap,
      inDeltaZ0,
      inDeltaZ1,
      dividersDimension,
      ribLineDiameter,
      allowableLaneWidth,
    };
  }

  redrawItem({ outWidth, outHeight, outLength }) {
    this.item.geometry = new BoxGeometry(outWidth, outHeight, outLength);
    this.item.position.y = outHeight / 2;
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const dimensionInfo = this.getDimensionInfo(components);
    this.redrawItem(dimensionInfo);

    this.outContainer.redrawComponents({
      components,
      compInfo: dimensionInfo,
    });

    this.inContainer.redrawComponents({
      components,
      compInfo: dimensionInfo,
    });
    this.inContainer.position.copy(
      new Vector3(
        0,
        0,
        dimensionInfo.inDeltaZ0 +
          dimensionInfo.inGap +
          dimensionInfo.inDeltaZ1 / 2 -
          dimensionInfo.outLength / 2,
      ),
    );
  }
}
