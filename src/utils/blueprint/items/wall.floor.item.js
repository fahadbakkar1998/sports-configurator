import { WallItem } from './wall.item.js';

export class WallFloorItem extends WallItem {
  constructor(info) {
    super(info);
    this.boundToFloor = true;
  }
}
