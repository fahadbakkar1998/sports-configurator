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
import { Hoops } from './hoops';

export class PaintArea extends Group {
  constructor({ item, compInfo }) {
    super();

    // Add paint area ground.
    this.groundMesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.add(this.groundMesh);

    // Add lane line.
    this.laneLine1Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.laneLine1Mesh.position.z = minGap;
    this.add(this.laneLine1Mesh);

    this.laneLine2Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.laneLine2Mesh.position.z = minGap;
    this.add(this.laneLine2Mesh);

    // Add throw line.
    this.throwLineMesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.throwLineMesh.position.z = minGap;
    this.add(this.throwLineMesh);

    // Add in lane line.
    this.inLaneLine1Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.inLaneLine1Mesh.position.z = minGap;
    this.add(this.inLaneLine1Mesh);

    this.inLaneLine2Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.inLaneLine2Mesh.position.z = minGap;
    this.add(this.inLaneLine2Mesh);

    // Add paint area circle.
    this.paintAreaCircleMesh = new Mesh(
      new TorusGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.paintAreaCircleMesh.position.z = minGap;
    this.add(this.paintAreaCircleMesh);

    // Add restricted area sideline.
    this.restrictedAreaSideline1Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.restrictedAreaSideline1Mesh.position.z = minGap;
    this.add(this.restrictedAreaSideline1Mesh);

    this.restrictedAreaSideline2Mesh = new Mesh(
      new PlaneGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.restrictedAreaSideline2Mesh.position.z = minGap;
    this.add(this.restrictedAreaSideline2Mesh);

    // Add restricted area circle.
    this.restrictedAreaCircle = new Mesh(
      new RingGeometry(),
      new MeshBasicMaterial({
        side: DoubleSide,
      }),
    );
    this.restrictedAreaCircle.position.z = minGap;
    this.add(this.restrictedAreaCircle);

    // Add hoops.
    this.hoops = new Hoops({ item, compInfo });
    this.hoops.position.z = minGap;
    this.hoops.rotateX(-Math.PI / 2);
    this.hoops.rotateZ(Math.PI);
    this.add(this.hoops);
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
      freeThrowLineDistance,
      lineWidth,
      hoopsDistance,
      basketDistance,
      backboardDistance,
    } = dimensionInfo;
    const material = components.material.value;
    const key_ground = material.key_ground;
    const groundMatUrl = key_ground.value;
    const lineColor = material.line_color.value;
    const laneLineLength = freeThrowLineDistance + hoopsDistance;

    // Update ground material.
    this.groundMesh.geometry = new PlaneGeometry(key, laneLineLength);

    if (this.groundMatUrl != groundMatUrl) {
      this.groundMatUrl = groundMatUrl;
      this.groundMesh.material.map = compInfo.textures.keyGround[groundMatUrl];
      this.groundMesh.material.map.wrapS = this.groundMesh.material.map.wrapT =
        RepeatWrapping;
    }

    const pieceSize = key_ground.piece_size || {
      width: minSize,
      height: minSize,
    };
    this.groundMesh.material.map.repeat = new Vector2(
      key / pieceSize.width,
      laneLineLength / pieceSize.height,
    );

    // Update lane line.
    this.laneLine1Mesh.position.x = -key / 2;
    this.laneLine1Mesh.geometry = new PlaneGeometry(lineWidth, laneLineLength);
    this.laneLine1Mesh.material.color.set(lineColor);

    this.laneLine2Mesh.position.x = key / 2;
    this.laneLine2Mesh.geometry = new PlaneGeometry(lineWidth, laneLineLength);
    this.laneLine2Mesh.material.color.set(lineColor);

    // Update throw line.
    this.throwLineMesh.position.y = laneLineLength / 2;
    this.throwLineMesh.geometry = new PlaneGeometry(key, lineWidth);
    this.throwLineMesh.material.color.set(lineColor);

    // Update in lane line.
    this.inLaneLine1Mesh.position.x = -centerOutCircleDiameter / 2;
    this.inLaneLine1Mesh.geometry = new PlaneGeometry(
      lineWidth,
      laneLineLength,
    );
    this.inLaneLine1Mesh.material.color.set(lineColor);

    this.inLaneLine2Mesh.position.x = centerOutCircleDiameter / 2;
    this.inLaneLine2Mesh.geometry = new PlaneGeometry(
      lineWidth,
      laneLineLength,
    );
    this.inLaneLine2Mesh.material.color.set(lineColor);

    // Update paint area circle.
    this.paintAreaCircleMesh.position.y = laneLineLength / 2;
    this.paintAreaCircleMesh.geometry = new TorusGeometry(
      centerOutCircleDiameter / 2,
      lineWidth / 2,
      2,
      1000,
    );
    this.paintAreaCircleMesh.material.color.set(lineColor);

    // Update restricted area sideline.
    this.restrictedAreaSideline1Mesh.position.x = -noChargeZoneArc;
    this.restrictedAreaSideline1Mesh.position.y =
      (basketDistance - laneLineLength) / 2;
    this.restrictedAreaSideline1Mesh.geometry = new PlaneGeometry(
      lineWidth,
      basketDistance,
    );
    this.restrictedAreaSideline1Mesh.material.color.set(lineColor);

    this.restrictedAreaSideline2Mesh.position.x = noChargeZoneArc;
    this.restrictedAreaSideline2Mesh.position.y =
      (basketDistance - laneLineLength) / 2;
    this.restrictedAreaSideline2Mesh.geometry = new PlaneGeometry(
      lineWidth,
      basketDistance,
    );
    this.restrictedAreaSideline2Mesh.material.color.set(lineColor);

    // Update restricted area circle.
    this.restrictedAreaCircle.position.y = basketDistance - laneLineLength / 2;
    this.restrictedAreaCircle.geometry = new RingGeometry(
      noChargeZoneArc - lineWidth / 2,
      noChargeZoneArc + lineWidth / 2,
      30,
      1,
      0,
      Math.PI,
    );
    this.restrictedAreaCircle.material.color.set(lineColor);

    // Update hoops.
    this.hoops.position.y =
      hoopsDistance - backboardDistance - laneLineLength / 2;
    this.hoops.redrawComponents({ components, compInfo });
  }
}
