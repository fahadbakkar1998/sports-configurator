import { WallItem } from './wall_item.js';
export class WallFloorItem extends WallItem {
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
