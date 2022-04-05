import React, { useEffect } from 'react';
import * as Blueprint from '../../utils/blueprint/blueprint';
import useZustand from '../../utils/useZustand';
import { loadDefaultDesign } from '../../utils/bpSupport';
import cn from 'classnames';

const Scene_Content = () => {
  const editMode = useZustand((state) => state.editMode);
  const setAWall = useZustand((state) => state.setAWall);

  useEffect(() => {
    // init
    window.blueprintJS = new Blueprint.BlueprintJS({
      floorplannerElement: 'floor_planner',
      threeElement: 'three',
      threeCanvasElement: 'three-canvas',
      widget: false,
    });

    // load home
    loadDefaultDesign();

    // init events
    initEvents();
  }, []);

  const initEvents = () => {
    blueprintJS.three.addEventListener(
      Blueprint.EVENT_WALL_CLICKED,
      function (o) {
        console.log('EVENT_WALL_CLICKED: ', o);
        let aWall = new wallProperties();
        aWall.setWall(o.item);
        aWall.setFloor(null);
        setAWall(aWall);
      },
    );

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_ROOM_CLICKED,
      function (o) {
        console.log('EVENT_ROOM_CLICKED: ', o);
      },
    );

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_FLOOR_CLICKED,
      function (o) {
        console.log('EVENT_FLOOR_CLICKED: ', o);
      },
    );

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_NOTHING_CLICKED,
      function (o) {
        console.log('EVENT_NOTHING_CLICKED: ', o);
      },
    );
  };

  return (
    <div className="Scene_Content">
      <canvas
        id="floor_planner"
        className={cn({ hide: editMode !== 'Floor Plan' })}></canvas>
      <div id="three" className={cn({ hide: editMode !== '3D' })}></div>
    </div>
  );
};

export default Scene_Content;
