import { Item } from './item.js';
import { Utils } from '../core/utils.js';
import { itemLayerHeight } from '../../../constants.js';

/*
 * A Floor Item is an entity to be placed related to a floor.
 */
export class FloorItem extends Item {
  constructor(info) {
    super(info);
    this._freePosition = false;
  }

  /* */
  placeInRoom() {
    if (!this.position_set) {
      let center = this.model.floorplan.getCenter();
      this.position.x = center.x;
      this.position.z = center.z;
      this.position.y =
        0.5 *
          (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) +
        itemLayerHeight;
    }
  }

  /* Take action after a resize */
  resized() {
    this.position.y = this.halfSize.y;
  }

  /* */
  moveToPosition(vec3) {
    // keeps the position in the room and on the floor
    if (!this.isValidPosition(vec3)) {
      this.showError(vec3);
      return;
    } else {
      this.hideError();
      vec3.y = this.position.y; // keep it on the floor!
      // this.position.copy(vec3);
      super.moveToPosition(vec3);
    }
  }

  /* */
  isValidPosition(vec3) {
    let corners = this.getCorners('x', 'z', vec3);

    // check if we are in a room
    let rooms = this.model.floorplan.getRooms();
    let isInARoom = false;
    for (let i = 0; i < rooms.length; i++) {
      const inPolygon = Utils.polygonInsidePolygon(
        corners,
        rooms[i].interiorCorners,
      );
      if (
        inPolygon &&
        !Utils.polygonPolygonIntersect(corners, rooms[i].interiorCorners)
      ) {
        isInARoom = true;
      }
    }
    if (!isInARoom) return false;

    // check if we are outside all other objects
    if (this.obstructFloorMoves) {
      let objects = this.model.scene.getItems();
      for (let i = 0; i < objects.length; i++) {
        if (objects[i] === this || !objects[i].obstructFloorMoves) {
          continue;
        }
        if (
          !Utils.polygonOutsidePolygon(
            corners,
            objects[i].getCorners('x', 'z'),
          ) ||
          Utils.polygonPolygonIntersect(
            corners,
            objects[i].getCorners('x', 'z'),
          )
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
