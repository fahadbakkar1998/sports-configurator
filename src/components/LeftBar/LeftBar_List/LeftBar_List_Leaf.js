import React from 'react';
import useZustand from '../../../utils/useZustand';
import { addItem } from '../../../utils/bpSupport';

const LeftBar_List_Leaf = ({ item }) => {
  const aWall = useZustand((state) => state.aWall);
  return (
    <div className="LeftBar_List_Leaf">
      <div className="container">
        <img
          className="image"
          src={item.image}
          onClick={() => {
            addItem({ ...item, aWall });
          }}></img>
        <div className="name" title={item.name}>
          {item.name}
        </div>
      </div>
    </div>
  );
};

export default LeftBar_List_Leaf;
