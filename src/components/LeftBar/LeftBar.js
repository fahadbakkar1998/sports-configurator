import React from 'react';
import LeftBar_Header from './LeftBar_Header';
import LeftBar_List from './LeftBar_List/LeftBar_List';

const LeftBar = () => {
  return (
    <div className="LeftBar">
      <LeftBar_Header></LeftBar_Header>
      <LeftBar_List></LeftBar_List>
    </div>
  );
};

export default LeftBar;
