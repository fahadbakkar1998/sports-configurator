import { rectHome } from './resource';
import * as Blueprint from './blueprint/blueprint';

export const saveDesign = (name) => {
  let data = blueprintJS.model.exportSerialized();
  let a = window.document.createElement('a');
  let blob = new Blob([data], { type: 'text' });
  a.href = window.URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const loadDefaultDesign = () => {
  blueprintJS.model.loadSerialized(rectHome);
};

export const updateFloorPlan = () => {
  blueprintJS.model.floorplan.update();
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
    aWall &&
    aWall.currentWall
  ) {
    var placeAt = aWall.currentWall.center.clone();
    blueprintJS.model.scene.addItem(
      item.type,
      item.model,
      metadata,
      null,
      null,
      null,
      false,
      { position: placeAt, edge: aWall.currentWall },
    );
  } else if (aWall && aWall.currentFloor) {
    var placeAt = aWall.currentFloor.center.clone();
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
  switch (mode) {
    case 'Move':
      blueprintJS.floorplanner.setMode(Blueprint.floorplannerModes.MOVE);
      break;
    case 'Draw':
      blueprintJS.floorplanner.setMode(Blueprint.floorplannerModes.DRAW);
      break;
    case 'Delete':
      blueprintJS.floorplanner.setMode(Blueprint.floorplannerModes.DELETE);
      break;
  }
};
