import { InWallItem } from './in_wall_item.js';

export class InWallFloorItem extends InWallItem {
  constructor(info) {
    super(info);
    this.boundToFloor = true;
  }
}
