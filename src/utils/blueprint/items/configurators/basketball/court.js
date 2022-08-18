import {
  Group,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  RepeatWrapping,
  Vector2,
  TorusGeometry,
  RingGeometry,
} from 'three';
import { minSize, minGap } from '../../../core/constants';
import { PaintArea } from './paint_area';

export class Court extends Group {
  constructor({ item, compInfo }) {
    super();
    this.item = item;
    const components = item.metadata.components;
    const dimensionInfo = compInfo.dimensionInfo;
    const {
      outerWidth,
      outerLength,
      courtWidth,
      courtLength,
      rimHeight,
      noChargeZoneArc,
      centerInCircleDiameter,
      centerOutCircleDiameter,
      threeMinPointLineDistance,
      threeMaxPointLineDistance,
      key,
      freeThreePointLineDistance,
      cornerLineDistance,
      lineWidth,
    } = dimensionInfo;

    // Add ground.
    this.groundMesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.add(this.groundMesh);

    // Add center line.
    this.centerLineMesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.centerLineMesh.position.z = minGap;
    this.add(this.centerLineMesh);

    // Add center in circle line.
    this.centerInCircleMesh = new Mesh(
      new TorusGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.centerInCircleMesh.position.z = minGap;
    this.add(this.centerInCircleMesh);

    // Add center out circle line.
    this.centerOutCircleMesh = new Mesh(
      new TorusGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.centerOutCircleMesh.position.z = minGap;
    this.add(this.centerOutCircleMesh);

    // Add sideline.
    this.sideline1Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.sideline1Mesh.position.z = minGap;
    this.add(this.sideline1Mesh);

    this.sideline2Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.sideline2Mesh.position.z = minGap;
    this.add(this.sideline2Mesh);

    // Add baseline.
    this.baseline1Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.baseline1Mesh.position.z = minGap;
    this.add(this.baseline1Mesh);

    this.baseline2Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.baseline2Mesh.position.z = minGap;
    this.add(this.baseline2Mesh);

    // Calculate basic constants.
    const r = courtLength / 2;
    const cornerLineLength = Math.sqrt(
      r * r - cornerLineDistance * cornerLineDistance,
    );

    // Add corner line.
    this.cornerLine11Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.cornerLine11Mesh.position.z = minGap;
    this.add(this.cornerLine11Mesh);

    this.cornerLine12Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.cornerLine12Mesh.position.z = minGap;
    this.add(this.cornerLine12Mesh);

    this.cornerLine21Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.cornerLine21Mesh.position.z = minGap;
    this.add(this.cornerLine21Mesh);

    this.cornerLine22Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.cornerLine22Mesh.position.z = minGap;
    this.add(this.cornerLine22Mesh);

    // Add Three-Point line.
    this.threePointLine1Mesh = new Mesh(
      new RingGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.threePointLine1Mesh.position.z = minGap;
    this.add(this.threePointLine1Mesh);

    this.threePointLine2Mesh = new Mesh(
      new RingGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.threePointLine2Mesh.position.z = minGap;
    this.add(this.threePointLine2Mesh);

    // Add paint area.
    this.paintArea = new PaintArea({ item, compInfo });
    this.paintArea.position.z = minGap;
    this.add(this.paintArea);

    this.redrawComponents({ components, compInfo });
  }

  redrawComponents({ components, compInfo }) {
    const dimensionInfo = compInfo.dimensionInfo;
    const {
      outerWidth,
      outerLength,
      courtWidth,
      courtLength,
      rimHeight,
      noChargeZoneArc,
      centerInCircleDiameter,
      centerOutCircleDiameter,
      threeMinPointLineDistance,
      threeMaxPointLineDistance,
      key,
      freeThreePointLineDistance,
      cornerLineDistance,
      lineWidth,
    } = dimensionInfo;
    const material = components.material.value;
    const court_ground = material.court_ground;
    const groundMatUrl = court_ground.value;
    const lineColor = material.line_color.value;

    // Update ground material.
    this.groundMesh.geometry = new PlaneGeometry(courtWidth, courtLength);

    if (this.groundMatUrl != groundMatUrl) {
      this.groundMatUrl = groundMatUrl;
      this.groundMesh.material.map =
        compInfo.textures.courtGround[groundMatUrl];
      this.groundMesh.material.map.wrapS = this.groundMesh.material.map.wrapT =
        RepeatWrapping;
    }

    const pieceSize = court_ground.piece_size || {
      width: minSize,
      height: minSize,
    };
    this.groundMesh.material.map.repeat = new Vector2(
      courtWidth / pieceSize.width,
      courtLength / pieceSize.height,
    );

    // Update center line
    this.centerLineMesh.geometry = new PlaneGeometry(lineWidth, courtLength);
    this.centerLineMesh.material.color.set(lineColor);

    // Update center in circle line.
    this.centerInCircleMesh.geometry = new TorusGeometry(
      centerInCircleDiameter / 2,
      lineWidth / 2,
      2,
      1000,
    );
    this.centerInCircleMesh.material.color.set(lineColor);

    // Update center out circle line.
    this.centerOutCircleMesh.geometry = new TorusGeometry(
      centerOutCircleDiameter / 2,
      lineWidth / 2,
      2,
      1000,
    );
    this.centerOutCircleMesh.material.color.set(lineColor);

    // Update sideline.
    this.sideline1Mesh.position.y = -courtLength / 2;
    this.sideline1Mesh.geometry = new PlaneGeometry(courtWidth, lineWidth);
    this.sideline1Mesh.material.color.set(lineColor);
    this.sideline2Mesh.position.y = courtLength / 2;
    this.sideline2Mesh.geometry = new PlaneGeometry(courtWidth, lineWidth);
    this.sideline2Mesh.material.color.set(lineColor);

    // Update baseline.
    this.baseline1Mesh.position.x = -courtWidth / 2;
    this.baseline1Mesh.geometry = new PlaneGeometry(lineWidth, courtLength);
    this.baseline1Mesh.material.color.set(lineColor);
    this.baseline2Mesh.position.x = courtWidth / 2;
    this.baseline2Mesh.geometry = new PlaneGeometry(lineWidth, courtLength);
    this.baseline2Mesh.material.color.set(lineColor);

    // Calculate basic constants.
    const r = courtLength / 2;
    const cornerLineLength = Math.sqrt(
      r * r - cornerLineDistance * cornerLineDistance,
    );
    const threePointLineStartAngle = Math.acos(cornerLineDistance / r);

    // Update corner line.
    this.cornerLine11Mesh.position.x = (cornerLineLength - courtWidth) / 2;
    this.cornerLine11Mesh.position.y = cornerLineDistance;
    this.cornerLine11Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine11Mesh.material.color.set(lineColor);

    this.cornerLine12Mesh.position.x = (cornerLineLength - courtWidth) / 2;
    this.cornerLine12Mesh.position.y = -cornerLineDistance;
    this.cornerLine12Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine12Mesh.material.color.set(lineColor);

    this.cornerLine21Mesh.position.x = (courtWidth - cornerLineLength) / 2;
    this.cornerLine21Mesh.position.y = -cornerLineDistance;
    this.cornerLine21Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine21Mesh.material.color.set(lineColor);

    this.cornerLine22Mesh.position.x = (courtWidth - cornerLineLength) / 2;
    this.cornerLine22Mesh.position.y = cornerLineDistance;
    this.cornerLine22Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine22Mesh.material.color.set(lineColor);

    // Update Three-Point line.
    this.threePointLine1Mesh.position.x = -courtWidth / 2;
    this.threePointLine1Mesh.geometry = new RingGeometry(
      r - lineWidth / 2,
      r + lineWidth / 2,
      30,
      1,
      threePointLineStartAngle - Math.PI / 2,
      Math.PI - 2 * threePointLineStartAngle,
    );
    this.threePointLine1Mesh.material.color.set(lineColor);

    this.threePointLine2Mesh.position.x = courtWidth / 2;
    this.threePointLine2Mesh.geometry = new RingGeometry(
      r - lineWidth / 2,
      r + lineWidth / 2,
      30,
      1,
      threePointLineStartAngle + Math.PI / 2,
      Math.PI - 2 * threePointLineStartAngle,
    );
    this.threePointLine2Mesh.material.color.set(lineColor);
  }
}
