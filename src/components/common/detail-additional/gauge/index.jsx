import React from 'react';
import BasicBox from '../../basic-box';
import BasicTextRow from '../../basic-text-row';
import './index.scss';

const items = [
  { title: '#21 Poly', value: 'Little League,Backyard/Hobby' },
  { title: '#36 Poly', value: 'High School  Backyard/Hobby' },
  { title: '#21 Nylon', value: 'Little League' },
  { title: '#36 Nylon', value: 'High School' },
  { title: '#42 Poly', value: 'University' },
  { title: '#48 Nylon', value: 'University/Commercial' },
  { title: '#60 Nylon', value: 'Commercial' },
];

const Gauge = () => {
  return (
    <BasicBox label="Gauge & Material">
      <div className="gauge">
        <div className="gauge-image"></div>
        {items.map(({ title, value }, key) => (
          <BasicTextRow label={title} value={value} key={key} />
        ))}
      </div>
    </BasicBox>
  );
};

export default Gauge;
