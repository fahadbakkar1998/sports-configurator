import { OnFloorItem } from '../../on_floor_item';
import { OutItem } from '../../out_item';
import { Root } from './root';

export class ShellCage extends OutItem {
  constructor(info) {
    super(info);
    this.info = info;
    this.scene = info.model.scene.scene;
    this.root = new Root(info);
    this.add(this.root);
  }

  redrawComponents() {
    this.root.redrawComponents(this.metadata.components);
  }
}
