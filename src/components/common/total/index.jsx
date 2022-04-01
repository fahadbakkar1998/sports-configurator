import React from 'react';
import Bill from '../bill';
import './index.scss';

const categories = [
  {
    title: 'Building',
    items: ['Man Door', 'Mezzanine', 'Garage Door'],
  },
  {
    title: 'Indoor Netting Solutions',
    items: ['Custom Batting Cage Tunnel'],
  },
  {
    title: 'Rubber Flooring',
    items: ['Rubber Rolls'],
  },
  {
    title: 'Batting Cage Hardware',
    items: ['Anchor Plate', 'Roller Wheels', 'Turnbuckle', 'Cable Clamp'],
  },
  {
    title: 'Turf',
    items: ['Triple Crown'],
  },
  {
    title: 'Outdoor Batting Cage Frame',
    items: ['Pro 55 ft Single Lane'],
  },
  {
    title: 'Sports Court',
    items: ['Revolution'],
  },
];

const Total = () => {
  return (
    <div className="total-cart">
      <div className="total-categories">
        {categories.map(({ title, items }, key) => (
          <Bill title={title} items={items} key={key} />
        ))}
      </div>
      <div className="add-cart">
        <div className="cart-label">Estimated Totals</div>
        <div className="bill-content">
          <div className="label">Sub Total:</div>
          <div className="cost">$112,950</div>
        </div>
        <div className="cart-button">Add Cart &gt;</div>
      </div>
    </div>
  );
};

export default Total;
