import React from 'react';
import LeftBar_List_Item from './LeftBar_List_Item';
import LeftBar_List_Leaf from './LeftBar_List_Leaf';
import { items } from '../../../utils/resource';
import {
  saveDesign,
  loadDefaultDesign,
  updateFloorPlanMode,
} from '../../../utils/bpSupport';
import useZustand from '../../../utils/useZustand';
import cn from 'classnames';

const LeftBar_List = () => {
  const editMode = useZustand((state) => state.editMode);
  const floorPlanMode = useZustand((state) => state.floorPlanMode);
  const setFloorPlanMode = useZustand((state) => state.setFloorPlanMode);

  const recursiveItem = (item, depth) => {
    if (item.children) {
      return (
        <>
          <LeftBar_List_Item name={item.name} depth={depth}></LeftBar_List_Item>
          {item.children.map((item) => recursiveItem(item, depth + 1))}
        </>
      );
    } else {
      return <LeftBar_List_Leaf item={item}></LeftBar_List_Leaf>;
    }
  };

  return (
    <div className="LeftBar_List">
      {editMode === 'Floor Plan' && (
        <>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === 'New',
            })}
            onClick={() => {
              setFloorPlanMode('New');
              loadDefaultDesign();
            }}
            title="New Layout">
            New Layout
          </div>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === 'Save',
            })}
            onClick={() => {
              setFloorPlanMode('Save');
              saveDesign('design.3d');
            }}
            title="Save Layout">
            Save Layout
          </div>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === 'Move',
            })}
            onClick={() => {
              setFloorPlanMode('Move');
              updateFloorPlanMode('Move');
            }}
            title="Move Walls">
            Move Walls
          </div>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === 'Draw',
            })}
            onClick={() => {
              setFloorPlanMode('Draw');
              updateFloorPlanMode('Draw');
            }}
            title="Draw New Walls">
            Draw New Walls
          </div>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === 'Delete',
            })}
            onClick={() => {
              setFloorPlanMode('Delete');
              updateFloorPlanMode('Delete');
            }}
            title="Delete Walls">
            Delete Walls
          </div>
        </>
      )}
      {editMode === '3D' && items.map((item) => recursiveItem(item, 0))}
    </div>
  );
};

export default LeftBar_List;
