import React, { useEffect, useState } from 'react';
import useZustand from '../../../utils/useZustand';
import { updateUnit } from '../../../utils/bpSupport';
import { getFloat, getUFloat } from '../../../utils/common';
import { wallTextures } from '../../../utils/resource';
import * as Blueprint from '../../../utils/blueprint/blueprint';
import DragLabel from '../../Common/DragLabel';

let isDot = false;

const RightBar_Content_Inspector = () => {
  const selectedWall = useZustand((state) => state.selectedWall);
  const setSelectedWall = useZustand((state) => state.setSelectedWall);

  const selectedFloor = useZustand((state) => state.selectedFloor);
  const setSelectedFloor = useZustand((state) => state.setSelectedFloor);
  // console.log(selectedFloor && selectedFloor.item.curTextureIndex);

  const cur2dItemEvent = useZustand((state) => state.cur2dItemEvent);
  const setCur2dItemEvent = useZustand((state) => state.setCur2dItemEvent);

  const cur3dItemEvent = useZustand((state) => state.cur3dItemEvent);
  const setCur3dItemEvent = useZustand((state) => state.setCur3dItemEvent);

  const curUnit = useZustand((state) => state.curUnit);
  const setCurUnit = useZustand((state) => state.setCurUnit);

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
    console.log('cloneCur2dItemEvent: ', cloneCur2dItemEvent);
    setCur2dItemEvent(cloneCur2dItemEvent);
  };

  const updateCur2dItemValue = (obj) => {
    const cloneCur2dItemEvent = { ...cur2dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      cloneCur2dItemEvent.item[key] = value;
    });
    setCur2dItemEvent(cloneCur2dItemEvent);
  };

  /* 3D */
  const updateCur3dItemSize = (obj) => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    const itemSize = {};
    Object.entries(obj).forEach(([key, value]) => {
      isDot =
        value &&
        value.toString().lastIndexOf('.') === value.toString().length - 1;
      const cm = Blueprint.Dimensioning.cmFromMeasureRaw(value);
      itemSize[key] = cm;
    });
    cloneCur3dItemEvent.item.resize(itemSize);
    setCur3dItemEvent(cloneCur3dItemEvent);
  };

  const updateCur3dItemValue = (obj) => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      cloneCur3dItemEvent.item[key] = value;
    });
    setCur3dItemEvent(cloneCur3dItemEvent);
  };

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

  const cur3dItemWidth =
    (cur3dItemEvent &&
      cur3dItemEvent.item &&
      cur3dItemEvent.item.getWidth &&
      Blueprint.Dimensioning.cmToMeasureRaw(cur3dItemEvent.item.getWidth())) ||
    0;

  return (
    <div className="RightBar_Content_Inspector">
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

      {selectedWall && (
        <>
          <div className="property-header">Wall</div>

          <div className="input-group">
            <div>Material:</div>

            <select
              className="input"
              value={selectedWall.item.curTextureIndex}
              onChange={(e) => {
                const index = e.target.value;
                const cloneSelectedWall = selectedWall;
                cloneSelectedWall.item.curTexture = wallTextures[index];
                cloneSelectedWall.item.curTextureIndex = index;
                cloneSelectedWall.item.showCurTexture();
                setSelectedWall(cloneSelectedWall);
              }}>
              {wallTextures.map((texture, index) => (
                <option value={index} key={`wall_${index}`}>
                  {texture.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      {/* {selectedFloor && (
        <>
          <div className="property-header">Floor</div>

          <div className="input-group">
            <div>Material:</div>

            <select
              className="input"
              value={selectedFloor.item.curTextureIndex}
              onChange={(e) => {
                const j = e.target.value;
                console.log(j);
                const cloneSelectedFloor = selectedFloor;
                const texture = wallTextures[j];
                cloneSelectedFloor.item.curTextureIndex = j;
                cloneSelectedFloor.item.setTexture(
                  texture.url,
                  texture.stretch,
                  texture.scale,
                );
                setSelectedFloor(cloneSelectedFloor);
              }}>
              {wallTextures.map((texture, j) => (
                <option value={j} key={`floor_${j}`}>
                  {texture.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )} */}

      {cur2dItemEvent && cur2dItemEvent.type === 'CORNER' && (
        <>
          <div className="property-header">Corner</div>

          {/* Corner position x */}
          <div className="input-group">
            <DragLabel
              name={`X(${dimUnit}):`}
              value={cur2dItemX}
              setValue={(x) => updateCur2dItemNum({ x: getFloat(x) })}
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={cur2dItemX + inputSuffix}
              onChange={(e) => {
                updateCur2dItemNum({ x: getFloat(e.target.value) });
              }}></input>
          </div>

          {/* Corner position y */}
          <div className="input-group">
            <DragLabel
              name={`Y(${dimUnit}):`}
              value={cur2dItemY}
              setValue={(y) => updateCur2dItemNum({ y: getFloat(y) })}
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={cur2dItemY + inputSuffix}
              onChange={(e) => {
                updateCur2dItemNum({ y: getFloat(e.target.value) });
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

      {cur3dItemEvent && (
        <>
          <div className="property-header">Dimensions</div>

          {/* Dimension width */}
          <div className="input-group">
            <DragLabel
              name={`Width(${dimUnit}):`}
              value={cur3dItemWidth}
              setValue={(width) =>
                updateCur3dItemSize({ width: getUFloat(width) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={cur3dItemWidth + inputSuffix}
              onChange={(e) => {
                updateCur3dItemSize({ width: getUFloat(e.target.value) });
              }}></input>
          </div>

          {/* Dimension height */}
          <div className="input-group">
            <DragLabel
              name={`Height(${dimUnit}):`}
              value={`${Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getHeight(),
              )}`}
              setValue={(height) =>
                updateCur3dItemSize({ height: getUFloat(height) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={`${Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getHeight(),
              )}`}
              onChange={(e) => {
                updateCur3dItemSize({ height: getUFloat(e.target.value) });
              }}></input>
          </div>

          {/* Dimension length */}
          <div className="input-group">
            <DragLabel
              name={`Height(${dimUnit}):`}
              value={`${Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getDepth(),
              )}`}
              setValue={(depth) =>
                updateCur3dItemSize({ depth: getUFloat(depth) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={`${Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getDepth(),
              )}`}
              onChange={(e) => {
                updateCur3dItemSize({ depth: getUFloat(e.target.value) });
              }}></input>
          </div>

          {/* Dimension resizable */}
          <div className="input-group">
            <div>Resizable:</div>
            <input
              className="input"
              type="checkbox"
              checked={cur3dItemEvent.item.resizable || false}
              onChange={(e) => {
                updateCur3dItemValue({ resizable: e.target.checked });
              }}></input>
          </div>

          {/* Dimension proportionally */}
          <div className="input-group">
            <div>Proportionally:</div>
            <input
              className="input"
              type="checkbox"
              checked={cur3dItemEvent.item.resizeProportionally || false}
              onChange={(e) => {
                updateCur3dItemValue({
                  resizeProportionally: e.target.checked,
                });
              }}></input>
          </div>
        </>
      )}
    </div>
  );
};

export default RightBar_Content_Inspector;
