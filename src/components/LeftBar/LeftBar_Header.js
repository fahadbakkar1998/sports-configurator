import React from 'react';
import useZustand from '../../utils/useZustand';
import cn from 'classnames';

const LeftBar_Header = () => {
  const editMode = useZustand((state) => state.editMode);
  const setEditMode = useZustand((state) => state.setEditMode);

  return (
    <div className="LeftBar_Header">
      <div
        className={cn('item', { active: editMode === 'Floor Plan' })}
        onClick={() => {
          setEditMode('Floor Plan');
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
    </div>
  );
};

export default LeftBar_Header;
