import $ from 'jquery';
import {
  EventDispatcher,
  Vector2,
  Vector3,
  WebGLRenderer,
  ImageUtils,
  PerspectiveCamera,
  OrthographicCamera,
} from 'three';
import { Plane } from 'three';
import { PCFSoftShadowMap } from 'three';
import { Clock } from 'three';
// import {FirstPersonControls} from './first-person-controls.js';
import { PointerLockControls } from './pointerlockcontrols.js';

import {
  EVENT_UPDATED,
  EVENT_WALL_CLICKED,
  EVENT_NOTHING_CLICKED,
  EVENT_FLOOR_CLICKED,
  EVENT_ITEM_SELECTED,
  EVENT_ITEM_UNSELECTED,
  EVENT_GLTF_READY,
} from '../core/events.js';
import {
  EVENT_CAMERA_ACTIVE_STATUS,
  EVENT_FPS_EXIT,
  EVENT_CAMERA_VIEW_CHANGE,
} from '../core/events.js';
import {
  VIEW_TOP,
  VIEW_FRONT,
  VIEW_RIGHT,
  VIEW_LEFT,
  VIEW_ISOMETRY,
  sphereRadius,
} from '../core/constants.js';

import { OrbitControls } from './orbit.controls.js';

// import {Controls} from './controls.js';
import { Controller } from './controller.js';
import { HUD } from './hud.js';
import { Floorplan3D } from './floorPlan.js';
import { Lights } from './lights.js';
import { Skybox } from './skybox.js';

export class Main extends EventDispatcher {
  constructor(model, element, canvasElement, opts) {
    super();
    let options = {
      resize: true,
      pushHref: false,
      spin: true,
      spinSpeed: 0.00002,
      clickPan: true,
      canMoveFixedItems: false,
    };
    for (let opt in options) {
      if (options.hasOwnProperty(opt) && opts.hasOwnProperty(opt)) {
        options[opt] = opts[opt];
      }
    }

    this.pauseRender = false;
    this.model = model;
    this.scene = model.scene;
    this.element = $('#' + element);
    this.canvasElement = canvasElement;
    this.options = options;

    this.domElement = null;
    this.orthocamera = null;
    this.perspectivecamera = null;
    this.camera = null;
    this.savedcameraposition = null;
    this.fpsCamera = null;

    this.cameraNear = 10;
    this.cameraFar = sphereRadius * 2;

    this.controls = null;
    this.fpsControls = null;
    this.fpsclock = new Clock(true);
    this.firstpersonmode = false;

    this.renderer = null;
    this.controller = null;

    this.needsUpdate = false;
    this.lastRender = Date.now();

    this.mouseOver = false;
    this.hasClicked = false;

    this.hud = null;

    this.heightMargin = null;
    this.widthMargin = null;
    this.elementHeight = null;
    this.elementWidth = null;

    this.itemSelectedCallbacks = $.Callbacks(); // item
    this.itemUnselectedCallbacks = $.Callbacks();

    this.wallClicked = $.Callbacks(); // wall
    this.floorClicked = $.Callbacks(); // floor
    this.nothingClicked = $.Callbacks();

    this.floorplan = null;

    let scope = this;
    this.updatedevent = () => {
      scope.centerCamera();
    };
    this.gltfreadyevent = (o) => {
      scope.gltfReady(o);
    };

    this.clippingPlaneActive = new Plane(new Vector3(0, 0, 1), 0.0);
    this.clippingPlaneActive2 = new Plane(new Vector3(0, 0, -1), 0.0);
    this.globalClippingPlane = [
      this.clippingPlaneActive,
      this.clippingPlaneActive2,
    ];
    this.clippingEmpty = Object.freeze([]);
    this.clippingEnabled = false;
    this.keyboard = new KeyboardState();

    this.init();
  }

  getARenderer() {
    // scope.renderer = new WebGLRenderer({antialias: true, preserveDrawingBuffer:
    // true, alpha:true}); // preserveDrawingBuffer:true - required to support
    // .toDataURL()
    let renderer = new WebGLRenderer({ antialias: true, alpha: true });

    // scope.renderer.autoClear = false;
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setClearColor(0xffffff, 1);
    renderer.clippingPlanes = this.clippingEmpty;
    renderer.localClippingEnabled = false;
    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.sortObjects = false;

    return renderer;
  }

