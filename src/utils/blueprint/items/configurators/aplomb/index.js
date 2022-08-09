import { FloorItem } from '../../floor_item';
import { OutItem } from '../../out_item';
import { Root } from './root';

export class Aplomb extends OutItem {
  constructor(info) {
    super(info);
    this.scene = info.model.scene.scene;
    this.root = new Root(this);
    this.add(this.root);
  }

  redrawComponents() {
    this.root.redrawComponents(this.metadata.components);
  }

  getPrice() {
    return 0;
  }
}
