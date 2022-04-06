import create from 'zustand';
import * as Blueprint from './blueprint/blueprint';

const useZustand = create((set) => ({
  editMode: 'Floor Plan', // Floor Plan, 3D
  setEditMode: (editMode) =>
    set((state) => ({
      editMode,
    })),

  aWall: null,
  setAWall: (aWall) =>
    set((state) => ({
      aWall,
    })),

  floorPlanMode: Blueprint.floorplannerModes.MOVE,
  setFloorPlanMode: (floorPlanMode) =>
    set((state) => ({
      floorPlanMode,
    })),

  curEvent: '',
  setCurEvent: (curEvent) =>
    set((state) => ({
      curEvent,
    })),

  cur2dItem: null,
  setCur2dItem: (cur2dItem) =>
    set((state) => ({
      cur2dItem,
    })),
}));

export default useZustand;