  init() {
    let scope = this;
    ImageUtils.crossOrigin = '';

    let orthoScale = 100;
    let orthoWidth = scope.element.innerWidth();
    let orthoHeight = scope.element.innerHeight();

    scope.domElement = scope.element.get(0);

    scope.fpsCamera = new PerspectiveCamera(60, 1, 1, 10000);
    scope.perspectivecamera = new PerspectiveCamera(
      45,
      10,
      scope.cameraNear,
      scope.cameraFar,
    );
    scope.orthocamera = new OrthographicCamera(
      orthoWidth / -orthoScale,
      orthoWidth / orthoScale,
      orthoHeight / orthoScale,
      orthoHeight / -orthoScale,
      scope.cameraNear,
      scope.cameraFar,
    );

    scope.camera = scope.perspectivecamera;
    // scope.camera = scope.orthocamera;

    scope.renderer = scope.getARenderer();
    scope.domElement.appendChild(scope.renderer.domElement);

    scope.skybox = new Skybox(scope.scene, scope.renderer);

    scope.controls = new OrbitControls(scope.camera, scope.domElement);
    scope.controls.autoRotate = this.options['spin'];
    scope.controls.enableDamping = true;
    scope.controls.dampingFactor = 0.5;
    scope.controls.maxPolarAngle = Math.PI * 0.5;
    scope.controls.maxDistance = sphereRadius * 0.8;
    scope.controls.minZoom = 0.9;
    scope.controls.screenSpacePanning = true;

    scope.fpsControls = new PointerLockControls(scope.fpsCamera);
    scope.fpsControls.characterHeight = 160;

    this.scene.add(scope.fpsControls.getObject());
    this.fpsControls.getObject().position.set(0, 200, 0);

    this.fpsControls.addEventListener('unlock', function () {
      scope.switchFPSMode(false);
      scope.dispatchEvent({ type: EVENT_FPS_EXIT });
    });

    scope.hud = new HUD(scope, scope.scene);
    scope.controller = new Controller(
      scope,
      scope.model,
      scope.camera,
      scope.element,
      scope.controls,
      scope.hud,
    );

    // handle window resizing
    scope.updateWindowSize();

    if (scope.options.resize) {
      $(window).resize(() => {
        scope.updateWindowSize();
      });
    }
    // setup camera nicely
    scope.centerCamera();

    scope.model.floorplan.addEventListener(EVENT_UPDATED, this.updatedevent);
    scope.model.addEventListener(EVENT_GLTF_READY, this.gltfreadyevent);

    scope.lights = new Lights(scope.scene, scope.model.floorplan);
    scope.floorplan = new Floorplan3D(
      scope.scene,
      scope.model.floorplan,
      scope.controls,
      this,
    );

    function animate() {
      scope.renderer.setAnimationLoop(function () {
        scope.keyboard.update();
        if (scope.keyboard.down('delete')) {
          scope.controller.selectedObject &&
            scope.controller.selectedObject.remove();
        }
        scope.render();
      });
    }

    scope.switchFPSMode(false);
    animate();

    scope.element
      .mouseenter(function () {
        scope.mouseOver = true;
      })
      .mouseleave(function () {
        scope.mouseOver = false;
      })
      .click(function () {
        scope.hasClicked = true;
      });
  }

  exportForBlender() {
    this.skybox.setEnabled(false);
    this.controller.showGroundPlane(false);
    this.model.exportForBlender();
  }

  gltfReady(o) {
    this.dispatchEvent({ type: EVENT_GLTF_READY, item: this, gltf: o.gltf });
    this.skybox.setEnabled(true);
    this.controller.showGroundPlane(true);
  }

  itemIsSelected(item) {
    this.dispatchEvent({ type: EVENT_ITEM_SELECTED, item: item });
  }

  itemIsUnselected() {
    this.dispatchEvent({ type: EVENT_ITEM_UNSELECTED });
  }

  wallIsClicked(wall) {
    wall.room.showWallsTexture();
    wall.showSelTexture();
    this.dispatchEvent({ type: EVENT_WALL_CLICKED, item: wall, wall: wall });
  }

  floorIsClicked(item) {
    this.dispatchEvent({ type: EVENT_FLOOR_CLICKED, item: item });
  }

