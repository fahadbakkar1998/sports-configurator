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
  console.log('bpSupport_loadDesign_data: ', JSON.parse(data));
  blueprintJS.model.loadSerialized(data);
  updateFloorPlan();
};

export const loadDefaultDesign = () => {
  blueprintJS.model.loadSerialized(rectHome);
  updateFloorPlan();
};

export const addItem = (item) => {
  console.log('bpSupport_addItem_item: ', item);
  item.resizable = item.resizeProportionally = true;
  if ([2, 3, 7, 9].indexOf(parseInt(item.type)) != -1 && item.selectedWall) {
    // Wall Items
    var placeAt = item.selectedWall.item.center.clone();
    blueprintJS.model.scene.addItem(
      item.type,
      item.model,
      item,
      null,
      null,
      null,
      false,
      { position: placeAt, edge: item.selectedWall.item },
    );
  } else if (
    [0, 1, 8].indexOf(parseInt(item.type)) != -1 &&
    item.selectedFloor
  ) {
    // Floor Items
    var placeAt = item.selectedFloor.item.center.clone();
    blueprintJS.model.scene.addItem(
      item.type,
      item.model,
      item,
      null,
      null,
      null,
      false,
      { position: placeAt },
    );
  } else {
    blueprintJS.model.scene.addItem(item.type, item.model, item);
  }
};

export const updateFloorPlanMode = (mode) => {
  blueprintJS.floorplanner.setMode(mode);
};

export const updateFloorPlan = () => {
  blueprintJS.model.floorplan.update();
};

export const updateWireFrameMode = (flag) => {
  blueprintJS.three.switchWireFrame(flag);
};

export const updateUnit = (unit) => {
  Blueprint.Configuration.setValue(Blueprint.configDimUnit, unit);
};

export const updateSnapToRect = (flag) => {
  Blueprint.Configuration.setValue('snapToRect', flag);
};

export const updateSameElevation = (flag) => {
  Blueprint.Configuration.setValue('sameElevation', flag);
};

export const updateVisibility = (flag) => {
  Blueprint.Configuration.setValue('visibility', flag);
};

export const updateRoofMode = (flag) => {
  blueprintJS.three.floorplan.showRoof(flag);
};

export const getTotalPrice = () => {
  const prices = blueprintJS.model.scene.items.map((item) => item.getPrice());
  const price = prices.reduce((a, b) => a + b, 0);
  return price;
};
