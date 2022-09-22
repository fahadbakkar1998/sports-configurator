import { Model } from './model/model.js';
import { Main } from './three/main.js';
import { Floorplanner2D } from './floorplanner/floorplanner.js';
import { Configuration, configDimUnit } from './core/configuration.js';
import { dimMeter } from './core/dimensioning.js';
import { immerable } from 'immer';
import { dimFeetAndInch } from './core/constants.js';

// Classes from core module
export { Version } from './core/version.js';

export {
  EVENT_SAVED,
  EVENT_UPDATED,
  EVENT_LOADING,
  EVENT_LOADED,
  EVENT_NEW,
  EVENT_ACTION,
  EVENT_GLTF_READY,
} from './core/events.js';
export {
  EVENT_DELETED,
  EVENT_MOVED,
  EVENT_REDRAW,
  EVENT_CHANGED,
  EVENT_MODE_RESET,
} from './core/events.js';
export { EVENT_ROOM_NAME_CHANGED } from './core/events.js';
export {
  EVENT_ITEM_LOADING,
  EVENT_ITEM_LOADED,
  EVENT_ITEM_REMOVED,
  EVENT_ITEM_SELECTED,
  EVENT_ITEM_UNSELECTED,
} from './core/events.js';
export {
  EVENT_CAMERA_MOVED,
  EVENT_CAMERA_ACTIVE_STATUS,
  EVENT_FPS_EXIT,
  EVENT_CAMERA_VIEW_CHANGE,
} from './core/events.js';

export {
  EVENT_CORNER_ATTRIBUTES_CHANGED,
  EVENT_WALL_ATTRIBUTES_CHANGED,
  EVENT_ROOM_ATTRIBUTES_CHANGED,
} from './core/events.js';
export {
  EVENT_WALL_CLICKED,
  EVENT_ROOM_CLICKED,
  EVENT_NOTHING_CLICKED,
  EVENT_FLOOR_CLICKED,
} from './core/events.js';
export {
  EVENT_CORNER_2D_CLICKED,
  EVENT_CORNER_2D_DOUBLE_CLICKED,
  EVENT_CORNER_2D_HOVER,
  EVENT_CORNER_2D_MOVED,
} from './core/events.js';
export {
  EVENT_WALL_2D_CLICKED,
  EVENT_WALL_2D_DOUBLE_CLICKED,
  EVENT_WALL_2D_HOVER,
} from './core/events.js';
export {
  EVENT_ROOM_2D_CLICKED,
  EVENT_ROOM_2D_DOUBLE_CLICKED,
  EVENT_ROOM_2D_HOVER,
} from './core/events.js';

export { Utils, Region } from './core/utils.js';
export {
  ELogContext,
  ELogLevel,
  logContext,
  isLogging,
  log,
} from './core/log.js';
export {
  dimInch,
  dimFeetAndInch,
  dimMeter,
  dimCentiMeter,
  dimMilliMeter,
  dimensioningOptions,
  decimals,
  Dimensioning,
} from './core/dimensioning.js';
export {
  cmPerFoot,
  pixelsPerFoot,
  cmPerPixel,
  pixelsPerCm,
} from './core/dimensioning.js';

export {
  configDimUnit,
  configWallHeight,
  configWallThickness,
  configSystemUI,
  wallInformation,
  configScale,
  configSnapToGrid,
  configSnapTolerance,
  configGridSpacing,
  config,
  Configuration,
} from './core/configuration.js';
export {
  VIEW_TOP,
  VIEW_FRONT,
  VIEW_RIGHT,
  VIEW_LEFT,
  VIEW_ISOMETRY,
  cornerTolerance,
} from './core/constants.js';
export { WallTypes, sphereRadius } from './core/constants.js';

// Classes from model module
export { HalfEdge } from './model/half.edge.js';
export { Corner } from './model/corner.js';
export { defaultFloorPlanTolerance, Floorplan } from './model/floorplan.js';
export { Model } from './model/model.js';
export { defaultRoomTexture, Room } from './model/room.js';
export { Scene } from './model/scene.js';
export { defaultWallTexture, Wall } from './model/wall.js';

