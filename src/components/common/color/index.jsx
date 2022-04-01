import React, { useState } from 'react';
import cx from 'classnames';
import './index.scss';

// eslint-disable-next-line
const items = ['Red', 'Blue', 'White', 'Purple', 'Yellow', 'Black'];

const Color = ({ title }) => {
  const [selected, setSelect] = useState(false);
  const handleClick = () => setSelect(!selected);

  return (
    <>
      <div className="color-inner-title">{title}</div>
      <div className="color-items">
        {items.map((item, key) => (
          <div
            className={cx('color-item', { selected })}
            key={key}
            onClick={handleClick}></div>
        ))}
      </div>
    </>
  );
};

export default Color;
