import React from 'react';
import BasicBox from '../../basic-box';
// import InputBox from '../../inputBox';
import WithCheckbox from '../../with-checkbox';
import './index.scss';

// const items = ['Door 1 Location:', 'Door 2 Location:', 'Door 3 Location:'];

const ShellCage = () => {
  return (
    <BasicBox label="ShellCage Installation Hardware">
      <div className="hardware-items">
        <p>Anchor Plates</p>
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
      </div>
      <div className="hardware-items">
        <p>Lags</p>
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
      </div>
      <div className="hardware-items">
        <p>Turnbuckles</p>
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
      </div>
      <div className="hardware-items">
        <p>Snap Hooks & Roller Wheels </p>
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
        <WithCheckbox title="8 x 8 in Single  Wall P...." nolabel="false" />
      </div>
    </BasicBox>
  );
};

export default ShellCage;
