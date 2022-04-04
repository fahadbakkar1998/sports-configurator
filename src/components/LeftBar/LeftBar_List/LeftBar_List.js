import React from 'react';
import LeftBar_List_Item from './LeftBar_List_Item';
import LeftBar_List_Leaf from './LeftBar_List_Leaf';
import { items } from '../../../utils/resource';

const LeftBar_List = () => {
  const recursiveItem = (item, depth, i) => {
    if (item.children) {
      return (
        <>
          <LeftBar_List_Item
            name={item.name}
            depth={depth}
            key={`${depth}_${i}`}></LeftBar_List_Item>
          {item.children.map((item, j) => recursiveItem(item, depth + 1, j))}
        </>
      );
    } else {
      return (
        <LeftBar_List_Leaf
          item={item}
          key={`${depth}_${i}`}></LeftBar_List_Leaf>
      );
    }
  };

  return (
    <div className="LeftBar_List">
      {items.map((item, i) => recursiveItem(item, 0, i))}
    </div>
  );
};

export default LeftBar_List;
