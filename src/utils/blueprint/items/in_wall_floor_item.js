import { InWallItem } from './in_wall_item.js';

export class InWallFloorItem extends InWallItem {
  constructor(
    model,
    metadata,
    geometry,
    material,
    position,
    rotation,
    scale,
    isGltf = false,
  ) {
    super(
      model,
      metadata,
      geometry,
      material,
      position,
      rotation,
      scale,
      isGltf,
    );
    this.boundToFloor = true;
  }
}
