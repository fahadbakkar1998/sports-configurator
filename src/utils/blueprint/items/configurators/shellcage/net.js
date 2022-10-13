import {
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshLambertMaterial,
  Mesh,
  DoubleSide,
} from 'three';

export class Net extends Group {
  constructor() {
    super();
    this.netLines = [];
  }

  redrawComponents({ components, compInfo, subCompInfo }) {
    this.netLines.forEach((netLine) => this.remove(netLine));
    this.netLines = [];

    const material = new MeshLambertMaterial({
      color: 0x333333,
      side: DoubleSide,
    });

    for (
      let diffW = 0;
      diffW < subCompInfo.width / 2;
      diffW += compInfo.netHoleSize
    ) {
      const pipeSpline = new CatmullRomCurve3([
        new Vector3(diffW, -subCompInfo.height / 2, 0),
        new Vector3(diffW, subCompInfo.height / 2, 0),
      ]);
      const geometry = new TubeGeometry(
        pipeSpline,
        10,
        compInfo.netDiameter / 2,
        10,
        false,
      );
      const netLine = new Mesh(geometry, material);
      this.netLines.push(netLine);
      this.add(netLine);
      if (diffW !== 0) {
        const pipeSpline = new CatmullRomCurve3([
          new Vector3(-diffW, -subCompInfo.height / 2, 0),
          new Vector3(-diffW, subCompInfo.height / 2, 0),
        ]);
        const geometry = new TubeGeometry(
          pipeSpline,
          10,
          compInfo.netDiameter / 2,
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
      diffH < subCompInfo.height / 2;
      diffH += compInfo.netHoleSize
    ) {
      const pipeSpline = new CatmullRomCurve3([
        new Vector3(-subCompInfo.width / 2, diffH, 0),
        new Vector3(subCompInfo.width / 2, diffH, 0),
      ]);
      const geometry = new TubeGeometry(
        pipeSpline,
        10,
        compInfo.netDiameter / 2,
        10,
        false,
      );
      const netLine = new Mesh(geometry, material);
      this.netLines.push(netLine);
      this.add(netLine);
      if (diffH !== 0) {
        const pipeSpline = new CatmullRomCurve3([
          new Vector3(-subCompInfo.width / 2, -diffH, 0),
          new Vector3(subCompInfo.width / 2, -diffH, 0),
        ]);
        const geometry = new TubeGeometry(
          pipeSpline,
          10,
          compInfo.netDiameter / 2,
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
