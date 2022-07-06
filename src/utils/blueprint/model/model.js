import {
  EVENT_LOADED,
  EVENT_LOADING,
  EVENT_GLTF_READY,
} from '../core/events.js';
import { EventDispatcher, Vector3, Mesh } from 'three';
import { Floorplan } from './floorplan.js';
import { Scene } from './scene.js';

import { OBJExporter } from '../exporters/OBJExporter.js';

import GLTFExporter from 'three-gltf-exporter';

/*
 * A Model is an abstract concept the has the data structuring a floorplan. It connects a {@link Floorplan} and a {@link Scene}
 */
export class Model extends EventDispatcher {
  /* Constructs a new model.
   * @param textureDir The directory containing the textures.
   */
  constructor(textureDir) {
    super();
    this.floorplan = new Floorplan();
    this.scene = new Scene(this, textureDir);
    this.roomLoadingCallbacks = null;
    this.roomLoadedCallbacks = null;
    this.roomSavedCallbacks = null;
    this.roomDeletedCallbacks = null;
  }

  switchWireFrame(flag) {
    this.scene.switchWireFrame(flag);
  }

  loadSerialized(json) {
    // TODO: better documentation on serialization format.
    // TODO: a much better serialization format.
    this.dispatchEvent({ type: EVENT_LOADING, item: this });
    // this.roomLoadingCallbacks.fire();

    let data = JSON.parse(json);
    this.newRoom(data.floorplan, data.items);

    this.dispatchEvent({ type: EVENT_LOADED, item: this });
    // this.roomLoadedCallbacks.fire();
  }

  exportMeshAsObj() {
    let exporter = new OBJExporter();
    return exporter.parse(this.scene.getScene());
  }

  exportForBlender() {
    let scope = this;
    let gltfExporter = new GLTFExporter();
    let meshes = [];
    this.scene.getScene().traverse(function (child) {
      if (child instanceof Mesh) {
        if (child.material) {
          if (child.material.length || child.material.visible) {
            let op = child.material.transparent
              ? child.material.opacity
              : undefined;
            meshes.push(child);
            if (op) {
              child.material.opacity = op;
            }
          }
        }
      }
    });

    gltfExporter.parse(meshes, function (result) {
      let output = JSON.stringify(result, null, 2);
      scope.dispatchEvent({ type: EVENT_GLTF_READY, item: this, gltf: output });
    });
  }

  exportDataObj() {
    let items_arr = [];
    let objects = this.scene.getItems();
    for (let i = 0; i < objects.length; i++) {
      let obj = objects[i];
      // items_arr[i] = {name: obj.metadata.name,type: obj.metadata.type,model: obj.metadata.model,xPos: obj.position.x,yPos: obj.position.y,zPos: obj.position.z,rotation: obj.rotation.y,scale_x: obj.scale.x,scale_y: obj.scale.y,scale_z: obj.scale.z,fixed: obj.fixed};
      items_arr[i] = obj.getMetaData();
    }

    let room = { floorplan: this.floorplan.saveFloorplan(), items: items_arr };
    return room;
  }

  newRoom(floorplan, items) {
    this.scene.clearItems();
    this.floorplan.loadFloorplan(floorplan);
    items.forEach((item) => {
      let position = new Vector3(item.xPos, item.yPos, item.zPos);
      if (!item.materialColors) item.materialColors = [];
      let scale = new Vector3(item.scale_x, item.scale_y, item.scale_z);
      if (item.format === 'configurator') {
        this.scene.addConfigurator({ ...item, position, scale });
      } else {
        this.scene.addItem({ ...item, position, scale });
      }
    });
  }
}
