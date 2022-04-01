import React from 'react';
import ProductDetail from '../productDetail';
import Dimentions from '../dimentions';
import Thickness from '../thickness';
import Color from '../color';
import './index.scss';

const dimentionItems = ['W  4ft', 'L  12ft', 'H  n/a'];

const DetailDraft = () => {
  return (
    <>
      <div className="product-detail">
        <ProductDetail title="Confetti Sportfloor" cost="$1295.00" />
      </div>
      <div className="dimentions">
        <Dimentions title="Dimensions" items={dimentionItems} />
      </div>
      <div className="thickness">
        <Thickness />
      </div>
      <div className="colors">
        <Color title="Colors" />
      </div>
    </>
  );
};

export default DetailDraft;
