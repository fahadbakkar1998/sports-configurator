import React from 'react';
import { saveDesign } from '../../utils/bpSupport';

const RightBar_Header = () => {
  return (
    <div className="RightBar_Header">
      <div className="item" onClick={saveDesign}>
        Save
      </div>
      <div className="item">Share</div>
      <div className="item">Add to Cart</div>
    </div>
  );
};

export default RightBar_Header;
