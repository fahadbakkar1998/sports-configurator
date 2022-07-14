import {
  EventDispatcher,
  JSONLoader,
  Color,
  Geometry,
  Scene as ThreeScene,
  LoadingManager,
  BoxGeometry,
  MeshStandardMaterial,
  DoubleSide,
  Vector3,
} from 'three';
import DRACOLoader from '../loaders/three-dracoloader';
import GLTFLoader from '../loaders/GLTFLoader';
import OBJLoader from '@calvinscofield/three-objloader';
import FBXLoader from '../loaders/FBXLoader';
import { Utils } from '../core/utils.js';
import { Factory } from '../items/factory.js';
import {
  EVENT_ITEM_LOADING,
  EVENT_ITEM_LOADED,
  EVENT_ITEM_REMOVED,
} from '../core/events.js';
import { Dimensioning } from '../core/dimensioning';

/*
 * The Scene is a manager of Items and also links to a ThreeJS scene.
 */
export class Scene extends EventDispatcher {
  /*
   * Constructs a scene.
   * @param model The associated model.
   * @param textureDir The directory from which to load the textures.
   */
  constructor(model, textureDir) {
    super();
    this.model = model;
    this.textureDir = textureDir;

    this.scene = new ThreeScene();
    this.scene.background = new Color(0xffffff);
    // this.scene.fog = new Fog(0xFAFAFA, 0.001, 6000);
    this.items = [];
    this.needsUpdate = false;
    // init item loader
    this.loader = new JSONLoader();
    this.loader.setCrossOrigin('');

    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath('assets/models/draco/gltf/');
    this.gltfLoadingManager = new LoadingManager();
    this.gltfLoader = new GLTFLoader(this.gltfLoadingManager);
    this.gltfLoader.setCrossOrigin('');
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
    this.objLoader = new OBJLoader();
    this.fbxLoadingManager = new LoadingManager();
    this.fbxLoader = new FBXLoader(this.fbxLoadingManager);

    this.itemLoadingCallbacks = null;
    this.itemLoadedCallbacks = null;
    this.itemRemovedCallbacks = null;

    // let grid = new GridHelper(4000, 200);
    // this.add(grid);
  }

  add(mesh) {
    this.scene.add(mesh);
  }

  /* Removes a non-item, basically a mesh, from the scene.
   * @param mesh The mesh to be removed.
   */
  remove(mesh) {
    this.scene.remove(mesh);
    Utils.removeValue(this.items, mesh);
  }

  /* Gets the scene.
   * @returns The scene.
   */
  getScene() {
    return this.scene;
  }

  /* Gets the items.
   * @returns The items.
   */
  getItems() {
    return this.items;
  }

  /* Gets the count of items.
   * @returns The count.
   */
  itemCount() {
    return this.items.length;
  }

  /* Removes all items. */
  clearItems() {
    let scope = this;
    this.items.forEach((item) => {
      scope.removeItem(item, true);
    });
    this.items = [];
  }

  /*
   * Removes an item.
   * @param item The item to be removed.
   * @param don'tRemove If not set, also remove the item from the items list.
   */
  removeItem(item, keepInList) {
    keepInList = keepInList || false;
    // use this for item meshes
    this.dispatchEvent({ type: EVENT_ITEM_REMOVED, item: item });
    //this.itemRemovedCallbacks.fire(item);
    item.removed();
    this.scene.remove(item);
    if (!keepInList) {
      Utils.removeValue(this.items, item);
    }
  }

  switchWireFrame(flag) {
    this.items.forEach((item) => {
      item.switchWireFrame(flag);
    });
  }

