import {
  Group,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  RepeatWrapping,
  Vector2,
} from 'three';
import { minSize, minGap } from '../../../core/constants';
import { Court } from './court';

export class Outside extends Group {
  constructor({ item, compInfo }) {
    super();

    // Add outside ground.
    this.groundMesh = new Mesh(
      new PlaneGeometry(minSize, minSize),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.add(this.groundMesh);

    // Add court.
    this.court = new Court({ item, compInfo });
    this.court.position.z = minGap;
    this.add(this.court);
  }

  redrawComponents({ components, compInfo }) {
    const dimensionInfo = compInfo.dimensionInfo;
    const outer_ground = components.material.value.outer_ground;
    const materialUrl = outer_ground.value;

    this.groundMesh.geometry = new PlaneGeometry(
      dimensionInfo.outerWidth,
      dimensionInfo.outerLength,
    );

    if (this.materialUrl != materialUrl) {
      this.materialUrl = materialUrl;
      this.groundMesh.material.map = compInfo.textures.outerGround[materialUrl];
      this.groundMesh.material.map.wrapS = this.groundMesh.material.map.wrapT =
        RepeatWrapping;
    }

    const pieceSize = outer_ground.piece_size || {
      width: minSize,
      height: minSize,
    };
    this.groundMesh.material.map.repeat = new Vector2(
      dimensionInfo.outerWidth / pieceSize.width,
      dimensionInfo.outerLength / pieceSize.height,
    );

    const OCWGap = (dimensionInfo.outerWidth - dimensionInfo.courtWidth) / 2; // Width Gap between outer and court
    const OCLGap = (dimensionInfo.outerLength - dimensionInfo.courtLength) / 2; // Length Gap between outer and court
    const estimateLGap = Math.min(OCWGap, OCLGap);
    this.court.position.y = estimateLGap - OCLGap;
    this.court.redrawComponents({ components, compInfo });
  }
}
