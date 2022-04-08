import { rectHome } from './resource';
import * as Blueprint from './blueprint/blueprint';

export const saveDesign = () => {
  let data = blueprintJS.model.exportDataObj();
  let a = window.document.createElement('a');
  let blob = new Blob([JSON.stringify(data)], { type: 'text' });
  a.href = window.URL.createObjectURL(blob);
  a.download =
    Object.values(data.floorplan.rooms)
      .map((e) => e.name)
      .join(',') + '.3d';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const loadDesign = (data) => {
  console.log('design data: ', JSON.parse(data));
  blueprintJS.model.loadSerialized(data);
  updateFloorPlan();
};

export const loadDefaultDesign = () => {
  blueprintJS.model.loadSerialized(rectHome);
  updateFloorPlan();
};

export const addItem = (item) => {
  let metadata = {
    itemName: item.name,
    resizable: true,
    modelUrl: item.model,
    itemType: item.type,
    format: item.format,
  };
  if (
    [2, 3, 7, 9].indexOf(parseInt(item.type)) != -1 &&
    item.aWall &&
    item.aWall.currentWall
  ) {
    var placeAt = item.aWall.currentWall.center.clone();
    blueprintJS.model.scene.addItem(
      item.type,
      item.model,
      metadata,
      null,
      null,
      null,
      false,
      { position: placeAt, edge: item.aWall.currentWall },
    );
  } else if (item.aWall && item.aWall.currentFloor) {
    var placeAt = item.aWall.currentFloor.center.clone();
    blueprintJS.model.scene.addItem(
      item.type,
      item.model,
      metadata,
      null,
      null,
      null,
      false,
      { position: placeAt },
    );
  } else {
    blueprintJS.model.scene.addItem(item.type, item.model, metadata);
  }
};

export const updateFloorPlanMode = (mode) => {
  blueprintJS.floorplanner.setMode(mode);
};

export const updateFloorPlan = () => {
  blueprintJS.model.floorplan.update();
};

export const updateWireFrame = (flag) => {
  blueprintJS.three.switchWireFrame(flag);
};

export const updateUnit = (unit) => {
  Blueprint.Configuration.setValue(Blueprint.configDimUnit, unit);
};
