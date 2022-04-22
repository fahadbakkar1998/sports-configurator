import React, { useEffect, useState } from 'react';
import { equals } from '../../../utils/common';
import { items } from '../../../utils/resource';
import useZustand from '../../../utils/useZustand';
import { getTotalPrice } from '../../../utils/bpSupport';
import cn from 'classnames';

const RightBar_Content_Total = () => {
  const [bpJS, setBpJS] = globalStore.useState('blueprintJS');
  const [itemGroups, setItemGroups] = useState([]);
  const { cur3dItemEvent } = useZustand();

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
      <div className="item-group">
        <div className="header">Estimated Totals</div>
        <div className="item">${getTotalPrice()}</div>
      </div>
    </div>
  );
};

export default RightBar_Content_Total;
