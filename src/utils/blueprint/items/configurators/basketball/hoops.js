import { AxesHelper, Group } from 'three';

export class Hoops extends Group {
  constructor({ item, compInfo }) {
    super();
    this.add(new AxesHelper(1000));
  }

  redrawComponents({ components, compInfo }) {}
}
