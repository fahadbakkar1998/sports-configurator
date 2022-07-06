import { Group, Vector3 } from 'three';

export class InWall extends Group {
  constructor(info) {
    super();
    this.position.copy(info.pos || new Vector3());
  }
}
