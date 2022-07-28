import {
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshLambertMaterial,
  Mesh,
  DoubleSide,
} from 'three';
import { Dimensioning } from '../../../core/dimensioning';

export class Net extends Group {
  constructor({ item, compInfo }) {
    super();
    this.unit = item.metadata.unit;
    this.scene = item.model.scene.scene;
    this.netLines = [];
    this.redrawComponents({ components: item.metadata.components, compInfo });
  }

  getNetInfo(components) {
    const holeSize = Dimensioning.cmFromMeasureRaw(
      components.net.value.hole_size.value,
      this.unit,
    );
    const diameter = Dimensioning.cmFromMeasureRaw(
      components.net.value.diameter.value,
      this.unit,
    );
    return { holeSize, diameter };
  }

  redrawComponents({ components, compInfo }) {
    this.netLines.forEach((netLine) => this.remove(netLine));
    this.netLines = [];

    const netInfo = this.getNetInfo(components);
    const material = new MeshLambertMaterial({
      color: 0x333333,
      side: DoubleSide,
    });

    for (let diffW = 0; diffW < compInfo.width / 2; diffW += netInfo.holeSize) {
      const pipeSpline = new CatmullRomCurve3([
        new Vector3(diffW, -compInfo.height / 2, 0),
        new Vector3(diffW, compInfo.height / 2, 0),
      ]);
      const geometry = new TubeGeometry(
        pipeSpline,
        10,
        netInfo.diameter / 2,
        10,
        false,
      );
      const netLine = new Mesh(geometry, material);
      this.netLines.push(netLine);
      this.add(netLine);
      if (diffW !== 0) {
        const pipeSpline = new CatmullRomCurve3([
          new Vector3(-diffW, -compInfo.height / 2, 0),
          new Vector3(-diffW, compInfo.height / 2, 0),
        ]);
        const geometry = new TubeGeometry(
          pipeSpline,
          10,
          netInfo.diameter / 2,
          10,
          false,
        );
        const netLine = new Mesh(geometry, material);
        this.netLines.push(netLine);
        this.add(netLine);
      }
    }

    for (
      let diffH = 0;
      diffH < compInfo.height / 2;
      diffH += netInfo.holeSize
    ) {
      const pipeSpline = new CatmullRomCurve3([
        new Vector3(-compInfo.width / 2, diffH, 0),
        new Vector3(compInfo.width / 2, diffH, 0),
      ]);
      const geometry = new TubeGeometry(
        pipeSpline,
        10,
        netInfo.diameter / 2,
        10,
        false,
      );
      const netLine = new Mesh(geometry, material);
      this.netLines.push(netLine);
      this.add(netLine);
      if (diffH !== 0) {
        const pipeSpline = new CatmullRomCurve3([
          new Vector3(-compInfo.width / 2, -diffH, 0),
          new Vector3(compInfo.width / 2, -diffH, 0),
        ]);
        const geometry = new TubeGeometry(
          pipeSpline,
          10,
          netInfo.diameter / 2,
          10,
          false,
        );
        const netLine = new Mesh(geometry, material);
        this.netLines.push(netLine);
        this.add(netLine);
      }
    }
  }
}
