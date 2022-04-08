import React from 'react';
import useZustand from '../../utils/useZustand';
import cn from 'classnames';

const LeftBar_Header = () => {
  const editMode = useZustand((state) => state.editMode);
  const setEditMode = useZustand((state) => state.setEditMode);

  return (
    <div className="LeftBar_Header">
      <img
        className={cn('item')}
        src="assets/images/icon-search.png"
        onClick={() => {
          console.log('search');
        }}></img>
      <img
        className={cn('item')}
        src="assets/images/icon-hand.png"
        onClick={() => {
          console.log('hand');
        }}></img>
    </div>
  );
};

export default LeftBar_Header;
