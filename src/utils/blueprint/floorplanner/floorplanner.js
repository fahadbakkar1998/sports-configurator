import $ from 'jquery';
import { EventDispatcher, Vector2 } from 'three';
import { cmPerPixel, pixelsPerCm, Dimensioning } from '../core/dimensioning.js';
import {
  configDimUnit,
  configScale,
  configSnapToGrid,
  configSnapTolerance,
  configWallThickness,
  Configuration,
} from '../core/configuration.js';
//import {configGridSpacing} from '../core/configuration.js';
import { EVENT_MODE_RESET, EVENT_LOADED, EVENT_MOVED } from '../core/events.js';
import {
  EVENT_CORNER_ATTRIBUTES_CHANGED,
  EVENT_WALL_ATTRIBUTES_CHANGED,
  EVENT_ROOM_ATTRIBUTES_CHANGED,
} from '../core/events.js';
import {
  EVENT_CORNER_2D_HOVER,
  EVENT_WALL_2D_HOVER,
  EVENT_ROOM_2D_HOVER,
} from '../core/events.js';
import {
  EVENT_CORNER_2D_CLICKED,
  EVENT_ROOM_2D_CLICKED,
  EVENT_WALL_2D_CLICKED,
} from '../core/events.js';
import {
  EVENT_CORNER_2D_DOUBLE_CLICKED,
  EVENT_ROOM_2D_DOUBLE_CLICKED,
  EVENT_WALL_2D_DOUBLE_CLICKED,
} from '../core/events.js';
import { EVENT_CORNER_2D_MOVED } from '../core/events.js';
import { EVENT_NOTHING_CLICKED } from '../core/events.js';
import { FloorplannerView2D, floorplannerModes } from './floorplanner_view.js';

/* how much will we move a corner to make a wall axis aligned (cm) */
//export const configSnapTolerance = 25;//In CMS
/*
 * The Floorplanner implements an interactive tool for creation of floorplans in
 * 2D.
 */
export class Floorplanner2D extends EventDispatcher {
  /* */
  constructor(canvas, floorplan) {
    super();
    /* */
    this.mode = 0;
    /* */
    this.activeWall = null;
    /* */
    this.activeCorner = null;
    /* */
    this.activeRoom = null;

    /* */
    this._clickedWall = null;
    /* */
    this._clickedWallControl = null;
    /* */
    this._clickedCorner = null;
    /* */
    this._clickedRoom = null;
    /* */
    this.originX = 0;
    /* */
    this.originY = 0;
    /* */
    this.unScaledOriginX = 0;
    /* */
    this.unScaledOriginY = 0;
    /* drawing state */
    this.targetX = 0;
    /* drawing state */
    this.targetY = 0;
    /* drawing state */
    this.lastNode = null;
    /* */
    this.wallWidth = 0;
    /* */
    this.modeResetCallbacks = null;

    /* */
    this.mouseDown = false;
    /* */
    this.mouseMoved = false;
    /* in ThreeJS coords */
    this.mouseX = 0;
    /* in ThreeJS coords */
    this.mouseY = 0;
    /* in ThreeJS coords */
    this.rawMouseX = 0;
    /* in ThreeJS coords */
    this.rawMouseY = 0;
    /* mouse position at last click */
    this.lastX = 0;
    /* mouse position at last click */
    this.lastY = 0;

    this.canvas = canvas;
    this.floorplan = floorplan;
    this.floorplan.floorplanner = this;
    this.canvasElement = $('#' + canvas);
    this.view = new FloorplannerView2D(this.floorplan, this, canvas);

    // let cmPerFoot = cmPerFoot;
    // let pixelsPerFoot = pixelsPerFoot;
    this.cmPerPixel = cmPerPixel;
    this.pixelsPerCm = pixelsPerCm;

    this.wallWidth = Dimensioning.cmToPixel(
      Configuration.getNumericValue(configWallThickness),
    );

    // this.wallWidth = 10.0 * this.pixelsPerCm;
    this.gridSnapMode = false;
    this.shiftKey = false;
    this.ctrlKey = false;

    // Initialization:
    this.setMode(floorplannerModes.MOVE);

    let scope = this;
    this.canvasElement.bind('touchstart mousedown', (event) => {
      scope.mousedown(event);
    });
    this.canvasElement.bind('touchmove mousemove', (event) => {
      scope.mousemove(event);
    });
    this.canvasElement.bind('touchend mouseup', (event) => {
      scope.mouseup(event);
    });
    this.canvasElement.bind('mouseleave', (event) => {
      scope.mouseleave(event);
    });
    this.canvasElement.bind('dblclick', (event) => {
      scope.doubleClick(event);
    });
    document.addEventListener('keyup', function (event) {
      scope.keyUp(event);
    });
    document.addEventListener('keydown', function (event) {
      scope.keyDown(event);
    });
    floorplan.addEventListener(EVENT_LOADED, function () {
      scope.reset();
    });
    floorplan.addEventListener(EVENT_CORNER_ATTRIBUTES_CHANGED, (o) => {
      this.updateView();
    });
    floorplan.addEventListener(EVENT_WALL_ATTRIBUTES_CHANGED, (o) => {
      this.updateView();
    });
    floorplan.addEventListener(EVENT_ROOM_ATTRIBUTES_CHANGED, (o) => {
      this.updateView();
    });
  }

