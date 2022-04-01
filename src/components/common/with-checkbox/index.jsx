import React from 'react';
// import cx from 'classnames';
import InputBox from '../inputBox';
import './index.scss';

const WithCheckbox = ({ title, nolabel }) => {
  return (
    <div className="with-checkbox">
      <div className="with-label-checkbox">
        <label className="container">
          {title}
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="inner-inputbox">
        {nolabel ? <InputBox /> : <InputBox label="Qty" />}
      </div>
    </div>
  );
};

export default WithCheckbox;
