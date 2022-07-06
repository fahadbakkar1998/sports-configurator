import { OnFloorItem } from '../../on_floor_item';
import { Root } from './root';

export class ShellCage extends OnFloorItem {
  constructor(info) {
    // pre-processing
    super(info);
    this.container = new Root(info);
  }

  initConfigurator() {
    console.log('initConfigurator');
  }
}