  get selectedCorner() {
    return this._clickedCorner;
  }

  get selectedWall() {
    return this._clickedWall;
  }

  get selectedRoom() {
    return this._clickedRoom;
  }

  get carbonSheet() {
    return this.view.carbonSheet;
  }

  updateView() {
    this.view.draw();
  }

  doubleClick() {
    let userInput, cid;
    function getAValidInput(message, current) {
      let uInput = window.prompt(message, current);
      if (uInput != null) {
        return uInput;
      }
      return current;
    }
    if (this.activeCorner) {
      this.floorplan.dispatchEvent({
        type: EVENT_CORNER_2D_DOUBLE_CLICKED,
        item: this.activeCorner,
      });
      if (!Configuration.getNumericValue('systemUI')) {
        return;
      }
      cid = this.activeCorner.id;
      let units = Configuration.getStringValue(configDimUnit);
      this.activeCorner.elevation = getAValidInput(
        `Elevation at this point (in ${units},\n${cid}): `,
        Dimensioning.cmToMeasureRaw(this.activeCorner.elevation),
      ); //Number(userInput);
      let x = getAValidInput(
        `Location: X (${Dimensioning.cmToMeasureRaw(this.activeCorner.x)}): `,
        Dimensioning.cmToMeasureRaw(this.activeCorner.x),
      ); //Number(userInput);
      let y = getAValidInput(
        `Location: Y (${Dimensioning.cmToMeasureRaw(this.activeCorner.y)}): `,
        Dimensioning.cmToMeasureRaw(this.activeCorner.y),
      ); //Number(userInput);
      this.activeCorner.move(
        Dimensioning.cmFromMeasureRaw(x),
        Dimensioning.cmFromMeasureRaw(y),
      );
    } else if (this.activeWall) {
      this.floorplan.dispatchEvent({
        type: EVENT_WALL_2D_DOUBLE_CLICKED,
        item: this.activeWall,
      });
      if (!Configuration.getNumericValue('systemUI')) {
        return;
      }
    } else if (this.activeRoom) {
      this.floorplan.dispatchEvent({
        type: EVENT_ROOM_2D_DOUBLE_CLICKED,
        item: this.activeRoom,
      });
      if (!Configuration.getNumericValue('systemUI')) {
        return;
      }
      userInput = window.prompt(
        'Enter a name for this Room: ',
        this.activeRoom.name,
      );
      if (userInput != null) {
        this.activeRoom.name = userInput;
      }
      this.updateView();
    }
  }

  keyUp(e) {
    if (e.keyCode == 27) {
      this.escapeKey();
    }
    this.gridSnapMode = false;
    this.shiftKey = false;
    this.ctrlKey = false;
  }

  keyDown(e) {
    if (e.shiftKey || e.keyCode == 16) {
      this.shiftKey = true;
    }
    if (e.ctrlKey || e.keyCode == 17) {
      this.ctrlKey = true;
    }
    this.gridSnapMode = this.shiftKey;
  }

  /* */
  escapeKey() {
    this.setMode(floorplannerModes.MOVE);
  }