  nothingIsClicked() {
    this.floorplan.floorplan.rooms.forEach((room) => {
      room.showWallsTexture();
    });
    this.dispatchEvent({ type: EVENT_NOTHING_CLICKED });
  }

  spin() {
    let scope = this;
    scope.controls.autoRotate =
      scope.options.spin && !scope.mouseOver && !scope.hasClicked;
  }

  dataUrl() {
    let dataUrl = this.renderer.domElement.toDataURL('image/png');
    return dataUrl;
  }

  stopSpin() {
    this.hasClicked = true;
    this.controls.autoRotate = false;
  }

  options() {
    return this.options;
  }

  getModel() {
    return this.model;
  }

  getScene() {
    return this.scene;
  }

  getController() {
    return this.controller;
  }

  getCamera() {
    return this.camera;
  }

  /*
   * This method name conflicts with a variable so changing it to a different
   * name needsUpdate() { this.needsUpdate = true; }
   */

  ensureNeedsUpdate() {
    this.needsUpdate = true;
  }

  rotatePressed() {
    this.controller.rotatePressed();
  }

  rotateReleased() {
    this.controller.rotateReleased();
  }

  setCursorStyle(cursorStyle) {
    this.domElement.style.cursor = cursorStyle;
  }

  updateWindowSize() {
    let scope = this;

    scope.heightMargin = 0;
    scope.widthMargin = 0;
    scope.elementWidth = scope.element.innerWidth();
    scope.elementHeight = scope.element.innerHeight();

    scope.orthocamera.left = -scope.element.innerWidth() / 1.0;
    scope.orthocamera.right = scope.element.innerWidth() / 1.0;
    scope.orthocamera.top = scope.element.innerHeight() / 1.0;
    scope.orthocamera.bottom = -scope.element.innerHeight() / 1.0;
    scope.orthocamera.updateProjectionMatrix();

    scope.perspectivecamera.aspect = scope.elementWidth / scope.elementHeight;
    scope.perspectivecamera.updateProjectionMatrix();

    scope.fpsCamera.aspect = scope.elementWidth / scope.elementHeight;
    scope.fpsCamera.updateProjectionMatrix();

    scope.renderer.setSize(scope.elementWidth, scope.elementHeight);
    scope.needsUpdate = true;
  }

  centerCamera() {
    let scope = this;
    let yOffset = 150.0;
    let pan = scope.model.floorplan.getCenter();
    pan.y = yOffset;
    scope.controls.target = pan;
    let distance = scope.model.floorplan.getSize().z * 1.5;
    let offset = pan.clone().add(new Vector3(0, distance, distance));
    // scope.controls.setOffset(offset);
    scope.camera.position.copy(offset);
    scope.controls.update();
  }

  // projects the object's center point into x,y screen coords
  // x,y are relative to top left corner of viewer
  projectVector(vec3, ignoreMargin) {
    let scope = this;
    ignoreMargin = ignoreMargin || false;
    let widthHalf = scope.elementWidth / 2;
    let heightHalf = scope.elementHeight / 2;
    let vector = new Vector3();
    vector.copy(vec3);
    // vector.project(scope.camera);

    let vec2 = new Vector2();
    vec2.x = vector.x * widthHalf + widthHalf;
    vec2.y = -(vector.y * heightHalf) + heightHalf;
    if (!ignoreMargin) {
      vec2.x += scope.widthMargin;
      vec2.y += scope.heightMargin;
    }
    return vec2;
  }

  sceneGraph(obj) {
    console.group(' <%o> ' + obj.name, obj);
    obj.children.forEach(this.sceneGraph);
    console.groupEnd();
  }

  switchWireFrame(flag) {
    this.model.switchWireFrame(flag);
    // this.floorplan.switchWireFrame(flag);
    this.render(true);
  }

  pauseTheRendering(flag) {
    this.pauseRender = flag;
  }

