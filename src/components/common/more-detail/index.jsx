import React from 'react';
import './index.scss';

const MoreDetail = () => {
  return (
    <div className="more-detail">
      <div className="more-detail-image">
        <div className="show-image"></div>
        <div className="category-info">
          ShellCage <span></span>
        </div>
        <div className="cost-info">Cost: $80,000</div>
      </div>
      <div className="more-detail-spec">
        <div className="spec-header">Specs:</div>
        <div className="spec-content">
          <div className="spec-item">
            Dimensions: 70 ft L x 42 ft W x 16 ft H
          </div>
          <div className="spec-item">Ceiling Rib Lines:</div>
          <div className="spec-item">Lanes: 3</div>
          <div className="spec-item">Divider Curtains: 2</div>
          <div className="spec-item">Baffles: 4</div>
          <div className="spec-item">Mesh Size: Golf</div>
          <div className="spec-item">Material: #21 Poly</div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetail;