  /* */
  updateTarget() {
    if (this.mode == floorplannerModes.DRAW && this.lastNode) {
      if (Configuration.getNumericValue('snapToRect')) {
        if (
          Math.abs(this.mouseX - this.lastNode.x) <
          Math.abs(this.mouseY - this.lastNode.y)
        ) {
          this.targetX = this.lastNode.x;
          this.targetY = this.mouseY;
        } else {
          this.targetX = this.mouseX;
          this.targetY = this.lastNode.y;
        }
      } else {
        if (
          Math.abs(this.mouseX - this.lastNode.x) <
          Configuration.getNumericValue(configSnapTolerance)
        ) {
          this.targetX = this.lastNode.x;
        } else {
          this.targetX = this.mouseX;
        }
        if (
          Math.abs(this.mouseY - this.lastNode.y) <
          Configuration.getNumericValue(configSnapTolerance)
        ) {
          this.targetY = this.lastNode.y;
        } else {
          this.targetY = this.mouseY;
        }
      }
    } else {
      this.targetX = this.mouseX;
      this.targetY = this.mouseY;
    }

    if (this.gridSnapMode || Configuration.getNumericValue(configSnapToGrid)) {
      this.targetX =
        Math.floor(
          this.targetX / Configuration.getNumericValue(configSnapTolerance),
        ) * Configuration.getNumericValue(configSnapTolerance);
      this.targetY =
        Math.floor(
          this.targetY / Configuration.getNumericValue(configSnapTolerance),
        ) * Configuration.getNumericValue(configSnapTolerance);

      // The below will not work, the configSnapTolerance is necessary for X, Y axis snapping, where as grid snapping is for snapping to grid lines
      // this.targetX = Math.floor(this.targetX / Configuration.getNumericValue(configGridSpacing)) * Configuration.getNumericValue(configGridSpacing);
      // this.targetY = Math.floor(this.targetY / Configuration.getNumericValue(configGridSpacing)) * Configuration.getNumericValue(configGridSpacing);
    }

    this.updateView();
  }

  /* */
  mousedown(event) {
    this.mouseDown = true;
    this.mouseMoved = false;
    if (event.touches) {
      // event.stopPropagation();
      // event.preventDefault();
      this.rawMouseX = event.touches[0].clientX;
      this.rawMouseY = event.touches[0].clientY;
      //The below line is very important for touch events to work
      event = event.touches[0];
    }

    this.lastX = this.rawMouseX;
    this.lastY = this.rawMouseY;

    // delete
    if (this.mode == floorplannerModes.DELETE) {
      if (this.activeCorner) {
        this.activeCorner.removeAll();
      } else if (this.activeWall) {
        this.activeWall.remove();
      } else {
        //Continue the mode of deleting walls, this is necessary for deleting multiple walls
        // 	this.setMode(floorplannerModes.MOVE);
      }
    }

    this.mouseX =
      Dimensioning.pixelToCm(event.clientX - this.canvasElement.offset().left) +
      Dimensioning.pixelToCm(this.originX);
    this.mouseY =
      Dimensioning.pixelToCm(event.clientY - this.canvasElement.offset().top) +
      Dimensioning.pixelToCm(this.originY);

    // this.mouseX = (event.clientX - this.canvasElement.offset().left)  * this.cmPerPixel + this.originX * this.cmPerPixel;
    // this.mouseY = (event.clientY - this.canvasElement.offset().top) * this.cmPerPixel + this.originY * this.cmPerPixel;

    if (this._clickedWall) {
      this._clickedWallControl = this.floorplan.overlappedControlPoint(
        this._clickedWall,
        this.mouseX,
        this.mouseY,
      );
      if (this._clickedWallControl != null) {
        this.updateView();
        return;
      }
    }

    let mDownCorner = this.floorplan.overlappedCorner(this.mouseX, this.mouseY);
    let mDownWall = this.floorplan.overlappedWall(this.mouseX, this.mouseY);
    let mDownRoom = this.floorplan.overlappedRoom(this.mouseX, this.mouseY);
    this._clickedWallControl = null;

    if (mDownCorner == null && mDownWall == null && mDownRoom == null) {
      this._clickedCorner = undefined;
      this._clickedWall = undefined;
      this._clickedRoom = undefined;
      this.floorplan.dispatchEvent({ type: EVENT_NOTHING_CLICKED });
    } else if (mDownCorner != null) {
      this._clickedCorner = undefined;
      this._clickedWall = undefined;
      this._clickedRoom = undefined;
      this._clickedCorner = mDownCorner;
      this.floorplan.dispatchEvent({
        type: EVENT_CORNER_2D_CLICKED,
        item: this._clickedCorner,
      });
      mDownCorner.addEventListener(EVENT_MOVED, (o) =>
        this.floorplan.dispatchEvent({ ...o, type: EVENT_CORNER_2D_MOVED }),
      );
    } else if (mDownWall != null) {
      this._clickedCorner = undefined;
      this._clickedWall = undefined;
      this._clickedRoom = undefined;
      this._clickedWall = mDownWall;
      this.floorplan.dispatchEvent({
        type: EVENT_WALL_2D_CLICKED,
        item: this._clickedWall,
      });
    } else if (mDownRoom != null) {
      this._clickedCorner = undefined;
      this._clickedWall = undefined;
      this._clickedRoom = undefined;
      this._clickedRoom = mDownRoom;
      this.floorplan.dispatchEvent({
        type: EVENT_ROOM_2D_CLICKED,
        item: this._clickedRoom,
      });
    }
    this.updateView();
  }

