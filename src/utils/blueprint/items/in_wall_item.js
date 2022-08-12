import { WallItem } from './wall_item.js';

export class InWallItem extends WallItem {
  constructor(info) {
    super(info);
    this.addToWall = true;
  }

  /* */
  getWallOffset() {
    // fudge factor so it saves to the right wall
    return -this.currentWallEdge.offset + 0.5;
  }
}
