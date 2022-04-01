import React, { useState } from 'react';
import cx from 'classnames';
import './index.scss';

const Dimentions = ({ title, items }) => {
  const [selected, setSelect] = useState(false);
  const handleClick = () => setSelect(!selected);

  return (
    <>
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item, key) => (
          <div
            className={cx('item', { selected })}
            key={key}
            onClick={handleClick}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dimentions;
