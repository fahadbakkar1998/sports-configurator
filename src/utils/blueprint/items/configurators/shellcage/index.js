import { OnFloorItem } from '../../on_floor_item';
import { OutItem } from '../../out_item';
import { Root } from './root';
import { Mesh, BoxGeometry, MeshStandardMaterial, DoubleSide } from 'three';

export class ShellCage extends OutItem {
  constructor(info) {
    super(info);
    this.info = info;
    this.root = new Root(info);
    this.add(this.root);
  }
}