  switchView(viewpoint) {
    let center = this.model.floorplan.getCenter();
    let size = this.model.floorplan.getSize();
    let distance = this.controls.object.position.distanceTo(
      this.controls.target,
    );
    this.controls.target.copy(center);

    switch (viewpoint) {
      case VIEW_TOP:
        center.y = 1000;
        this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_TOP });
        break;
      case VIEW_FRONT:
        center.z = center.z - size.z * 0.5 - distance;
        this.dispatchEvent({
          type: EVENT_CAMERA_VIEW_CHANGE,
          view: VIEW_FRONT,
        });
        break;
      case VIEW_RIGHT:
        center.x = center.x + size.x * 0.5 + distance;
        this.dispatchEvent({
          type: EVENT_CAMERA_VIEW_CHANGE,
          view: VIEW_RIGHT,
        });
        break;
      case VIEW_LEFT:
        center.x = center.x - size.x * 0.5 - distance;
        this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_LEFT });
        break;
      case VIEW_ISOMETRY:
      default:
        center.x += distance;
        center.y += distance;
        center.z += distance;
        this.dispatchEvent({
          type: EVENT_CAMERA_VIEW_CHANGE,
          view: VIEW_ISOMETRY,
        });
    }
    this.camera.position.copy(center);
    this.controls.dispatchEvent({ type: EVENT_CAMERA_ACTIVE_STATUS });
    this.controls.needsUpdate = true;
    this.controls.update();
    this.render(true);
  }

  lockView(locked) {
    this.controls.enableRotate = locked;
    this.render(true);
  }

  // Send in a value between -1 to 1
  changeClippingPlanes(clipRatio, clipRatio2) {
    let size = this.model.floorplan.getSize();
    size.z = size.z + size.z * 0.25;
    size.z = size.z * 0.5;
    this.clippingPlaneActive.constant =
      this.model.floorplan.getSize().z * clipRatio;
    this.clippingPlaneActive2.constant =
      this.model.floorplan.getSize().z * clipRatio2;

    if (!this.clippingEnabled) {
      this.clippingEnabled = true;
      this.renderer.clippingPlanes = this.globalClippingPlane;
    }
    this.controls.dispatchEvent({ type: EVENT_CAMERA_ACTIVE_STATUS });
    this.controls.needsUpdate = true;
    this.controls.update();
    this.render(true);
  }

  resetClipping() {
    this.clippingEnabled = false;
    this.renderer.clippingPlanes = this.clippingEmpty;
    this.controls.needsUpdate = true;
    this.controls.update();
    this.render(true);
  }

  switchOrthographicMode(flag) {
    if (flag) {
      this.camera = this.orthocamera;
      this.camera.position.copy(this.perspectivecamera.position.clone());
      this.controls.object = this.camera;
      this.controller.changeCamera(this.camera);
      this.controls.needsUpdate = true;
      this.controls.update();
      this.render(true);
      return;
    }

    this.camera = this.perspectivecamera;
    this.camera.position.copy(this.orthocamera.position.clone());
    this.controls.object = this.camera;
    this.controller.changeCamera(this.camera);
    this.controls.needsUpdate = true;
    this.controls.update();
    this.render(true);
  }

  switchFPSMode(flag) {
    this.firstpersonmode = flag;
    this.fpsControls.enabled = flag;
    this.controls.enabled = !flag;
    this.controller.enabled = !flag;
    this.controls.dispatchEvent({ type: EVENT_CAMERA_ACTIVE_STATUS });

    if (flag) {
      this.skybox.toggleEnvironment(true);
      this.fpsControls.lock();
    } else {
      this.skybox.toggleEnvironment(false);
      this.fpsControls.unlock();
    }

    this.model.switchWireFrame(false);
    this.floorplan.switchWireFrame(false);
    this.render(true);
  }

  shouldRender() {
    let scope = this;
    // Do we need to draw a new frame
    if (
      scope.controls.needsUpdate ||
      scope.controller.needsUpdate ||
      scope.needsUpdate ||
      scope.model.scene.needsUpdate
    ) {
      scope.controls.needsUpdate = false;
      scope.controller.needsUpdate = false;
      scope.needsUpdate = false;
      scope.model.scene.needsUpdate = false;
      return true;
    } else {
      return false;
    }
  }

  rendervr() {}

  render(forced) {
    let scope = this;
    forced = forced ? forced : false;
    if (this.pauseRender && !forced) {
      return;
    }

    scope.spin();
    if (scope.firstpersonmode) {
      scope.fpsControls.update(scope.fpsclock.getDelta());
      scope.renderer.render(scope.scene.getScene(), scope.fpsCamera);
    } else {
      if (this.shouldRender() || forced) {
        scope.renderer.render(scope.scene.getScene(), scope.camera);
      }
    }
    scope.lastRender = Date.now();
  }
}
