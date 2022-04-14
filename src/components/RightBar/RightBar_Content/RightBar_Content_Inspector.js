import React, { useEffect } from 'react';
import useZustand from '../../../utils/useZustand';
import { updateUnit } from '../../../utils/bpSupport';
import { getFloat, getUFloat, rgbToHex } from '../../../utils/common';
import { wallTextures } from '../../../utils/resource';
import * as Blueprint from '../../../utils/blueprint/blueprint';
import DragLabel from '../../Common/DragLabel';
import { HexColorPicker } from 'react-colorful';
import cn from 'classnames';
import { Color } from 'three';

let isDot = false;

const RightBar_Content_Inspector = () => {
  const selectedWall = useZustand((state) => state.selectedWall);
  const setSelectedWall = useZustand((state) => state.setSelectedWall);

  const selectedFloor = useZustand((state) => state.selectedFloor);
  const setSelectedFloor = useZustand((state) => state.setSelectedFloor);

  const selectedRoof = useZustand((state) => state.selectedRoof);
  const setSelectedRoof = useZustand((state) => state.setSelectedRoof);

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

  /* Roof */
  const updateCurRoofNum = (obj) => {
    const cloneSelectedRoof = { ...selectedRoof };
    Object.entries(obj).forEach(([key, value]) => {
      isDot =
        value &&
        value.toString().lastIndexOf('.') === value.toString().length - 1;
      const cm = Blueprint.Dimensioning.cmFromMeasureRaw(value);
      cloneSelectedRoof.item[key] = cm;
    });
    setSelectedRoof(cloneSelectedRoof);
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

  const curRoofMiddleHeight =
    (selectedRoof &&
      selectedRoof.item &&
      selectedRoof.item.middleHeight &&
      Blueprint.Dimensioning.cmToMeasureRaw(selectedRoof.item.middleHeight)) ||
    0;

  if (cur3dItemEvent && cur3dItemEvent.item && cur3dItemEvent.item.material) {
    if (!cur3dItemEvent.item.material.length) {
      cur3dItemEvent.item.material = [cur3dItemEvent.item.material];
    }
  }

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

      {selectedRoof && (
        <>
          <div className="property-header">Roof</div>

          <div className="input-group">
            <div>Type:</div>
            <select
              className="input"
              value={selectedRoof.type}
              onChange={(e) => {
                const type = e.target.value;
                const cloneSelectedRoof = { ...selectedRoof };
                cloneSelectedRoof.item.setType = type;
                setSelectedRoof(cloneSelectedRoof);
              }}>
              <option value="GABLED">Gabled</option>
              <option value="SINGLE">Single Slop</option>
            </select>
          </div>

          <div className="input-group">
            <DragLabel
              name={`Height(${dimUnit}):`}
              value={curRoofMiddleHeight}
              setValue={(val) => {
                updateCurRoofNum({ setMiddleHeight: getUFloat(val) });
              }}
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={curRoofMiddleHeight + inputSuffix}
              onChange={(e) => {
                updateCurRoofNum({
                  setMiddleHeight: getUFloat(e.target.value),
                });
              }}></input>
          </div>
        </>
      )}

      {selectedWall && (
        <>
          <div className="property-header">Wall</div>

          <div className="input-group">
            <div>Material:</div>

            <select
              className="input"
              value={wallTextures.findIndex((e) => {
                return e.url === selectedWall.item.curTexture.url;
              })}
              onChange={(e) => {
                const index = e.target.value;
                const cloneSelectedWall = { ...selectedWall };
                cloneSelectedWall.item.curTexture = wallTextures[index];
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

      {selectedFloor && (
        <>
          <div className="property-header">Floor</div>

          <div className="input-group">
            <div>Material:</div>

            <select
              className="input"
              value={wallTextures.findIndex((e) => {
                return e.url === selectedFloor.item.getTexture().url;
              })}
              onChange={(e) => {
                const j = e.target.value;
                const cloneSelectedFloor = { ...selectedFloor };
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
      )}

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
          <div className="item-info-container">
            <img
              className="item-info-logo"
              src={cur3dItemEvent.item.metadata.image}></img>
            <div className="item-info">
              {cur3dItemEvent.item.metadata.itemName}
            </div>
            <div className="item-info">Cost: $123</div>
          </div>

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

          <div className="property-header">Color</div>

          {React.Children.toArray(
            cur3dItemEvent.item.material &&
              cur3dItemEvent.item.material.map((mat, index) => (
                <>
                  <div className="input-group">
                    <div>{mat.name}:</div>
                    <div
                      className="input pointer"
                      onClick={() => {
                        const clone = { ...cur3dItemEvent };
                        clone.item.material[index].selected = !mat.selected;
                        setCur3dItemEvent(clone);
                      }}
                      style={{
                        backgroundColor: rgbToHex(mat.color),
                      }}></div>
                  </div>
                  <div className="input-group">
                    <div></div>
                    <HexColorPicker
                      className={cn('input', {
                        active: mat.selected,
                      })}
                      color={rgbToHex(mat.color)}
                      onChange={(color) => {
                        const clone = { ...cur3dItemEvent };
                        const hexColor = `0x${color.substring(1)}`;
                        clone.item.material[index].color.setHex(hexColor);
                        clone.item.material[index].emissive.setHex(hexColor);
                        clone.item.material[index].needsUpdate = true;
                        blueprintJS.three.render(true);
                        setCur3dItemEvent(clone);
                      }}></HexColorPicker>
                  </div>
                </>
              )),
          )}
        </>
      )}
    </div>
  );
};

export default RightBar_Content_Inspector;
