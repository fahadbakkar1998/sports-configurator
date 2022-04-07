import create from 'zustand';
import * as Blueprint from './blueprint/blueprint';

const useZustand = create((set) => ({
  editMode: '3D', // Floor Plan, 3D
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

  cur2dItemEvent: null,
  setCur2dItemEvent: (cur2dItemEvent) =>
    set((state) => ({
      cur2dItemEvent,
    })),

  cur3dItemEvent: null,
  setCur3dItemEvent: (cur3dItemEvent) =>
    set((state) => ({
      cur3dItemEvent,
    })),
}));

export default useZustand;
