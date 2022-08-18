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

    // Add court ground.
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

    // Add center in circle.
    this.centerInCircleMesh = new Mesh(
      new TorusGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.centerInCircleMesh.position.z = minGap;
    this.add(this.centerInCircleMesh);

    // Add center out circle.
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
    this.paintArea1 = new PaintArea({ item, compInfo });
    this.paintArea1.position.z = minGap;
    this.paintArea1.rotateZ(-Math.PI / 2);
    this.add(this.paintArea1);

    this.paintArea2 = new PaintArea({ item, compInfo });
    this.paintArea2.position.z = minGap;
    this.paintArea2.rotateZ(Math.PI / 2);
    this.add(this.paintArea2);
  }

  redrawComponents({ components, compInfo }) {
    const dimensionInfo = compInfo.dimensionInfo;
    const {
      courtWidth,
      courtLength,
      centerInCircleDiameter,
      centerOutCircleDiameter,
      threeMinPointLineDistance,
      threeMaxPointLineDistance,
      freeThrowLineDistance,
      lineWidth,
      hoopsDistance,
      basketDistance,
    } = dimensionInfo;
    const material = components.material.value;
    const court_ground = material.court_ground;
    const groundMatUrl = court_ground.value;
    const lineColor = material.line_color.value;
    const basketDistanceFromBaseline = hoopsDistance + basketDistance;

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

    // Update center in circle.
    this.centerInCircleMesh.geometry = new TorusGeometry(
      centerInCircleDiameter / 2,
      lineWidth / 2,
      2,
      1000,
    );
    this.centerInCircleMesh.material.color.set(lineColor);

    // Update center out circle.
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
    const cornerLineLength =
      Math.sqrt(
        threeMaxPointLineDistance * threeMaxPointLineDistance -
          threeMinPointLineDistance * threeMinPointLineDistance,
      ) + basketDistanceFromBaseline;
    const threePointLineStartAngle = Math.acos(
      threeMinPointLineDistance / threeMaxPointLineDistance,
    );

    // Update corner line.
    this.cornerLine11Mesh.position.x = (cornerLineLength - courtWidth) / 2;
    this.cornerLine11Mesh.position.y = threeMinPointLineDistance;
    this.cornerLine11Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine11Mesh.material.color.set(lineColor);

    this.cornerLine12Mesh.position.x = (cornerLineLength - courtWidth) / 2;
    this.cornerLine12Mesh.position.y = -threeMinPointLineDistance;
    this.cornerLine12Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine12Mesh.material.color.set(lineColor);

    this.cornerLine21Mesh.position.x = (courtWidth - cornerLineLength) / 2;
    this.cornerLine21Mesh.position.y = -threeMinPointLineDistance;
    this.cornerLine21Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine21Mesh.material.color.set(lineColor);

    this.cornerLine22Mesh.position.x = (courtWidth - cornerLineLength) / 2;
    this.cornerLine22Mesh.position.y = threeMinPointLineDistance;
    this.cornerLine22Mesh.geometry = new PlaneGeometry(
      cornerLineLength,
      lineWidth,
    );
    this.cornerLine22Mesh.material.color.set(lineColor);

    // Update Three-Point line.
    this.threePointLine1Mesh.position.x =
      basketDistanceFromBaseline - courtWidth / 2;
    this.threePointLine1Mesh.geometry = new RingGeometry(
      threeMaxPointLineDistance - lineWidth / 2,
      threeMaxPointLineDistance + lineWidth / 2,
      30,
      1,
      threePointLineStartAngle - Math.PI / 2,
      Math.PI - 2 * threePointLineStartAngle,
    );
    this.threePointLine1Mesh.material.color.set(lineColor);

    this.threePointLine2Mesh.position.x =
      courtWidth / 2 - basketDistanceFromBaseline;
    this.threePointLine2Mesh.geometry = new RingGeometry(
      threeMaxPointLineDistance - lineWidth / 2,
      threeMaxPointLineDistance + lineWidth / 2,
      30,
      1,
      threePointLineStartAngle + Math.PI / 2,
      Math.PI - 2 * threePointLineStartAngle,
    );
    this.threePointLine2Mesh.material.color.set(lineColor);

    // Update paint area.
    this.paintArea1.position.x = -(
      courtWidth / 2 -
      (freeThrowLineDistance + basketDistanceFromBaseline) / 2
    );
    this.paintArea1.redrawComponents({ components, compInfo });

    this.paintArea2.position.x =
      courtWidth / 2 - (freeThrowLineDistance + basketDistanceFromBaseline) / 2;
    this.paintArea2.redrawComponents({ components, compInfo });
  }
}
