import { Item } from './item.js';
import { FloorItem } from './floor.item.js';
import { WallItem } from './wall.item.js';
import { InWallItem } from './in.wall.item.js';
import { InWallFloorItem } from './in.wall.floor.item.js';
import { OnFloorItem } from './on.floor.item.js';
import { WallFloorItem } from './wall.floor.item.js';
import { RoofItem } from './roof.item.js';
import { OutItem } from './out.item';
import { ShellCage } from './configurators/shellcage';
import { Net } from './configurators/net';
import { Horizontality } from './configurators/horizontality';
import { Aplomb } from './configurators/aplomb';
import { Basketball } from './configurators/basketball';
import { DividerCurtain } from './configurators/divider.curtain';

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
  aplomb: Aplomb,
  basketball: Basketball,
  dividerCurtain: DividerCurtain,
};

/* Factory class to create items. */
export class Factory {
  /* Gets the class for the specified item. */
  static getClass(type) {
    return item_types[type];
  }
}
