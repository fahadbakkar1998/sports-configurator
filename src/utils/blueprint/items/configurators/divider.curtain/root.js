import { Group, PlaneGeometry } from 'three';
import { Plane } from './plane';
import { Dimensioning } from '../../../core/dimensioning';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;

    this.meshPlane = new Plane({ item });
    this.add(this.meshPlane);

    this.vinylPlane = new Plane({ item });
    this.add(this.vinylPlane);

    this.redrawComponents(item.metadata.components);
  }

  getDimensionInfo(components) {
    const width = Dimensioning.cmFromMeasureRaw(
      components.width.value,
      this.unit,
    );
    const meshHeight = Dimensioning.cmFromMeasureRaw(
      components.mesh.value.height.value,
      this.unit,
    );
    const vinylHeight = Dimensioning.cmFromMeasureRaw(
      components.vinyl.value.height.value,
      this.unit,
    );
    return { width, meshHeight, vinylHeight };
  }

  redrawItem({ width, meshHeight, vinylHeight }) {
    const height = meshHeight + vinylHeight;
    this.item.geometry = new PlaneGeometry(width, height);
    this.item.position.y = height / 2;
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const dimensionInfo = this.getDimensionInfo(components);
    const { width, meshHeight, vinylHeight } = dimensionInfo;
    const height = meshHeight + vinylHeight;

    this.redrawItem(dimensionInfo);

    this.meshPlane.redrawComponents({
      compInfo: {
        color: components.mesh.value.color.value,
        opacity: components.mesh.value.opacity.value,
      },
      dimInfo: { width, height: meshHeight },
    });
    this.meshPlane.position.y = (height - meshHeight) / 2;

    this.vinylPlane.redrawComponents({
      compInfo: {
        color: components.vinyl.value.color.value,
        opacity: components.vinyl.value.opacity.value,
      },
      dimInfo: { width, height: vinylHeight },
    });
    this.vinylPlane.position.y = (vinylHeight - height) / 2;
  }
}
