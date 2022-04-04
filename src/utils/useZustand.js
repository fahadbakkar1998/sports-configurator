import create from 'zustand';

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
}));

export default useZustand;
