import { Root } from './root';
import { calculateBarrier } from '../net.quoter';
import { decimalPlaces, itemLayerHeight } from '../../../../../constants';
import { Factory } from '../../factory';

export class Net {
  constructor(info) {
    Object.setPrototypeOf(
      this,
      new (Factory.getClass(info.metadata.type))(info),
    );
    this.scene = info.model.scene.scene;
    this.root = new Root(this);
    this.add(this.root);
    this.root.position.y = itemLayerHeight;
  }

  redrawComponents() {
    this.root.redrawComponents(this.metadata.components);
  }

  getPrice() {
    const components = this.metadata.components;
    const use = components.use.value;
    const netType = components.net_type.value;
    const width = components.width.value;
    const height = components.height.value;
    const price = calculateBarrier({ use, width, height })[netType];
    return price.toFixed(decimalPlaces);
  }
}