  /* */
  mousemove(event) {
    this.mouseMoved = true;

    if (event.touches) {
      event.stopPropagation();
      event.preventDefault();
      event = event.touches[0];
    }

    // update mouse
    this.rawMouseX = event.clientX;
    this.rawMouseY = event.clientY;

    this.mouseX =
      Dimensioning.pixelToCm(event.clientX - this.canvasElement.offset().left) +
      Dimensioning.pixelToCm(this.originX);
    this.mouseY =
      Dimensioning.pixelToCm(event.clientY - this.canvasElement.offset().top) +
      Dimensioning.pixelToCm(this.originY);

    // this.mouseX = (event.clientX - this.canvasElement.offset().left)  * this.cmPerPixel + this.originX * this.cmPerPixel;
    // this.mouseY = (event.clientY - this.canvasElement.offset().top) * this.cmPerPixel + this.originY * this.cmPerPixel;

    // update target (snapped position of actual mouse)
    if (
      this.mode == floorplannerModes.DRAW ||
      (this.mode == floorplannerModes.MOVE && this.mouseDown)
    ) {
      this.updateTarget();
    }

    // update object target
    if (this.mode != floorplannerModes.DRAW && !this.mouseDown) {
      let hoverCorner = this.floorplan.overlappedCorner(
        this.mouseX,
        this.mouseY,
      );
      let hoverWall = this.floorplan.overlappedWall(this.mouseX, this.mouseY);
      let hoverRoom = this.floorplan.overlappedRoom(this.mouseX, this.mouseY);
      let draw = false;

      // corner takes precedence
      if (hoverCorner != this.activeCorner && this.activeWall == null) {
        this.activeCorner = hoverCorner;
        this.floorplan.dispatchEvent({
          type: EVENT_CORNER_2D_HOVER,
          item: hoverCorner,
        });
        draw = true;
      }

      if (hoverWall != this.activeWall && this.activeCorner == null) {
        this.activeWall = hoverWall;
        this.floorplan.dispatchEvent({
          type: EVENT_WALL_2D_HOVER,
          item: hoverWall,
        });
        draw = true;
      } else {
        this.activeWall = null;
      }

      if (this.activeWall == null && this.activeCorner == null) {
        this.activeRoom = hoverRoom;
      }

      if (
        this.activeCorner == null &&
        this.activeWall == null &&
        this.activeRoom != null
      ) {
        this.floorplan.dispatchEvent({
          type: EVENT_ROOM_2D_HOVER,
          item: hoverRoom,
        });
      }

      if (this.activeRoom == null) {
        draw = true;
      }

      if (draw) {
        this.updateView();
      }
    }

    let mx, my;
    // panning.
    if (
      this.mouseDown &&
      !this.activeCorner &&
      !this.activeWall &&
      !this._clickedWallControl
    ) {
      // else if (this.mouseDown && (this.activeCorner==null) && (this.activeWall==null) && (this._clickedWallControl == null))
      // else if (this.mouseDown && (!this._clickedCorner) && (!this._clickedWall) && (this._clickedWallControl == null))
      this.originX += this.lastX - this.rawMouseX;
      this.originY += this.lastY - this.rawMouseY;
      this.unScaledOriginX +=
        (this.lastX - this.rawMouseX) *
        (1 / Configuration.getNumericValue(configScale));
      this.unScaledOriginY +=
        (this.lastY - this.rawMouseY) *
        (1 / Configuration.getNumericValue(configScale));
      this.lastX = this.rawMouseX;
      this.lastY = this.rawMouseY;
      this.updateView();
    }
    // dragging
    if (this.mode == floorplannerModes.MOVE && this.mouseDown) {
      // if (this.mode == floorplannerModes.MOVE && this.mouseDown && (this._clickedCorner || this._clickedWall || this._clickedWallControl != null))
      if (this._clickedWallControl != null) {
        mx = this.mouseX;
        my = this.mouseY;
        if (
          this.gridSnapMode ||
          Configuration.getNumericValue(configSnapToGrid)
        ) {
          mx =
            Math.floor(
              this.mouseX / Configuration.getNumericValue(configSnapTolerance),
            ) * Configuration.getNumericValue(configSnapTolerance);
          my =
            Math.floor(
              this.mouseY / Configuration.getNumericValue(configSnapTolerance),
            ) * Configuration.getNumericValue(configSnapTolerance);
        }

        this._clickedWallControl.x = mx;
        this._clickedWallControl.y = my;
        this._clickedWall.updateControlVectors();
        this.updateView();
        return;
      }
      if (this.activeCorner) {
        if (
          this.gridSnapMode ||
          Configuration.getNumericValue(configSnapToGrid)
        ) {
          // 		let mx = (Math.abs(this.mouseX - this.activeCorner.x) < Configuration.getNumericValue(configSnapTolerance)) ? this.activeCorner.x : this.mouseX;
          // 		let my = (Math.abs(this.mouseY - this.activeCorner.y) < Configuration.getNumericValue(configSnapTolerance)) ? this.activeCorner.y : this.mouseY;

          mx =
            Math.floor(
              this.mouseX / Configuration.getNumericValue(configSnapTolerance),
            ) * Configuration.getNumericValue(configSnapTolerance);
          my =
            Math.floor(
              this.mouseY / Configuration.getNumericValue(configSnapTolerance),
            ) * Configuration.getNumericValue(configSnapTolerance);

          this.activeCorner.move(Math.round(mx), Math.round(my));
        } else {
          this.activeCorner.move(this.mouseX, this.mouseY);
        }
        if (this.shiftKey) {
          this.activeCorner.snapToAxis(
            Configuration.getNumericValue(configSnapTolerance),
          );
        }
        if (this.ctrlKey) {
          this.activeCorner.mergeWithIntersected();
        }
      } else if (this.activeWall) {
        if (!Configuration.getNumericValue('snapToRect')) {
          if (
            this.gridSnapMode ||
            Configuration.getNumericValue(configSnapToGrid)
          ) {
            let dx = Dimensioning.pixelToCm(this.rawMouseX - this.lastX);
            let dy = Dimensioning.pixelToCm(this.rawMouseY - this.lastY);
            mx =
              Math.floor(
                dx / Configuration.getNumericValue(configSnapTolerance),
              ) * Configuration.getNumericValue(configSnapTolerance);
            my =
              Math.floor(
                dy / Configuration.getNumericValue(configSnapTolerance),
              ) * Configuration.getNumericValue(configSnapTolerance);
            this.activeWall.relativeMove(mx, my);
          } else {
            this.activeWall.relativeMove(
              Dimensioning.pixelToCm(this.rawMouseX - this.lastX),
              Dimensioning.pixelToCm(this.rawMouseY - this.lastY),
            );
          }

          // 	this.activeWall.relativeMove((this.rawMouseX - this.lastX) * this.cmPerPixel, (this.rawMouseY - this.lastY) * this.cmPerPixel);
          if (
            this.gridSnapMode ||
            Configuration.getNumericValue(configSnapToGrid)
          ) {
            this.activeWall.snapToAxis(
              Configuration.getNumericValue(configSnapTolerance),
            );
          }
          this.lastX = this.rawMouseX;
          this.lastY = this.rawMouseY;
        }
      }
      this.updateView();
    }
  }

