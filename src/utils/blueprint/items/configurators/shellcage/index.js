import { OnFloorItem } from '../../on_floor_item';
import { OutItem } from '../../out_item';
import { Root } from './root';
import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  DoubleSide,
  AxesHelper,
} from 'three';

export class ShellCage extends OutItem {
  constructor(info) {
    // pre-processing
    super(info);
    this.root = new Root(info);
    // this.add(new AxesHelper(100));
    this.add(this.root);
  }

  async initConfigurator() {
    console.log('initConfigurator');
    this.root.initObject();
  }
}
