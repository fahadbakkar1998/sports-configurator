import create from 'zustand';
import * as Blueprint from './blueprint/blueprint';

const useZustand = create((set) => ({
  editMode: '3D', // FLOOR PLAN, 3D
  setEditMode: (editMode) =>
    set((state) => ({
      editMode,
    })),

  selectedWall: null,
  setSelectedWall: (selectedWall) =>
    set((state) => ({
      selectedWall,
    })),

  selectedFloor: null,
  setSelectedFloor: (selectedFloor) =>
    set((state) => ({
      selectedFloor,
    })),

  selectedRoof: null,
  setSelectedRoof: (selectedRoof) =>
    set((state) => ({
      selectedRoof,
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

  rightBarMode: 'INSPECTOR', // INSPECTOR, TOTAL
  setRightBarMode: (rightBarMode) =>
    set((state) => ({
      rightBarMode,
    })),

  isWireFrame: false,
  setIsWireFrame: (isWireFrame) =>
    set((state) => ({
      isWireFrame,
    })),

  curUnit: Blueprint.dimMeter,
  setCurUnit: (curUnit) =>
    set((state) => ({
      curUnit,
    })),

  showRoof: false,
  setShowRoof: (showRoof) =>
    set((state) => ({
      showRoof,
    })),

  snapToRect: Blueprint.config.snapToRect,
  setSnapToRect: (snapToRect) =>
    set((state) => ({
      snapToRect,
    })),

  sameElevation: Blueprint.config.sameElevation,
  setSameElevation: (sameElevation) =>
    set((state) => ({
      sameElevation,
    })),

  visibility: Blueprint.config.visibility,
  setVisibility: (visibility) =>
    set((state) => ({
      visibility,
    })),
}));

export default useZustand;
