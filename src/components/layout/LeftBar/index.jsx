import React from 'react';
import SidebarContent from '../../sidebar';
import './index.scss';

const LeftBar = () => (
  <div className="left-bar">
    <div className="left-bar-tools">
      <div className="left-bar-item-search"></div>
      <div className="left-bar-item-hand"></div>
    </div>
    <div className="categories">
      <div className="categories-list">
        <SidebarContent />
      </div>
    </div>
  </div>
);

export default LeftBar;
