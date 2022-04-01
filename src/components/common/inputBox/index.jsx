import React from 'react';
import cx from 'classnames';
import './index.scss';

const InputBox = ({ big = false, label = false }) => {
  return (
    <>
      {label && <label htmlFor="input-box">{label}</label>}
      <input id="input-box" className={cx('input-box', { big })} type="text" />
    </>
  );
};

export default InputBox;
