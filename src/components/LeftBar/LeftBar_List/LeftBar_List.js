import React, { useState, useEffect } from 'react';
import LeftBar_List_Item from './LeftBar_List_Item';
import { items } from '../../../utils/resource';
import {
  saveDesign,
  loadDesign,
  loadDefaultDesign,
  updateFloorPlanMode,
} from '../../../utils/bpSupport';
import useZustand from '../../../utils/useZustand';
import * as Blueprint from '../../../utils/blueprint/blueprint';
import cn from 'classnames';

const recursiveItem = ({ item, depth, isOpen, initialOpenDepth }) => {
  const [openChildren, setOpenChildren] = useState(isOpen);

  useEffect(() => {
    !isOpen && setOpenChildren(isOpen);
  }, [isOpen]);

  return (
    <>
      <LeftBar_List_Item
        item={item}
        depth={depth}
        isOpen={isOpen}
        openChildren={openChildren}
        onClick={() => setOpenChildren(!openChildren)}></LeftBar_List_Item>
      {item.children &&
        React.Children.toArray(
          item.children.map((child) =>
            recursiveItem({
              item: child,
              depth: depth + 1,
              isOpen: openChildren,
              initialOpenDepth,
            }),
          ),
        )}
    </>
  );
};

const LeftBar_List = () => {
  const editMode = useZustand((state) => state.editMode);
  const floorPlanMode = useZustand((state) => state.floorPlanMode);

  return (
    <div className="LeftBar_List">
      {editMode === 'FLOOR PLAN' && (
        <>
          <div
            className={cn('floor-plan-item')}
            onClick={() => {
              loadDefaultDesign();
            }}
            title="New Design">
            New Design
          </div>
          <div
            className={cn('floor-plan-item')}
            onClick={() => {
              saveDesign();
            }}
            title="Save Design">
            Save Design
          </div>
          <label className={cn('floor-plan-item')} htmlFor="upload">
            Load Design
            <input
              id="upload"
              style={{ display: 'none' }}
              type="file"
              onClick={(e) => {
                e.target.value = null;
              }}
              onChange={(e) => {
                const [file] = e.target.files;
                if (file) {
                  const reader = new FileReader();
                  reader.readAsText(file);
                  reader.onload = (e) => {
                    loadDesign(e.target.result);
                    return true;
                  };
                }
              }}
            />
          </label>
          <div
            className={cn('floor-plan-item', {
              active: floorPlanMode === Blueprint.floorplannerModes.MOVE,
            })}
            onClick={() => {
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
              updateFloorPlanMode(Blueprint.floorplannerModes.DELETE);
            }}
            title="Delete Walls">
            Delete Walls
          </div>
        </>
      )}
      {editMode === '3D' &&
        React.Children.toArray(
          items.map((item) =>
            recursiveItem({
              item,
              isOpen: true,
              depth: 0,
              initialOpenDepth: 0,
            }),
          ),
        )}
    </div>
  );
};

export default LeftBar_List;
