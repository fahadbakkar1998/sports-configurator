import React from 'react';
import cx from 'classnames';
import './index.scss';

const MenuItem = ({ subMenuTitle, header, title, open }) => {
  return (
    <div
      className={cx(
        'menu-item',
        { 'sub-menu-title': subMenuTitle },
        { 'top-menu': header, open },
      )}>
      {!header && <div className="menu-icon">&gt;</div>}
      <div className="menu-inner-item">{title}</div>
    </div>
  );
};

export default MenuItem;
