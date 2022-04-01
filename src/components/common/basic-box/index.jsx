import React from 'react';
import './index.scss';

const BasicBox = ({ label, icon, children }) => {
  return (
    <div className="basic-box">
      <div className="box-header">
        <div className="box-header-label">{label}</div>
        {icon && <div className="box-header-icon">i</div>}
      </div>
      <div className="box-inner-content">{children}</div>
    </div>
  );
};

export default BasicBox;
