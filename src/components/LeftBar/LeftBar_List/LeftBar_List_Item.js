import React from 'react';

const LeftBar_List_Item = ({ name, depth }) => {
  const style = {
    marginLeft: `${depth * 1}vw`,
  };
  return (
    <div className="LeftBar_List_Item">
      <div className="arrow" style={style}>
        &gt;
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default LeftBar_List_Item;
