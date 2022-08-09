import { Item } from './item.js';
import { FloorItem } from './floor_item.js';
import { WallItem } from './wall_item.js';
import { InWallItem } from './in_wall_item.js';
import { InWallFloorItem } from './in_wall_floor_item.js';
import { OnFloorItem } from './on_floor_item.js';
import { WallFloorItem } from './wall_floor_item.js';
import { RoofItem } from './roof_item.js';
import { OutItem } from './out_item';
import { ShellCage } from './configurators/shellcage';
import { Net } from './configurators/net';
import { Horizontality } from './configurators/horizontality';

export const item_types = {
  0: Item,
  1: FloorItem,
  2: WallItem,
  3: InWallItem,
  4: RoofItem,
  5: OutItem,
  7: InWallFloorItem,
  8: OnFloorItem,
  9: WallFloorItem,
  shellcage: ShellCage,
  net: Net,
  horizontality: Horizontality,
};

/* Factory class to create items. */
export class Factory {
  /* Gets the class for the specified item. */
  static getClass(type) {
    return item_types[type];
  }
}
