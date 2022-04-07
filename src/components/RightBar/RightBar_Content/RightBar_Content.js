import React from 'react';
import useZustand from '../../../utils/useZustand';
import RightBar_Content_Header from './RightBar_Content_Header';
import RightBar_Content_Inspector from './RightBar_Content_Inspector';
import RightBar_Content_Total from './RightBar_Content_Total';

const RightBar_Content = () => {
  const rightBarMode = useZustand((state) => state.rightBarMode);

  return (
    <div className="RightBar_Content">
      <RightBar_Content_Header></RightBar_Content_Header>
      {rightBarMode === 'INSPECTOR' && (
        <RightBar_Content_Inspector></RightBar_Content_Inspector>
      )}
      {rightBarMode === 'TOTAL' && (
        <RightBar_Content_Total></RightBar_Content_Total>
      )}
    </div>
  );
};

export default RightBar_Content;
