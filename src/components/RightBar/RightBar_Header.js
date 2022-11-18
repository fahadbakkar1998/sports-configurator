import React from 'react';
import { saveCart, saveDesign } from '../../utils/bp.support';
import useZustand from '../../utils/use.zustand';
import axios from 'axios';
import { backendUrl } from '../../constants';

const RightBar_Header = () => {
  const { selProductId, setProducts, setLoading, setSelProductId } =
    useZustand();

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
          setLoading(true);
          const res = await saveCart({ productId: selProductId });
          setSelProductId(res.data.insertedId);

          if (!selProductId) {
            const res = await axios.get(`${backendUrl}/`);
            setProducts(res.data);
          }

          setLoading(false);
        }}>
        Save to Cart
      </div>
      <div className="item"></div>
    </div>
  );
};

export default RightBar_Header;
