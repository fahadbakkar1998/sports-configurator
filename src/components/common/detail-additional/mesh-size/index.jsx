import React from 'react';
import BasicBox from '../../basic-box';
import BasicTextRow from '../../basic-text-row';
import './index.scss';

const items = [
  { title: '7/8 inch', value: 'Golf' },
  { title: '1-1/2 inch', value: 'Lacrosse, Hockey' },
  { title: '1-7/8 inch', value: 'Baseball, Cricket' },
  { title: '4 inch', value: 'Soccer, Basketball' },
];

const MeshSize = () => {
  return (
    <BasicBox label="Mesh Size">
      <div className="mesh-size">
        {items.map(({ title, value }, key) => (
          <BasicTextRow label={title} value={value} key={key} />
        ))}
      </div>
    </BasicBox>
  );
};

export default MeshSize;
