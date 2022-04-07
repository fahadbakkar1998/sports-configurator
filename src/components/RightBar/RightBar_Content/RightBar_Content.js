import React from 'react';
import useZustand from '../../../utils/useZustand';
import { getFloat, getUFloat } from '../../../utils/common';
import * as Blueprint from '../../../utils/blueprint/blueprint';
import DragLabel from '../../Common/DragLabel';

const RightBar_Content = () => {
  const cur2dItemEvent = useZustand((state) => state.cur2dItemEvent);
  const setCur2dItemEvent = useZustand((state) => state.setCur2dItemEvent);
  const cur3dItemEvent = useZustand((state) => state.cur3dItemEvent);

  const dimUnit = Blueprint.Configuration.getStringValue(
    Blueprint.configDimUnit,
  );

  const updateCur2dItemNum = (obj) => {
    const cloneCur2dItemEvent = { ...cur2dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      const cm = Blueprint.Dimensioning.cmFromMeasureRaw(value);
      cloneCur2dItemEvent.item[key] = cm;
    });
    setCur2dItemEvent(cloneCur2dItemEvent);
  };

  const updateCur2dItemStr = (obj) => {
    const cloneCur2dItemEvent = { ...cur2dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      cloneCur2dItemEvent.item[key] = value;
    });
    setCur2dItemEvent(cloneCur2dItemEvent);
  };

  const updateCur3dItemSize = (obj) => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    const itemSize = {};
    Object.entries(obj).forEach(([key, value]) => {
      const cm = Blueprint.Dimensioning.cmFromMeasureRaw(value);
      itemSize[key] = cm;
    });
    cloneCur3dItemEvent.item.resize(itemSize);
    setCur2dItemEvent(cloneCur3dItemEvent);
  };

  return (
    <div className="RightBar_Content">
      {cur2dItemEvent && cur2dItemEvent.type === 'CORNER' && (
        <>
          <div className="property-header">Corner</div>

          {/* Corner position x */}
          <div className="input-group">
            <DragLabel
              name={`X(${dimUnit}):`}
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.x,
              )}
              setValue={(x) => updateCur2dItemNum({ x: getFloat(x) })}
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.x,
              )}
              onChange={(e) => {
                const x = getFloat(e.target.value);
                updateCur2dItemNum({ x });
              }}></input>
          </div>

          {/* Corner position y */}
          <div className="input-group">
            <DragLabel
              name={`Y(${dimUnit}):`}
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.y,
              )}
              setValue={(y) => updateCur2dItemNum({ y: getFloat(y) })}
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.y,
              )}
              onChange={(e) => {
                const y = getFloat(e.target.value);
                updateCur2dItemNum({ y });
              }}></input>
          </div>

          {/* Corner elevation */}
          <div className="input-group">
            <DragLabel
              name={`Elevation(${dimUnit}):`}
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.elevation,
              )}
              setValue={(elevation) =>
                updateCur2dItemNum({ elevation: getUFloat(elevation) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.elevation,
              )}
              onChange={(e) => {
                const elevation = getUFloat(e.target.value);
                updateCur2dItemNum({ elevation });
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
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.wallSize,
              )}
              setValue={(wallSize) =>
                updateCur2dItemNum({ wallSize: getUFloat(wallSize) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItemEvent.item.wallSize,
              )}
              onChange={(e) => {
                const wallSize = getUFloat(e.target.value);
                updateCur2dItemNum({ wallSize });
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
                const name = e.target.value;
                updateCur2dItemStr({ name });
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
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getWidth(),
              )}
              setValue={(width) =>
                updateCur3dItemSize({ width: getUFloat(width) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getWidth(),
              )}
              onChange={(e) => {
                const width = getUFloat(e.target.value);
                updateCur3dItemSize({ width });
              }}></input>
          </div>

          {/* Dimension height */}
          <div className="input-group">
            <DragLabel
              name={`Height(${dimUnit}):`}
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getHeight(),
              )}
              setValue={(height) =>
                updateCur3dItemSize({ height: getUFloat(height) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getHeight(),
              )}
              onChange={(e) => {
                const height = getUFloat(e.target.value);
                updateCur3dItemSize({ height });
              }}></input>
          </div>

          {/* Dimension length */}
          <div className="input-group">
            <DragLabel
              name={`Height(${dimUnit}):`}
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getDepth(),
              )}
              setValue={(depth) =>
                updateCur3dItemSize({ depth: getUFloat(depth) })
              }
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur3dItemEvent.item.getDepth(),
              )}
              onChange={(e) => {
                const depth = getUFloat(e.target.value);
                updateCur3dItemSize({ depth });
              }}></input>
          </div>
        </>
      )}
    </div>
  );
};

export default RightBar_Content;
