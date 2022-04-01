import React from 'react';
import './index.scss';

const Bill = ({ title, items }) => {
  return (
    <div className="bill">
      <div className="bill-title">{title}</div>
      {items.map((item, key) => (
        <div className="bill-item" key={key}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Bill;