  /* */
  mouseup(/*event*/) {
    this.mouseDown = false;
    // if(event.touches)
    // {
    // event.stopPropagation();
    // event.preventDefault();
    // }
    // drawing
    if (this.mode == floorplannerModes.DRAW && !this.mouseMoved) {
      // This creates the corner already
      let corner = this.floorplan.newCorner(this.targetX, this.targetY);

      // further create a newWall based on the newly inserted corners
      // (one in the above line and the other in the previous mouse action
      // of start drawing a new wall)
      if (this.lastNode != null) {
        this.floorplan.newWall(this.lastNode, corner);
        this.floorplan.newWallsForIntersections(this.lastNode, corner);
        this.updateView();
      }
      if (corner.mergeWithIntersected() && this.lastNode != null) {
        this.setMode(floorplannerModes.MOVE);
      }
      this.lastNode = corner;
    } else {
      if (this.activeCorner != null) {
        this.activeCorner.updateAttachedRooms(true);
      }
      if (this.activeWall != null) {
        this.activeWall.updateAttachedRooms(true);
      }

      if (this._clickedCorner) {
        this._clickedCorner.updateAttachedRooms(true);
      }
      if (this._clickedWall) {
        this._clickedWall.updateAttachedRooms(true);
      }
    }
    this.updateView();
  }

