import React from 'react';
import Dimentions from '../dimentions';
import './index.scss';

const items = ['1/8in', '1/4in', '3/8in', '1/2in'];

const Thickness = () => {
  return <Dimentions title="Thickness" items={items} />;
};

export default Thickness;
