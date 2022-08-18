import { AxesHelper, Group, Vector3 } from 'three';
import { setMeshSize } from '../../../../../common';

export class Hoops extends Group {
  constructor({ item, compInfo }) {
    super();
  }

  redrawComponents({ components, compInfo }) {
    const hoopsValue = components.hoops.value;
    const models = compInfo.models;
    const { rimHeight } = compInfo.dimensionInfo;

    if (this.modelUrl != hoopsValue) {
      this.modelUrl = hoopsValue;
      if (this.modelMesh != models[hoopsValue]) {
        if (this.modelMesh) this.remove(this.modelMesh);
        this.modelMesh = models[hoopsValue].clone();
        this.add(this.modelMesh);
      }
    }

    setMeshSize({
      mesh: this.modelMesh,
      height: rimHeight * 1.3,
      proportionally: true,
    });
  }
}
