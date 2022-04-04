import React from 'react';
import RightBar_Header from './RightBar_Header';
import RightBar_Content from './RightBar_Content/RightBar_Content';

const RightBar = () => (
  <div className="RightBar">
    <RightBar_Header></RightBar_Header>
    <RightBar_Content></RightBar_Content>
  </div>
);

export default RightBar;
