import React from 'react';
import useZustand from '../../../utils/useZustand';

const LeftBar_List_Leaf = ({ item }) => {
  const aWall = useZustand((state) => state.aWall);
  return (
    <div className="LeftBar_List_Leaf">
      <div className="container">
        <img
          className="image"
          src={item.image}
          onClick={() => {
            if (!blueprintJS) return;
            let metadata = {
              itemName: item.name,
              resizable: true,
              modelUrl: item.model,
              itemType: item.type,
              format: item.format,
            };
            if (
              [2, 3, 7, 9].indexOf(parseInt(item.type)) != -1 &&
              aWall &&
              aWall.currentWall
            ) {
              var placeAt = aWall.currentWall.center.clone();
              blueprintJS.model.scene.addItem(
                item.type,
                item.model,
                metadata,
                null,
                null,
                null,
                false,
                { position: placeAt, edge: aWall.currentWall },
              );
            } else if (aWall && aWall.currentFloor) {
              var placeAt = aWall.currentFloor.center.clone();
              blueprintJS.model.scene.addItem(
                item.type,
                item.model,
                metadata,
                null,
                null,
                null,
                false,
                { position: placeAt },
              );
            } else {
              blueprintJS.model.scene.addItem(item.type, item.model, metadata);
            }
          }}></img>
        <div className="name">{item.name}</div>
      </div>
    </div>
  );
};

export default LeftBar_List_Leaf;
