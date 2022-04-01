import React from 'react';
import BasicBox from '../../basic-box';
import InputBox from '../../inputBox';
import './index.scss';

const items = ['Lane 1', 'Lane 2', 'Lane 3'];

const LaneWidths = () => {
  return (
    <BasicBox label="Lane Widths">
      {items.map((item, key) => (
        <div key={key}>
          <InputBox label={item} big="true" />
        </div>
      ))}
    </BasicBox>
  );
};

export default LaneWidths;
