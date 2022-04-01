import React from 'react';
import BasicBox from '../../basic-box';
import InputBox from '../../inputBox';
import './index.scss';

const NumberOfLanes = () => {
  return (
    <BasicBox label="Number of Lanes">
      <div className="number-of-lanes">
        <InputBox big="true" />
      </div>
    </BasicBox>
  );
};

export default NumberOfLanes;
