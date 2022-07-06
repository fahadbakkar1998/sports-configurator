import { FloorItem } from './floor_item.js';

export class OnFloorItem extends FloorItem {
  constructor(info) {
    super(info);
    this.obstructFloorMoves = false;
    this.receiveShadow = true;
  }
}