  /* */
  mouseleave() {
    this.mouseDown = false;
    // scope.setMode(scope.modes.MOVE);
  }

  __updateInteractiveElements() {}

  /* */
  reset() {
    this.view.carbonSheet.clear();
    this.resizeView();
    this.setMode(floorplannerModes.MOVE);
    this.resetOrigin();
    this.updateView();
  }

  /* */
  resizeView() {
    this.view.handleWindowResize();
  }

  /* */
  setMode(mode) {
    this.lastNode = null;
    this.mode = mode;
    this.dispatchEvent({ type: EVENT_MODE_RESET, mode: mode });
    // this.modeResetCallbacks.fire(mode);
    this.updateTarget();
  }

  /* Sets the origin so that floorplan is centered */
  resetOrigin() {
    let centerX = this.canvasElement.innerWidth() / 2.0;
    let centerY = this.canvasElement.innerHeight() / 2.0;

    let centerFloorplan = this.floorplan.getCenter();
    this.originX = Dimensioning.cmToPixel(centerFloorplan.x) - centerX;
    this.originY = Dimensioning.cmToPixel(centerFloorplan.z) - centerY;

    this.unScaledOriginX =
      Dimensioning.cmToPixel(centerFloorplan.x, false) - centerX;
    this.unScaledOriginY =
      Dimensioning.cmToPixel(centerFloorplan.z, false) - centerY;

    // this.originX = centerFloorplan.x * this.pixelsPerCm - centerX;
    // this.originY = centerFloorplan.z * this.pixelsPerCm - centerY;
  }

  zoom() {
    let centerX = this.canvasElement.innerWidth() / 2.0;
    let centerY = this.canvasElement.innerHeight() / 2.0;
    let originScreen = new Vector2(centerX, centerY);
    let currentPan = new Vector2(
      this.unScaledOriginX + centerX,
      this.unScaledOriginY + centerY,
    );
    currentPan = currentPan
      .multiplyScalar(Configuration.getNumericValue(configScale))
      .sub(originScreen);

    this.originX = currentPan.x;
    this.originY = currentPan.y;
  }

  /* Convert from THREEjs coords to canvas coords. */
  convertX(x) {
    return Dimensioning.cmToPixel(x - Dimensioning.pixelToCm(this.originX));
    // return (x - (this.originX * this.cmPerPixel)) * this.pixelsPerCm;
  }

  /* Convert from THREEjs coords to canvas coords. */
  convertY(y) {
    return Dimensioning.cmToPixel(y - Dimensioning.pixelToCm(this.originY));
    // return (y - (this.originY * this.cmPerPixel)) * this.pixelsPerCm;
  }
}
