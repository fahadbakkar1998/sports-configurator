import React from 'react';
import useZustand from '../../utils/useZustand';
import { updateWireFrame } from '../../utils/bpSupport';
import cn from 'classnames';

const Scene_Header = () => {
  const editMode = useZustand((state) => state.editMode);
  const setEditMode = useZustand((state) => state.setEditMode);
  const isWireFrame = useZustand((state) => state.isWireFrame);
  const setIsWireFrame = useZustand((state) => state.setIsWireFrame);

  return (
    <div className="Scene_Header">
      <div
        className={cn('item', { active: editMode === 'FLOOR PLAN' })}
        onClick={() => {
          setEditMode('FLOOR PLAN');
        }}>
        Floor Plan
      </div>
      <div
        className={cn('item', { active: editMode === '3D' })}
        onClick={() => {
          setEditMode('3D');
        }}>
        3D
      </div>
      <div
        className={cn('item', { active: isWireFrame })}
        onClick={() => {
          updateWireFrame(!isWireFrame);
          setIsWireFrame(!isWireFrame);
        }}>
        WireFrame
      </div>
    </div>
  );
};

export default Scene_Header;
