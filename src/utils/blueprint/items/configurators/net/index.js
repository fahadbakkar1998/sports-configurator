import { FloorItem } from '../../floor_item';
import { Root } from './root';
import { calculateBarrier } from '../net_quoter';

export class ShellCage extends FloorItem {
  constructor(info) {
    super(info);
    this.scene = info.model.scene.scene;
    this.root = new Root(this);
    this.add(this.root);
  }

  redrawComponents() {
    this.root.redrawComponents(this.metadata.components);
  }
}
