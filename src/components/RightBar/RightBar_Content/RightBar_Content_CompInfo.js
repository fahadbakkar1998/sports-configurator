import React from 'react';
import classnames from 'classnames';
import { HexColorPicker } from 'react-colorful';
import DragLabel from '../../Common/DragLabel';
import useZustand from '../../../utils/use.zustand';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
import MultiRangeSlider from 'multi-range-slider-react';
import { getUFloat, isLeafComponent } from '../../../common';
import cn from 'classnames';

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

  const { unit, max_size } = cur3dItemEvent.item.metadata;

  return (
    <>
      {isLeafComponent(comp) ? (
        <>
          <div className={classnames('input-group', { hide: !isOpen })}>
            {comp.type === 'single' && (
              <>
                <DragLabel
                  name={`${comp.name}(${unit}):`}
                  value={comp.value}
                  setValue={(val) => {
                    if (comp.immutability) return;
                    comp.value = getUFloat(val);
                    updateComponents();
                  }}
                  offset={comp.offset || 0.1}></DragLabel>
                <input
                  className={classnames('input', {
                    immutability: comp.immutability,
                  })}
                  type="text"
                  value={comp.value}
                  onChange={(e) => {
                    if (comp.immutability) return;
                    comp.value = getUFloat(e.target.value);
                    updateComponents();
                  }}></input>
              </>
            )}
            {comp.type === 'interval' && (
              <>
                <span>{`${comp.name}(${unit}):`}</span>
                {/* <Slider /> */}
                <MultiRangeSlider
                  min={0}
                  max={max_size}
                  step={parseInt(max_size / 50)}
                  ruler={true}
                  label={true}
                  preventWheel={false}
                  minValue={comp.value[0]}
                  maxValue={comp.value[1]}
                  onInput={(e) => {
                    if (comp.immutability) return;
                    comp.value[0] = e.minValue;
                    comp.value[1] = e.maxValue;
                    updateComponents();
                  }}
                />
              </>
            )}
            {comp.type === 'select' &&
              comp.options &&
              Array.isArray(comp.options) &&
              comp.options.length && (
                <>
                  <span>{`${comp.name}:`}</span>
                  <select
                    className="input pointer"
                    value={comp.value}
                    onChange={(e) => {
                      comp.value = e.target.value;
                      updateComponents();
                    }}>
                    {React.Children.toArray(
                      comp.options.map((option) => (
                        <option value={option.value}>{option.name}</option>
                      )),
                    )}
                  </select>
                </>
              )}
            {comp.type === 'material' &&
              comp.options &&
              Array.isArray(comp.options) &&
              comp.options.length && (
                <>
                  <div
                    className={classnames('RightBar_Content_Comp', {
                      show: isOpen,
                    })}
                    onClick={onClick}>
                    <div
                      className={classnames('arrow', { open: openChildren })}
                      style={style}>
                      &gt;
                    </div>
                    <div className="name">{comp.name}</div>
                  </div>
                  {React.Children.toArray(
                    comp.options.map((option) => (
                      <div
                        className={classnames('gallery', {
                          active: comp.value === option.value,
                        })}>
                        <img
                          className="image"
                          src={option.value}
                          onClick={() => {
                            comp.value = option.value;
                            updateComponents();
                          }}></img>
                        <div className="name" title={option.name}>
                          {option.name}
                        </div>
                      </div>
                    )),
                  )}
                </>
              )}
          </div>
          {comp.type === 'color' && (
            <>
              <div className="input-group">
                <div>{comp.name}:</div>
                <div
                  className="input pointer"
                  onClick={() => {
                    comp.selected = !comp.selected;
                    updateComponents();
                  }}
                  style={{
                    backgroundColor: comp.value,
                  }}></div>
              </div>
              <div className="input-group">
                <div></div>
                <HexColorPicker
                  className={cn('input', {
                    active: comp.selected,
                  })}
                  color={comp.value}
                  onChange={(color) => {
                    comp.value = color;
                    updateComponents();
                    // blueprintJS.three.render(true);
                  }}></HexColorPicker>
              </div>
            </>
          )}
        </>
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
