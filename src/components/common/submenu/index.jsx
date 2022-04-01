import React, { useState } from 'react';
import MenuItem from '../menuItem';

import './index.scss';

const SubMenu = ({ title, categoryItems }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setToggle(!toggle);
  };

  return (
    <div className="sub-menu">
      <div className="sub-menu-header" onClick={handleClick}>
        <MenuItem subMenuTitle="true" title={title} open={toggle} />
      </div>
      {categoryItems &&
        toggle &&
        categoryItems.map((item, key) => <MenuItem key={key} title={item} />)}
    </div>
  );
};

export default SubMenu;
