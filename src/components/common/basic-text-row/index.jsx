import React, { useState } from 'react';
import cx from 'classnames';
import './index.scss';

const BasicTextRow = ({ label, value }) => {
  const [selected, setSelect] = useState(false);
  return (
    <div className="basic-text-row">
      <p
        className={cx('label', { selected })}
        onClick={() => setSelect(!selected)}>
        {label}
      </p>
      <p className="value">{value}</p>
    </div>
  );
};

export default BasicTextRow;
