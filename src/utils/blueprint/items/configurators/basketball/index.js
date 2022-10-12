import { itemLayerHeight } from '../../../../../constants';
import { Factory } from '../../factory';
import { Root } from './root';

export class Basketball {
  constructor(info) {
    Object.setPrototypeOf(
      this,
      new (Factory.getClass(info.metadata.type))(info),
    );
    this.scene = info.model.scene.scene;
    this.root = new Root(this);
    this.root.rotateX(-Math.PI / 2);
    this.add(this.root);
    this.root.position.y = itemLayerHeight;
  }

  redrawComponents() {
    this.root.redrawComponents(this.metadata.components);
    this.scene.needsUpdate = true;
  }

  getPrice() {
    return 0;
  }
}
