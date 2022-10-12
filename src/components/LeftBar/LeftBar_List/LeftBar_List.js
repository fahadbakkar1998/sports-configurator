import React, { useState, useEffect, useRef } from 'react';
import LeftBar_List_Item from './LeftBar_List_Item';
import { items } from '../../../utils/resource';
import {
  saveDesign,
  loadDesign,
  loadDefaultDesign,
  updateFloorPlanMode,
} from '../../../utils/bp.support';
import useZustand from '../../../utils/use.zustand';
import * as Blueprint from '../../../utils/blueprint/blueprint';
import DragLabel from '../../Common/DragLabel';
import { getFloat, getUFloat, rgbToHex } from '../../../common';
import { updateUnit } from '../../../utils/bp.support';
import cn from 'classnames';
import { decimalPlaces } from '../../../constants';

let isDot = false;

const recursiveItem = ({
  item,
  depth,
  isOpen,
  initialOpenDepth,
  hierarchy,
}) => {
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
        hierarchy={hierarchy}
        onClick={() => setOpenChildren(!openChildren)}></LeftBar_List_Item>
      {item.children &&
        React.Children.toArray(
          item.children.map((child, i) =>
            recursiveItem({
              item: child,
              depth: depth + 1,
              isOpen: openChildren,
              initialOpenDepth,
              hierarchy: [...hierarchy, i],
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

  const refs = useRef([]);

  const dimUnit = Blueprint.Configuration.getStringValue(
    Blueprint.configDimUnit,
  );

  let refLabelIndex = 0,
    refInputIndex = 0;

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
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(cur2dItemEvent.item.x).toFixed(
          decimalPlaces,
        ),
      )) ||
    0;

  const cur2dItemY =
    (cur2dItemEvent &&
      cur2dItemEvent.item &&
      cur2dItemEvent.item.y &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(cur2dItemEvent.item.y).toFixed(
          decimalPlaces,
        ),
      )) ||
    0;

  const cur2dItemElevation =
    (cur2dItemEvent &&
      cur2dItemEvent.item &&
      cur2dItemEvent.item.elevation &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(
          cur2dItemEvent.item.elevation,
        ).toFixed(decimalPlaces),
      )) ||
    0;

  const cur2dItemWallSize =
    (cur2dItemEvent &&
      cur2dItemEvent.item &&
      cur2dItemEvent.item.wallSize &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(
          cur2dItemEvent.item.wallSize,
        ).toFixed(decimalPlaces),
      )) ||
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

        {/* <div className="property-header">Setting</div> */}

        {/* Select unit */}
        {/* <div className="input-group">
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
        </div> */}

        {cur2dItemEvent && cur2dItemEvent.type === 'CORNER' && (
          <>
            <div className="property-header">Corner</div>

            {/* Corner position x */}
            <div className="input-group">
              <DragLabel
                name={`X(${dimUnit}):`}
                value={cur2dItemX}
                refIndex={refLabelIndex++}
                setValue={(value, refIndex) => {
                  const validValue = getFloat(value);
                  refs.current[refIndex].value = validValue;
                  moveCorner({ x: validValue });
                }}
                offset={0.1}></DragLabel>
              <input
                ref={(element) => (refs.current[refInputIndex++] = element)}
                className="input"
                type="text"
                defaultValue={cur2dItemX + inputSuffix}
                onBlur={(e) => {
                  const validValue = getFloat(e.target.value);
                  e.target.value = validValue;
                  moveCorner({ x: validValue });
                }}></input>
            </div>

            {/* Corner position y */}
            <div className="input-group">
              <DragLabel
                name={`Y(${dimUnit}):`}
                value={cur2dItemY}
                refIndex={refLabelIndex++}
                setValue={(value, refIndex) => {
                  const validValue = getFloat(value);
                  refs.current[refIndex].value = validValue;
                  moveCorner({ y: validValue });
                }}
                offset={0.1}></DragLabel>
              <input
                ref={(element) => (refs.current[refInputIndex++] = element)}
                className="input"
                type="text"
                defaultValue={cur2dItemY + inputSuffix}
                onBlur={(e) => {
                  const validValue = getFloat(e.target.value);
                  e.target.value = validValue;
                  moveCorner({ y: getFloat(e.target.value) });
                }}></input>
            </div>

            {/* Corner elevation */}
            <div className="input-group">
              <DragLabel
                name={`Elevation(${dimUnit}):`}
                value={cur2dItemElevation}
                refIndex={refLabelIndex++}
                setValue={(value, refIndex) => {
                  const validValue = getUFloat(value);
                  refs.current[refIndex].value = validValue;
                  updateCur2dItemNum({ elevation: validValue });
                }}
                offset={0.1}></DragLabel>
              <input
                ref={(element) => (refs.current[refInputIndex++] = element)}
                className="input"
                type="text"
                defaultValue={cur2dItemElevation + inputSuffix}
                onBlur={(e) => {
                  const validValue = getUFloat(e.target.value);
                  e.target.value = validValue;
                  updateCur2dItemNum({ elevation: validValue });
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
                refIndex={refLabelIndex++}
                setValue={(value, refIndex) => {
                  const validValue = getUFloat(value);
                  refs.current[refIndex].value = validValue;
                  updateCur2dItemNum({ wallSize: validValue });
                }}
                offset={0.1}></DragLabel>
              <input
                ref={(element) => (refs.current[refInputIndex++] = element)}
                className="input"
                type="text"
                defaultValue={cur2dItemWallSize + inputSuffix}
                onBlur={(e) => {
                  const validValue = getUFloat(e.target.value);
                  e.target.value = validValue;
                  updateCur2dItemNum({ wallSize: validValue });
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
          items.map((item, i) =>
            recursiveItem({
              item,
              isOpen: true,
              depth: 0,
              initialOpenDepth: 0,
              hierarchy: [i],
            }),
          ),
        )}
      </div>
    </div>
  );
};

export default LeftBar_List;