// Classes from floorplanner module
export {
  floorplannerModes,
  gridWidth,
  gridColor,
  deleteColor,
} from './floorplanner/floorplanner.view.js';
export {
  roomColor,
  roomColorHover,
  roomColorSelected,
} from './floorplanner/floorplanner.view.js';
export {
  wallWidth,
  wallWidthHover,
  wallWidthSelected,
  wallColor,
  wallColorHover,
  wallColorSelected,
} from './floorplanner/floorplanner.view.js';
export {
  edgeColor,
  edgeColorHover,
  edgeWidth,
} from './floorplanner/floorplanner.view.js';
export {
  cornerRadius,
  cornerRadiusHover,
  cornerRadiusSelected,
  cornerColor,
  cornerColorHover,
  cornerColorSelected,
} from './floorplanner/floorplanner.view.js';
export { FloorplannerView2D } from './floorplanner/floorplanner.view.js';

export { Floorplanner2D } from './floorplanner/floorplanner.js';
export { CarbonSheet } from './floorplanner/carbonsheet.js';

// Classes from items module
export { item_types, Factory } from './items/factory.js';
export { Item } from './items/item.js';
export { FloorItem } from './items/floor.item.js';
export { WallItem } from './items/wall.item.js';
export { WallFloorItem } from './items/wall.floor.item.js';
export { OnFloorItem } from './items/on.floor.item.js';
export { InWallItem } from './items/in.wall.item.js';
export { InWallFloorItem } from './items/in.wall.floor.item.js';
export { RoofItem } from './items/roof.item.js';

// Classes from three module
export { states, Controller } from './three/controller.js';
export { OrbitControls } from './three/orbit.controls.js';
export { FirstPersonControls } from './three/first.person.controls.js';
export { PointerLockControls } from './three/pointerlockcontrols.js';
export { STATE, Controls } from './three/controls.js';
export { Edge } from './three/edge.js';
export { Floor } from './three/floor.js';
export { Floorplan3D } from './three/floorPlan.js';
export { HUD } from './three/hud.js';
export { Lights } from './three/lights.js';
export { Main } from './three/main.js';
export { Skybox } from './three/skybox.js';

export { OBJExporter } from './exporters/OBJExporter.js';

//
// /* VestaDesigner core application. */
export class BlueprintJS {
  [immerable] = true;
  /*
   * Creates an instance of BlueprintJS. This is the entry point for the application
   *
   * @param {Object} - options The initialization options.
   * @param {string} options.floorplannerElement - Id of the html element to use as canvas. Needs to exist in the html
   * @param {string} options.threeElement - Id of the html element to use as canvas. Needs to exist in the html and should be #idofhtmlelement
   * @param {string} options.threeCanvasElement - Id of the html element to use as threejs-canvas. This is created automatically
   * @param {string} options.textureDir - path to texture directory. No effect
   * @param {boolean} options.widget - If widget mode then disable the controller from interactions
   * @example
   * let blueprint3d = new BP3DJS.BlueprintJS(opts);
   */
  constructor(options) {
    Configuration.setValue(configDimUnit, dimFeetAndInch);

    /*
     * @property {Object} options
     * @type {Object}
     **/
    this.options = options;
    /*
     * @property {Model} model
     * @type {Model}
     **/
    this.model = new Model(options.textureDir);
    /*
     * @property {Main} three
     * @type {Main}
     **/
    this.three = new Main(
      this.model,
      options.threeElement,
      options.threeCanvasElement,
      {},
    );

    if (!options.widget) {
      /*
       * @property {Floorplanner2D} floorplanner
       * @type {Floorplanner2D}
       **/
      this.floorplanner = new Floorplanner2D(
        options.floorplannerElement,
        this.model.floorplan,
      );
    } else {
      this.three.getController().enabled = false;
    }
  }
}
