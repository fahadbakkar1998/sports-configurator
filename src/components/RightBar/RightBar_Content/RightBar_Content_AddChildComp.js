import React, { useRef } from 'react';
import classnames from 'classnames';
import DragLabel from '../../Common/DragLabel';
import MultiRangeSlider from 'multi-range-slider-react';
import { getUFloat } from '../../../common';
import useZustand from '../../../utils/use.zustand';

const RightBar_Content_AddChildComp = ({ comp, updateComponents, depth }) => {
  const { cur3dItemEvent } = useZustand();
  const nameRef = useRef();
  const refs = useRef([]);

  let refLabelIndex = 0,
    refInputIndex = 0;

  const { unit, max_size } = cur3dItemEvent.item.metadata;
  const style = {
    marginLeft: `${depth * 1}vw`,
  };

  return (
    <>
      <div
        className="icon-add"
        style={style}
        onClick={() => {
          comp.isAddition = !comp.isAddition;
          updateComponents();
        }}>
        {comp.isAddition ? '-' : '+'} Add Component
      </div>
      <div style={{ display: comp.isAddition ? 'block' : 'none' }}>
        <div className="input-group">
          <span>Name:</span>
          <input
            ref={nameRef}
            className={classnames('input')}
            type="text"></input>
        </div>
        {React.Children.toArray(
          Object.keys(comp.addition).map((fieldKey) => (
            <div className="input-group">
              {comp.addition[fieldKey].type === 'single' && (
                <>
                  <DragLabel
                    name={`${comp.addition[fieldKey].name}(${unit}):`}
                    value={comp.addition[fieldKey].value}
                    refIndex={refLabelIndex++}
                    setValue={(value, refIndex) => {
                      const validValue = getUFloat(value);
                      refs.current[refIndex].value = comp.addition[
                        fieldKey
                      ].value = validValue;
                      updateComponents();
                    }}
                    offset={0.1}></DragLabel>
                  <input
                    ref={(element) => (refs.current[refInputIndex++] = element)}
                    className={classnames('input')}
                    type="text"
                    defaultValue={comp.addition[fieldKey].value}
                    onBlur={(e) => {
                      const validValue = getFloat(e.target.value);
                      e.target.value = comp.addition[fieldKey].value =
                        validValue;
                      updateComponents();
                    }}></input>
                </>
              )}
              {comp.addition[fieldKey].type === 'interval' && (
                // <>
                //   <span>{`${comp.addition[fieldKey].name}(${unit}):`}</span>
                //   <MultiRangeSlider
                //     min={0}
                //     max={max_size}
                //     step={parseInt(max_size / 50)}
                //     ruler={true}
                //     label={true}
                //     preventWheel={false}
                //     minValue={comp.addition[fieldKey].value[0]}
                //     maxValue={comp.addition[fieldKey].value[1]}
                //     onInput={(e) => {
                //       comp.addition[fieldKey].value[0] = e.minValue;
                //       comp.addition[fieldKey].value[1] = e.maxValue;
                //       updateComponents();
                //     }}
                //   />
                // </>
                <>
                  <DragLabel
                    name={`${comp.addition[fieldKey].name}(${unit}):`}
                    value={comp.addition[fieldKey].value[1]}
                    refIndex={refLabelIndex++}
                    setValue={(value, refIndex) => {
                      const validValue = getUFloat(value);
                      refs.current[refIndex].value = comp.addition[
                        fieldKey
                      ].value[1] = validValue;
                      updateComponents();
                    }}
                    offset={0.1}></DragLabel>
                  <input
                    ref={(element) => (refs.current[refInputIndex++] = element)}
                    className={classnames('input')}
                    type="text"
                    defaultValue={comp.addition[fieldKey].value[1]}
                    onBlur={(e) => {
                      const validValue = getUFloat(e.target.value);
                      e.target.value = comp.addition[fieldKey].value[1] =
                        validValue;
                      updateComponents();
                    }}></input>
                </>
              )}
            </div>
          )),
        )}
        <div className="button-group">
          <div
            className="button"
            onClick={() => {
              const name = nameRef.current.value;
              if (!name) {
                nameRef.current.focus();
                return;
              }
              comp.value.push({ name, value: comp.addition });
              comp.isAddition = false;
              comp.command = 'save';
              updateComponents();
            }}>
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar_Content_AddChildComp;
