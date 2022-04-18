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
import DragLabel from '../../Common/DragLabel';
import { getFloat, getUFloat, rgbToHex } from '../../../utils/common';
import { updateUnit } from '../../../utils/bpSupport';
import cn from 'classnames';

let isDot = false;

const recursiveItem = ({ item, depth, isOpen, initialOpenDepth }) => {
  const [openChildren, setOpenChildren] = useState(
    isOpen && depth < initialOpenDepth,
  );

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
  const curUnit = useZustand((state) => state.curUnit);
  const setCurUnit = useZustand((state) => state.setCurUnit);
  const cur2dItemEvent = useZustand((state) => state.cur2dItemEvent);
  const setCur2dItemEvent = useZustand((state) => state.setCur2dItemEvent);

  const dimUnit = Blueprint.Configuration.getStringValue(
    Blueprint.configDimUnit,
  );

  const inputSuffix = isDot ? '.' : '';

  useEffect(() => {
    isDot = false;
  }, [isDot]);

  /* 2D */
  const updateCur2dItemNum = (obj) => {
    const cloneCur2dItemEvent = { ...cur2dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      isDot =
        value &&
        value.toString().lastIndexOf('.') === value.toString().length - 1;
      let cm = Blueprint.Dimensioning.cmFromMeasureRaw(value);
      cloneCur2dItemEvent.item[key] = cm;
    });
    setCur2dItemEvent(cloneCur2dItemEvent);
  };

  const updateCur2dItemValue = (obj) => {
    const cloneCur2dItemEvent = { ...cur2dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      cloneCur2dItemEvent.item[key] = value;
    });
    setCur2dItemEvent(cloneCur2dItemEvent);
  };

  const moveCorner = (obj) => {
    const cloneCur2dItemEvent = { ...cur2dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      isDot =
        value &&
        value.toString().lastIndexOf('.') === value.toString().length - 1;
      obj[key] = Blueprint.Dimensioning.cmFromMeasureRaw(value);
    });
    const newX = obj.x !== undefined ? obj.x : cloneCur2dItemEvent.item._x;
    const newY = obj.y !== undefined ? obj.y : cloneCur2dItemEvent.item._y;
    cloneCur2dItemEvent.item.move(newX, newY);
    setCur2dItemEvent(cloneCur2dItemEvent);
  };

  /* 2D */
  const cur2dItemX =
    (cur2dItemEvent &&
      cur2dItemEvent.item &&
      cur2dItemEvent.item.x &&
      Blueprint.Dimensioning.cmToMeasureRaw(cur2dItemEvent.item.x)) ||
    0;

  const cur2dItemY =
    (cur2dItemEvent &&
      cur2dItemEvent.item &&
      cur2dItemEvent.item.y &&
      Blueprint.Dimensioning.cmToMeasureRaw(cur2dItemEvent.item.y)) ||
    0;

  const cur2dItemElevation =
    (cur2dItemEvent &&
      cur2dItemEvent.item &&
      cur2dItemEvent.item.elevation &&
      Blueprint.Dimensioning.cmToMeasureRaw(cur2dItemEvent.item.elevation)) ||
    0;

  const cur2dItemWallSize =
    (cur2dItemEvent &&
      cur2dItemEvent.item &&
      cur2dItemEvent.item.wallSize &&
      Blueprint.Dimensioning.cmToMeasureRaw(cur2dItemEvent.item.wallSize)) ||
    0;

  return (
    <div className="LeftBar_List">
      <div className={cn('content', { active: editMode === 'FLOOR PLAN' })}>
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

        <div className="property-header">Setting</div>

        {/* Select unit */}
        <div className="input-group">
          <div>Unit:</div>

          <select
            className="input"
            value={curUnit}
            onChange={(e) => {
              const unit = e.target.value;
              updateUnit(unit);
              setCurUnit(unit);
            }}>
            <option value={Blueprint.dimMeter}>{Blueprint.dimMeter}</option>
            <option value={Blueprint.dimCentiMeter}>
              {Blueprint.dimCentiMeter}
            </option>
            <option value={Blueprint.dimMilliMeter}>
              {Blueprint.dimMilliMeter}
            </option>
            <option value={Blueprint.dimInch}>{Blueprint.dimInch}</option>
            <option value={Blueprint.dimFeetAndInch}>
              {Blueprint.dimFeetAndInch}
            </option>
          </select>
        </div>

        {cur2dItemEvent && cur2dItemEvent.type === 'CORNER' && (
          <>
            <div className="property-header">Corner</div>

            {/* Corner position x */}
            <div className="input-group">
              <DragLabel
                name={`X(${dimUnit}):`}
                value={cur2dItemX}
                setValue={(x) => moveCorner({ x: getFloat(x) })}
                offset={0.01}></DragLabel>
              <input
                className="input"
                type="text"
                value={cur2dItemX + inputSuffix}
                onChange={(e) => {
                  moveCorner({ x: getFloat(e.target.value) });
                }}></input>
            </div>

            {/* Corner position y */}
            <div className="input-group">
              <DragLabel
                name={`Y(${dimUnit}):`}
                value={cur2dItemY}
                setValue={(y) => moveCorner({ y: getFloat(y) })}
                offset={0.01}></DragLabel>
              <input
                className="input"
                type="text"
                value={cur2dItemY + inputSuffix}
                onChange={(e) => {
                  console.log(getFloat(e.target.value));
                  moveCorner({ y: getFloat(e.target.value) });
                }}></input>
            </div>

            {/* Corner elevation */}
            <div className="input-group">
              <DragLabel
                name={`Elevation(${dimUnit}):`}
                value={cur2dItemElevation}
                setValue={(elevation) =>
                  updateCur2dItemNum({ elevation: getUFloat(elevation) })
                }
                offset={0.01}></DragLabel>
              <input
                className="input"
                type="text"
                value={cur2dItemElevation + inputSuffix}
                onChange={(e) => {
                  updateCur2dItemNum({ elevation: getUFloat(e.target.value) });
                }}></input>
            </div>
          </>
        )}

        {cur2dItemEvent && cur2dItemEvent.type === 'WALL' && (
          <>
            <div className="property-header">Wall</div>

            {/* Wall length */}
            <div className="input-group">
              <DragLabel
                name={`Length(${dimUnit}):`}
                value={cur2dItemWallSize}
                setValue={(wallSize) =>
                  updateCur2dItemNum({ wallSize: getUFloat(wallSize) })
                }
                offset={0.01}></DragLabel>
              <input
                className="input"
                type="text"
                value={cur2dItemWallSize + inputSuffix}
                onChange={(e) => {
                  updateCur2dItemNum({ wallSize: getUFloat(e.target.value) });
                }}></input>
            </div>
          </>
        )}

        {cur2dItemEvent && cur2dItemEvent.type === 'ROOM' && (
          <>
            <div className="property-header">Room</div>

            {/* Room name */}
            <div className="input-group">
              <div>Name:</div>
              <input
                className="input"
                type="text"
                value={cur2dItemEvent.item.name}
                onChange={(e) => {
                  updateCur2dItemValue({ name: e.target.value });
                }}></input>
            </div>
          </>
        )}
      </div>
      <div className={cn('content', { active: editMode === '3D' })}>
        <div className="header">Categories</div>
        {React.Children.toArray(
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
    </div>
  );
};

export default LeftBar_List;
