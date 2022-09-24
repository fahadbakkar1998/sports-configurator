import React from 'react';
import { saveCart, saveDesign } from '../../utils/bp.support';
import useZustand from '../../utils/use.zustand';
import axios from 'axios';
import { backendUrl } from '../../constants';

const RightBar_Header = () => {
  const { selProductId, setProducts } = useZustand();

  return (
    <div className="RightBar_Header">
      <div
        className="item"
        onClick={() => saveDesign({ productId: selProductId })}>
        Save
      </div>
      <div
        className="item"
        onClick={async () => {
          await saveCart({ productId: selProductId });
          if (!selProductId) {
            const res = await axios.get(`${backendUrl}/`);
            setProducts(res.data);
          }
        }}>
        Save to Cart
      </div>
      <div className="item"></div>
    </div>
  );
};

export default RightBar_Header;
