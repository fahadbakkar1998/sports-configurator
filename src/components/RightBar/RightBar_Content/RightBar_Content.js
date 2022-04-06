import React, { useEffect } from 'react';
import useZustand from '../../../utils/useZustand';
import { getFloat } from '../../../utils/common';
import * as Blueprint from '../../../utils/blueprint/blueprint';

const RightBar_Content = () => {
  const curEvent = useZustand((state) => state.curEvent);
  const cur2dItem = useZustand((state) => state.cur2dItem);
  const setCur2dItem = useZustand((state) => state.setCur2dItem);
  const dimUnit = Blueprint.Configuration.getStringValue(
    Blueprint.configDimUnit,
  );

  return (
    <div className="RightBar_Content">
      {cur2dItem && curEvent === Blueprint.EVENT_CORNER_2D_CLICKED && (
        <>
          <div className="property-header">Corner</div>
          <div className="input-group">
            <div className="label">X({dimUnit}): </div>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(cur2dItem.item.x)}
              onChange={(e) => {
                const x = getFloat(e.target.value);
                const cloneCur2dItem = { ...cur2dItem };
                cloneCur2dItem.item.x =
                  Blueprint.Dimensioning.cmFromMeasureRaw(x);
                setCur2dItem(cloneCur2dItem);
                return true;
              }}></input>
          </div>
          <div className="input-group">
            <div className="label">Y({dimUnit}): </div>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(cur2dItem.item.y)}
              onChange={(e) => {
                const y = getFloat(e.target.value);
                const cloneCur2dItem = { ...cur2dItem };
                cloneCur2dItem.item.y =
                  Blueprint.Dimensioning.cmFromMeasureRaw(y);
                setCur2dItem(cloneCur2dItem);
                return true;
              }}></input>
          </div>
          <div className="input-group">
            <div className="label">Elevation({dimUnit}): </div>
            <input
              className="input"
              type="text"
              value={Blueprint.Dimensioning.cmToMeasureRaw(
                cur2dItem.item.elevation,
              )}
              onChange={(e) => {
                const elevation = getFloat(e.target.value);
                const cloneCur2dItem = { ...cur2dItem };
                cloneCur2dItem.item.elevation =
                  Blueprint.Dimensioning.cmFromMeasureRaw(elevation);
                setCur2dItem(cloneCur2dItem);
                return true;
              }}></input>
          </div>
        </>
      )}
    </div>
  );
};

export default RightBar_Content;
