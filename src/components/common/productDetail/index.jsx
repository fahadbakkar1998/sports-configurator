import React from 'react';
import cx from 'classnames';
import './index.scss';

const ProductDetail = ({ active, title, cost }) => {
  return (
    <figure className={cx('detail-image', { active })}>
      <div className="detail-image-preview"></div>
      <figcaption>
        <div className="detail-image-title">{title}</div>
        <div className="detail-image-cost">Cost: {cost}</div>
      </figcaption>
    </figure>
  );
};

export default ProductDetail;
