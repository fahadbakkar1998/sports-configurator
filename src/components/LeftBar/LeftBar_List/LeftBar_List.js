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
import * as Blueprint from '../../../utils/blueprint/blueprint';
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
          {React.Children.toArray(
            item.children.map((item) => recursiveItem(item, depth + 1)),
          )}
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
            className={cn('floor-plan-item')}
            onClick={() => {
              loadDefaultDesign();
            }}
            title="New Layout">
            New Layout
          </div>
          <div
            className={cn('floor-plan-item')}
            onClick={() => {
              saveDesign('design.3d');
            }}
            title="Save Layout">
            Save Layout
          </div>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === Blueprint.floorplannerModes.MOVE,
            })}
            onClick={() => {
              setFloorPlanMode(Blueprint.floorplannerModes.MOVE);
              updateFloorPlanMode(Blueprint.floorplannerModes.MOVE);
            }}
            title="Move Walls">
            Move Walls
          </div>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === Blueprint.floorplannerModes.DRAW,
            })}
            onClick={() => {
              setFloorPlanMode(Blueprint.floorplannerModes.DRAW);
              updateFloorPlanMode(Blueprint.floorplannerModes.DRAW);
            }}
            title="Draw New Walls">
            Draw New Walls
          </div>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === Blueprint.floorplannerModes.DELETE,
            })}
            onClick={() => {
              setFloorPlanMode(Blueprint.floorplannerModes.DELETE);
              updateFloorPlanMode(Blueprint.floorplannerModes.DELETE);
            }}
            title="Delete Walls">
            Delete Walls
          </div>
        </>
      )}
      {editMode === '3D' &&
        React.Children.toArray(items.map((item) => recursiveItem(item, 0)))}
    </div>
  );
};

export default LeftBar_List;