  /*
   * Creates an item and adds it to the scene.
   * @param type The type of the item given by an enumerator.
   * @param modelPath The name of the file to load.
   * @param position The initial position.
   * @param rotation The initial rotation around the y axis.
   * @param scale The initial scaling.
   * @param fixed True if fixed.
   * @param newItemDefinitions - Object with position and 'edge' attribute if it is a wall item
   */
  addItem(itemInfo) {
    let { type, modelPath, newItemDefinitions } = itemInfo;
    if (!type) type = 1;

    let scope = this;

    function addToMaterials(materials, newMaterial) {
      const index = materials.findIndex((el) => el.name === newMaterial.name);
      if (index > -1) return index;
      else {
        materials.push(newMaterial);
        return materials.length - 1;
      }
    }

    let loaderCallback = function (geometry, material) {
      let item = new (Factory.getClass(type))({
        ...itemInfo,
        metadata: itemInfo,
        model: scope.model,
        geometry,
        material,
      });
      scope.items.push(item);
      scope.add(item);
      item.initObject();
      scope.dispatchEvent({ type: EVENT_ITEM_LOADED, item: item });
      if (newItemDefinitions) {
        item.moveToPosition(
          newItemDefinitions.position,
          newItemDefinitions.edge,
        );
        item.placeInRoom();
      }
    };

    let gltfCallback = function (gltfModel) {
      let newMaterials = [];
      let newGeometry = new Geometry();
      gltfModel.scene.traverse(function (child) {
        if (child.type == 'Mesh') {
          let materialIndices = [];
          if (child.material.length) {
            for (let k = 0; k < child.material.length; k++) {
              materialIndices.push(
                addToMaterials(newMaterials, child.material[k]),
              );
            }
          } else {
            materialIndices.push(addToMaterials(newMaterials, child.material));
          }
          if (child.geometry.isBufferGeometry) {
            let tGeometry = new Geometry().fromBufferGeometry(child.geometry);
            tGeometry.faces.forEach((face) => {
              face.materialIndex = materialIndices[face.materialIndex];
            });
            child.updateMatrix();
            newGeometry.merge(tGeometry, child.matrix);
          } else {
            child.geometry.faces.forEach((face) => {
              face.materialIndex = materialIndices[face.materialIndex];
            });
            child.updateMatrix();
            newGeometry.mergeMesh(child);
          }
        }
      });
      loaderCallback(newGeometry, newMaterials);
    };

    let objCallback = function (object) {
      let materials = [];
      let newGeometry = new Geometry();
      object.traverse(function (child) {
        if (child.type == 'Mesh') {
          if (child.material.length) {
            materials = materials.concat(child.material);
          } else {
            materials.push(child.material);
          }
          if (child.geometry.isBufferGeometry) {
            let tGeometry = new Geometry().fromBufferGeometry(child.geometry);
            child.updateMatrix();
            newGeometry.merge(tGeometry, child.matrix);
          } else {
            child.updateMatrix();
            newGeometry.mergeMesh(child);
          }
        }
      });
      loaderCallback(newGeometry, materials);
    };

    let fbxCallback = function (fbxModel) {
      let newMaterials = [];
      let newGeometry = new Geometry();
      fbxModel.traverse(function (child) {
        if (child.type == 'Mesh') {
          let materialIndices = [];
          if (child.material.length) {
            for (let k = 0; k < child.material.length; k++) {
              materialIndices.push(
                addToMaterials(newMaterials, child.material[k]),
              );
            }
          } else {
            materialIndices.push(addToMaterials(newMaterials, child.material));
          }
          if (child.geometry.isBufferGeometry) {
            let tGeometry = new Geometry().fromBufferGeometry(child.geometry);
            tGeometry.faces.forEach((face) => {
              face.materialIndex = materialIndices[face.materialIndex];
            });
            child.updateMatrix();
            newGeometry.merge(tGeometry, child.matrix);
          } else {
            child.geometry.faces.forEach((face) => {
              face.materialIndex = materialIndices[face.materialIndex];
            });
            child.updateMatrix();
            newGeometry.mergeMesh(child);
          }
        }
      });
      loaderCallback(newGeometry, newMaterials);
    };

    this.dispatchEvent({ type: EVENT_ITEM_LOADING });

    if (!itemInfo.format) {
      this.loader.load(modelPath, loaderCallback, () => {}, console.error);
    } else if (itemInfo.format == 'gltf') {
      this.gltfLoader.load(modelPath, gltfCallback, () => {}, console.error);
    } else if (itemInfo.format == 'obj') {
      this.objLoader.load(modelPath, objCallback, () => {}, console.error);
    } else if (itemInfo.format == 'fbx') {
      this.fbxLoader.load(modelPath, fbxCallback, () => {}, console.error);
    }
  }

  async addConfigurator(itemInfo) {
    if (!itemInfo.type || !itemInfo.components || !itemInfo.defaultSize) return;
    if (!itemInfo.unit) itemInfo.unit = 'm';
    const width = Dimensioning.cmFromMeasureRaw(
      itemInfo.defaultSize.width,
      itemInfo.unit,
    );
    const height = Dimensioning.cmFromMeasureRaw(
      itemInfo.defaultSize.height,
      itemInfo.unit,
    );
    const length = Dimensioning.cmFromMeasureRaw(
      itemInfo.defaultSize.length,
      itemInfo.unit,
    );
    const configurator = new (Factory.getClass(itemInfo.type))({
      metadata: itemInfo,
      model: this.model,
      geometry: new BoxGeometry(width, height, length),
      material: new MeshStandardMaterial({
        color: 0xff0000,
        side: DoubleSide,
        visible: false,
        // wireframe: true,
      }),
    });
    configurator.initObject();
    this.items.push(configurator);
    this.add(configurator);
    configurator.position.copy(
      new Vector3(2000, configurator.position.y, configurator.position.z),
    ); // temp
    this.dispatchEvent({ type: EVENT_ITEM_LOADED, item: configurator });
  }
}
