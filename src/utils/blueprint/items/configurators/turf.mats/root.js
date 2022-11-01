import {
  Group,
  BoxGeometry,
  PlaneGeometry,
  MeshBasicMaterial,
  InstancedMesh,
  Shape,
  ShapeGeometry,
} from 'three';
import { Plane } from './plane';
import { Dimensioning } from '../../../core/dimensioning';
import {
  floorPlanerScale,
  minSize,
  tempMatrix1,
  tempVec1,
} from '../../../core/constants';
import { onItemLayerHeight } from '../../../../../constants';

export class Root extends Group {
  constructor(item) {
    super();
    if (!item.metadata) item.metadata.unit = 'm';
    this.item = item;
    this.unit = item.metadata.unit;
    // this.maxSize = item.metadata.max_size;

    this.plane = new Plane();
    this.add(this.plane);

    this.redrawComponents(item.metadata.components);
  }

  getDimensionInfo(components) {
    // calculate dimension size.
    const width = Dimensioning.cmFromMeasureRaw(
      components.width.value,
      this.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      components.length.value,
      this.unit,
    );
    return { width, length };
  }

  redrawItem({ width, length }) {
    this.item.geometry = new BoxGeometry(width, minSize, length);
    this.item.position.y = minSize / 2;
    this.item.refreshItem();
  }

  redrawComponents(components) {
    const dimensionInfo = this.getDimensionInfo(components);
    this.redrawItem(dimensionInfo);

    this.plane.redrawComponents({
      components,
      compInfo: dimensionInfo,
    });

    this.redrawDecoration({ components, compInfo: dimensionInfo });
  }

  redrawDecoration({ components, compInfo }) {
    const { width, length } = compInfo;
    const lineWidth = width / 30;
    const horizontalPadding = width / 60;
    const diamondWidth = width / 10;

    if (this.lineMesh) this.remove(this.lineMesh);
    const lineMesh = this.makeLineMesh({
      width: lineWidth,
      height: length,
      count: 4,
    });
    this.add(lineMesh);
    this.lineMesh = lineMesh;
    lineMesh.setMatrixAt(
      0,
      tempMatrix1.setPosition(
        tempVec1
          .clone()
          .set(
            horizontalPadding + lineWidth / 2 - width / 2,
            0,
            0.1 * floorPlanerScale,
          ),
      ),
    );
    lineMesh.setMatrixAt(
      1,
      tempMatrix1.setPosition(
        tempVec1
          .clone()
          .set(-diamondWidth / 2 - lineWidth, 0, 0.1 * floorPlanerScale),
      ),
    );
    lineMesh.setMatrixAt(
      2,
      tempMatrix1.setPosition(
        tempVec1
          .clone()
          .set(diamondWidth / 2 + lineWidth, 0, 0.1 * floorPlanerScale),
      ),
    );
    lineMesh.setMatrixAt(
      3,
      tempMatrix1.setPosition(
        tempVec1
          .clone()
          .set(
            width / 2 - horizontalPadding - lineWidth / 2,
            0,
            0.1 * floorPlanerScale,
          ),
      ),
    );

    if (this.diamondMesh) this.remove(this.diamondMesh);
    const diamondMesh = this.makeDiamondMesh({
      width: diamondWidth,
      height: diamondWidth,
      count: 1,
    });
    this.add(diamondMesh);
    this.diamondMesh = diamondMesh;
    diamondMesh.setMatrixAt(
      0,
      tempMatrix1.setPosition(
        tempVec1.clone().set(0, 0, 0.1 * floorPlanerScale),
      ),
    );
  }

  makeLineMesh({ width, height, count }) {
    const geo = new PlaneGeometry(width, height);
    const mat = new MeshBasicMaterial({ color: 0xeeeeee });
    const instMesh = new InstancedMesh(geo, mat, count);
    return instMesh;
  }

  makeDiamondMesh({ width, height, count }) {
    const diamondShape = new Shape()
      .moveTo(0, -height / 2)
      .lineTo(width / 2, height / 3 - width / 2)
      .lineTo(width / 2, height / 2)
      .lineTo(-width / 2, height / 2)
      .lineTo(-width / 2, height / 3 - width / 2)
      .lineTo(0, -height / 2);
    const geo = new ShapeGeometry(diamondShape);
    const mat = new MeshBasicMaterial({ color: 0xeeeeee });
    const instMesh = new InstancedMesh(geo, mat, count);
    return instMesh;
  }
}
