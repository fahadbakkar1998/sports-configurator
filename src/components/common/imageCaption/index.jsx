import React from 'react';
import cx from 'classnames';
import './index.scss';

const ImageWithCaption = ({ caption, active = false }) => {
  return (
    <figure className={cx('image-with-caption', { active })}>
      <img src="./logo192.png" alt="test1" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default ImageWithCaption;
