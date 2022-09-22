import { InWallItem } from './in.wall.item.js';

export class InWallFloorItem extends InWallItem {
  constructor(info) {
    super(info);
    this.boundToFloor = true;
  }
}
