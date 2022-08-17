import { Group } from 'three';

export class PaintArea extends Group {
  constructor({ item, compInfo }) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.scene = item.model.scene.scene;
    this.unit = item.metadata.unit;
    this.maxSize = item.metadata.max_size;
  }

  redrawComponents(components) {}
}
