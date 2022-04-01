import React, { useState, useEffect } from 'react';
import BasicBox from '../../basic-box';
import InputBox from '../../inputBox';
import WithCheckbox from '../../with-checkbox';
// import BasicTextRow from '../../basic-text-row';
import './index.scss';

// const items = ['Door 1 Location:', 'Door 2 Location:', 'Door 3 Location:'];

const AdditionalFeatures = () => {
  const [lanes, setLane] = useState(3);
  const items = Array(lanes).fill(1);
  return (
    <BasicBox label="Additional Features">
      <WithCheckbox title="Door" />
      <div className="lane-image"></div>
      <div className="additional-features">
        {items.map((_, key) => (
          <InputBox label={`Door ${key + 1} Location`} key={key} />
        ))}
      </div>
    </BasicBox>
  );
};

export default AdditionalFeatures;
