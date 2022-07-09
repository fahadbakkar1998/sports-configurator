import React from 'react';
import classnames from 'classnames';
import { isLeafComponent } from './common';
import DragLabel from '../../Common/DragLabel';
import useZustand from '../../../utils/useZustand';

const RightBar_Content_CompInfo = ({
  comp,
  depth,
  isOpen,
  openChildren,
  onClick,
}) => {
  const { cur3dItemEvent, setCur3dItemEvent, curUnit } = useZustand();

  const style = {
    marginLeft: `${depth * 1}vw`,
  };

  return (
    <>
      {isLeafComponent(comp) ? (
        <div className={classnames('input-group', { hide: !isOpen })}>
          {Array.isArray(comp.value) ? (
            <>{comp.name}</>
          ) : (
            <>
              <DragLabel
                name={`${comp.name}(${curUnit}):`}
                value={comp.value}
                setValue={(val) => {}}
                offset={0.01}></DragLabel>
              <input
                className="input"
                type="text"
                value={comp.value}
                onChange={(e) => {
                  console.log(e.target.value);
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
