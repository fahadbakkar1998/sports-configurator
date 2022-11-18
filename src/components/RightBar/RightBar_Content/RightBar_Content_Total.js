import React, { useEffect, useState } from 'react';
import { equals } from '../../../common';
import { items } from '../../../utils/resource';
import useZustand from '../../../utils/use.zustand';
import {
  getTotalPrice,
  loadCart,
  loadDefaultDesign,
} from '../../../utils/bp.support';
import cn from 'classnames';
import axios from 'axios';
import { backendUrl } from '../../../constants';

const RightBar_Content_Total = () => {
  const [bpJS, setBpJS] = globalStore.useState('blueprintJS');
  const [itemGroups, setItemGroups] = useState([]);
  const {
    cur3dItemEvent,
    products,
    setProducts,
    selProductId,
    setSelProductId,
    setLoading,
  } = useZustand();

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (bpJS && bpJS.model.scene.items) {
      let groups = [];
      bpJS.model.scene.items.map((item) => {
        const hierarchy = item.metadata.hierarchy;
        const index = groups.findIndex((group) => {
          return equals(group.hierarchy, hierarchy);
        });
        if (index > -1) {
          groups[index].items.push(item);
        } else {
          groups.push({ hierarchy, items: [item] });
        }
      });
      setItemGroups(groups);
    }
  }, [bpJS]);

  const loadProducts = async () => {
    setLoading(true);
    const res = await axios.get(`${backendUrl}/`);
    setLoading(false);
    setProducts(res.data);
    if (res.data && res.data.length && selProductId) {
      const firstProductId = res.data[0]._id;
      firstProductId !== selProductId && loadProductScene(firstProductId);
    } else {
      setSelProductId(null);
    }
  };

  const loadProductScene = async (productId) => {
    setLoading(true);
    await loadCart(productId);
    setLoading(false);
    setSelProductId(productId);
  };

  const getHeaderName = (hierarchy) => {
    if (!hierarchy || !hierarchy.length) return '';
    let headerName = items[hierarchy[0]].name;
    let curItems = items[hierarchy[0]].children;
    hierarchy.slice(1).forEach((h) => {
      headerName += ` - ${curItems[h].name}`;
      curItems = [...curItems[h].children];
    });
    return headerName;
  };

  return (
    <div className="RightBar_Content_Total">
      {products.length ? (
        <div className="item-group">
          {/* <div className="header">Estimated Totals</div>
          <div className="item">${getTotalPrice()}</div> */}
          <div className="header">Products</div>
          {React.Children.toArray(
            products.map((product) => (
              <div className="item">
                <div
                  className={cn('item-name', {
                    active: selProductId === product._id,
                  })}
                  onClick={() => {
                    loadProductScene(product._id);
                  }}>
                  {product.name}
                </div>
                <img
                  className="item-remove"
                  src="assets/images/close.png"
                  onClick={async () => {
                    setLoading(true);
                    await axios.post(`${backendUrl}/remove/${product._id}`);
                    setLoading(false);
                    loadProducts();
                  }}
                />
              </div>
            )),
          )}
        </div>
      ) : (
        <></>
      )}

      {React.Children.toArray(
        itemGroups.map((itemGroup) => (
          <div className="item-group">
            <div className="header">{getHeaderName(itemGroup.hierarchy)}</div>
            {React.Children.toArray(
              itemGroup.items.map((item) => (
                <div className="item">
                  <div
                    className={cn('item-name', {
                      active: cur3dItemEvent && cur3dItemEvent.item === item,
                    })}>
                    {item.metadata.name}
                  </div>
                  <img
                    className="item-remove"
                    src="assets/images/close.png"
                    onClick={() => {
                      item.remove();
                      bpJS.three.render(true);
                      setBpJS({ ...bpJS });
                    }}
                  />
                </div>
              )),
            )}
          </div>
        )),
      )}
    </div>
  );
};

export default RightBar_Content_Total;
