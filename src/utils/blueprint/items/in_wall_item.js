import { WallItem } from './wall_item.js';
export class InWallItem extends WallItem {
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
    this.addToWall = true;
  }

  /* */
  getWallOffset() {
    // fudge factor so it saves to the right wall
    return -this.currentWallEdge.offset + 0.5;
  }
}
