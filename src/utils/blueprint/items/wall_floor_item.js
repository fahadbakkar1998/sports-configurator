import { WallItem } from './wall_item.js';
export class WallFloorItem extends WallItem {
  constructor(info) {
    super(info);
    this.boundToFloor = true;
  }
}
