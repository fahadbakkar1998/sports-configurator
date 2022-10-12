import { itemLayerHeight } from '../../../../../constants';
import { FloorItem } from '../../floor.item';
import { Root } from './root';

export class DividerCurtain extends FloorItem {
  constructor(info) {
    super(info);
    this.scene = info.model.scene.scene;
    this.root = new Root(this);
    this.add(this.root);
    this.root.position.y = itemLayerHeight;
  }

  redrawComponents() {
    this.root.redrawComponents(this.metadata.components);
  }

  getPrice() {
    return 0;
  }
}
