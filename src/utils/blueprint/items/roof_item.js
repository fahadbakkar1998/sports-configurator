import { Item } from './item.js';
import { Matrix4, Triangle, Plane, Vector3 } from 'three';
import { Utils } from '../blueprint.js';
export class RoofItem extends Item {
  constructor(info) {
    super(info);
    this.allowRotate = false;
    this.boundToFloor = false;
    this._freePosition = false;
    if (this.geometry) {
      this.geometry.applyMatrix(
        new Matrix4().makeTranslation(
          -0.5 *
            (this.geometry.boundingBox.max.x + this.geometry.boundingBox.min.x),
          -0.5 *
            (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y),
          -0.5 *
            (this.geometry.boundingBox.max.z + this.geometry.boundingBox.min.z),
        ),
      );
      this.geometry.computeBoundingBox();
    }
    this.halfSize = this.objectHalfSize();
    this.canvasPlaneWH.position.set(
      0,
      this.getHeight() * -0.5,
      this.getDepth() * 0.5,
    );
    this.canvasPlaneWD.position.set(0, -this.getHeight(), 0);

    let co = this.closestCeilingPoint();
    this.moveToPosition(co);
  }

  /* Returns an array of planes to use other than the ground plane
   * for passing intersection to clickPressed and clickDragged */
  customIntersectionPlanes() {
    return this.model.floorplan.roofPlanes();
  }

  roofContainsPoint(roof, forPoint) {
    let g = roof.geometry;
    let result = {
      distance: Number.MAX_VALUE,
      contains: false,
      point: null,
      closestPoint: null,
    };
    let closestPoint = null;
    for (let i = 0; i < g.faces.length; i++) {
      let f = g.faces[i];
      let plane = new Plane();
      let triangle = new Triangle(
        g.vertices[f.a],
        g.vertices[f.b],
        g.vertices[f.c],
      );
      let iPoint = new Vector3();
      let cPoint = new Vector3();
      let contains = false;
      let distance = 0.0;
      closestPoint = triangle.closestPointToPoint(forPoint, cPoint);
      triangle.getPlane(plane);
      plane.projectPoint(forPoint, iPoint);
      contains = triangle.containsPoint(iPoint);
      distance = plane.distanceToPoint(forPoint);
      if (distance < result.distance && contains) {
        result.distance = distance;
        result.contains = contains;
        result.point = iPoint;
        result.closestPoint = closestPoint.clone();
      }
    }
    // No good result so return the closest point of the last triangle in this roof mesh
    if (result.point == null) {
      result.closestPoint = closestPoint.clone();
    }

    return result;
  }

  closestCeilingPoint() {
    let roofs = this.model.floorplan.roofPlanes();
    let roof = null;
    let globalResult = { distance: Number.MAX_VALUE, point: null };
    let result = null;
    for (let i = 0; i < roofs.length; i++) {
      roof = roofs[i];
      result = this.roofContainsPoint(roof, this.position);
      if (
        result.point != null &&
        result.distance < globalResult.distance &&
        result.contains
      ) {
        globalResult.distance = result.distance;
        globalResult.point = result.point.clone();
      }
    }
    // No good results so assign the closestPoint of the last roof in the above iteration
    if (globalResult.point == null) {
      return result.closestPoint.clone();
    }
    return globalResult.point.clone();
  }

  /* */
  placeInRoom() {
    if (!this.position_set) {
      let co = this.closestCeilingPoint();
      this.moveToPosition(co);
    }
  }

  moveToPosition(vec3, intersection) {
    if (!vec3) return;
    if (!intersection) {
      super.moveToPosition(vec3);
      return;
    }
    if (!this.isValidPosition(vec3, intersection)) {
      this.showError(vec3);
    } else {
      this.hideError();
      vec3.y = this.position.y;
      super.moveToPosition(vec3);
    }
  }

  getIntersectionCorners(intersection) {
    const corners = intersection.object.geometry.vertices.map((e) => {
      return { x: e.x, y: e.z };
    });
    return corners;
  }

  isValidPosition(vec3, intersection) {
    const corners = this.getCorners('x', 'z', vec3);
    const intersectionCorners = this.getIntersectionCorners(intersection);
    const isValid = Utils.polygonInsidePolygon(corners, intersectionCorners);
    if (!isValid) return false;
    return true;
  }
}
