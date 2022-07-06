import { Group, Vector3 } from 'three';

export class Ceiling extends Group {
  constructor(info) {
    super();
    this.position.copy(info.pos || new Vector3());
  }
}
