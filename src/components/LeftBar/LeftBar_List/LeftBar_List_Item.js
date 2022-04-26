import React from 'react';
import useZustand from '../../../utils/useZustand';
import { addItem } from '../../../utils/bpSupport';
import cn from 'classnames';

const itemTypes = {
  0: 'Item',
  1: 'FloorItem',
  2: 'WallItem',
  3: 'InWallItem',
  4: 'RoofItem',
  5: 'OutItem',
  7: 'InWallFloorItem',
  8: 'OnFloorItem',
  9: 'WallFloorItem',
};

const LeftBar_List_Item = ({
  item,
  depth,
  isOpen,
  openChildren,
  onClick,
  hierarchy,
}) => {
  const selectedWall = useZustand((state) => state.selectedWall);
  const selectedFloor = useZustand((state) => state.selectedFloor);

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
                addItem({
                  ...item,
                  selectedWall,
                  selectedFloor,
                  hierarchy: hierarchy.slice(0, -1),
                });
              }}></img>
            <div className="name" title={item.name}>
              {/* {`(${itemTypes[item.type]})${item.name}`} */}
              {item.name}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftBar_List_Item;
