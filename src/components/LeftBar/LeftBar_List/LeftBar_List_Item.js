import React from 'react';
import useZustand from '../../../utils/useZustand';
import { addItem } from '../../../utils/bpSupport';
import cn from 'classnames';

const LeftBar_List_Item = ({ item, depth, isOpen, openChildren, onClick }) => {
  const selectedWall = useZustand((state) => state.selectedWall);

  const style = {
    marginLeft: `${depth * 1}vw`,
  };

  return (
    <>
      {item.children ? (
        <div
          className={cn('LeftBar_List_Item', { show: isOpen })}
          onClick={onClick}>
          <div className={cn('arrow', { open: openChildren })} style={style}>
            &gt;
          </div>
          <div className="name">{item.name}</div>
        </div>
      ) : (
        <div className={cn('LeftBar_List_Leaf', { show: isOpen })}>
          <div className="container">
            <img
              className="image"
              src={item.image}
              onClick={() => {
                addItem({ ...item, selectedWall });
              }}></img>
            <div className="name" title={item.name}>
              {item.name}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftBar_List_Item;
