import React from 'react';
import classnames from 'classnames';
import { isLeafComponent } from './common';
import DragLabel from '../../Common/DragLabel';
import useZustand from '../../../utils/useZustand';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
import MultiRangeSlider from 'multi-range-slider-react';
import { getUFloat } from '../../../utils/common';

const RightBar_Content_CompInfo = ({
  comp,
  depth,
  isOpen,
  openChildren,
  onClick,
  updateComponents,
}) => {
  const { cur3dItemEvent } = useZustand();

  const style = {
    marginLeft: `${depth * 1}vw`,
  };

  const { unit, maxSize } = cur3dItemEvent.item.metadata;

  return (
    <>
      {isLeafComponent(comp) ? (
        <div className={classnames('input-group', { hide: !isOpen })}>
          {Array.isArray(comp.value) ? (
            <>
              <span>{`${comp.name}(${unit}):`}</span>
              {/* <Slider /> */}
              <MultiRangeSlider
                min={0}
                max={maxSize}
                step={parseInt(maxSize / 50)}
                ruler={true}
                label={true}
                preventWheel={false}
                minValue={comp.value[0]}
                maxValue={comp.value[1]}
                onInput={(e) => {
                  comp.value[0] = e.minValue;
                  comp.value[1] = e.maxValue;
                  updateComponents();
                }}
              />
            </>
          ) : (
            <>
              <DragLabel
                name={`${comp.name}(${unit}):`}
                value={comp.value}
                setValue={(val) => {
                  comp.value = getUFloat(val);
                  updateComponents();
                }}
                offset={0.1}></DragLabel>
              <input
                className="input"
                type="text"
                value={comp.value}
                onChange={(e) => {
                  comp.value = getUFloat(e.target.value);
                  updateComponents();
                }}></input>
            </>
          )}
        </div>
      ) : (
        <div
          className={classnames('RightBar_Content_Comp', { show: isOpen })}
          onClick={onClick}>
          <div
            className={classnames('arrow', { open: openChildren })}
            style={style}>
            &gt;
          </div>
          <div className="name">{comp.name}</div>
        </div>
      )}
    </>
  );
};

export default RightBar_Content_CompInfo;
