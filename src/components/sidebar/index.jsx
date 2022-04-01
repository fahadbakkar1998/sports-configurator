// import { ProSidebar, SubMenu, MenuItem, Menu } from 'react-pro-sidebar';
import Submenu from '../common/submenu';
import MenuItem from '../common/menuItem';

import './index.scss';

const categories = [
  { title: 'Buildings', items: [] },
  { title: 'Sports Court', items: [] },
  { title: 'Turf', items: [] },
  { title: 'Rubber Flooring', items: ['Tiles', 'Rolls'] },
  { title: 'Playground Surfaces', items: [] },
  { title: 'Indoor Netting Solutions', items: [] },
  { title: 'Outdoor Lighting', items: [] },
  { title: 'Hoops', items: [] },
  { title: 'Backstop/Barrier Net', items: [] },
  { title: 'Accessories', items: [] },
  { title: 'Wall Padding', items: [] },
];

const CustomSidebarContent = () => {
  return (
    <>
      <MenuItem header="true" title="Categories" />
      {categories.map(({ title, items }, key) => {
        return <Submenu title={title} key={key} categoryItems={items} />;
      })}
    </>
  );
};

export default CustomSidebarContent;
