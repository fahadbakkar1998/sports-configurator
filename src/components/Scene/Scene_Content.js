import React, { useEffect } from 'react';
import * as Blueprint from '../../utils/blueprint/blueprint';
import useZustand from '../../utils/useZustand';
import { loadDefaultDesign } from '../../utils/bpSupport';
import { WallProperties } from '../../utils/common';
import cn from 'classnames';

const Scene_Content = () => {
  const editMode = useZustand((state) => state.editMode);
  const setAWall = useZustand((state) => state.setAWall);
  const setFloorPlanMode = useZustand((state) => state.setFloorPlanMode);
  const setCurEvent = useZustand((state) => state.setCurEvent);
  const setCur2dItem = useZustand((state) => state.setCur2dItem);

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
    // three
    blueprintJS.three.addEventListener(Blueprint.EVENT_FPS_EXIT, function (o) {
      console.log('EVENT_FPS_EXIT: ', o);
    });

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_GLTF_READY,
      function (o) {
        console.log('EVENT_GLTF_READY: ', o);
      },
    );

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_ITEM_SELECTED,
      function (o) {
        console.log('EVENT_ITEM_SELECTED: ', o);
      },
    );

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_ITEM_UNSELECTED,
      function (o) {
        console.log('EVENT_ITEM_UNSELECTED: ', o);
      },
    );

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_WALL_CLICKED,
      function (o) {
        console.log('EVENT_WALL_CLICKED: ', o);
        let aWall = new WallProperties();
        aWall.setWall(o.item);
        aWall.setFloor(null);
        setAWall(aWall);
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

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_CAMERA_VIEW_CHANGE,
      function (o) {
        console.log('EVENT_CAMERA_VIEW_CHANGE: ', o);
      },
    );

    blueprintJS.three.addEventListener(
      Blueprint.EVENT_CAMERA_ACTIVE_STATUS,
      function (o) {
        console.log('EVENT_CAMERA_ACTIVE_STATUS: ', o);
      },
    );

    // floor planner
    blueprintJS.floorplanner.addEventListener(
      Blueprint.EVENT_MODE_RESET,
      function (o) {
        setFloorPlanMode(o.mode);
      },
    );

    // model
    blueprintJS.model.floorplan.addEventListener(
      Blueprint.EVENT_CORNER_2D_CLICKED,
      function (o) {
        console.log('EVENT_CORNER_2D_CLICKED');
        setCurEvent(Blueprint.EVENT_CORNER_2D_CLICKED);
        setCur2dItem(o);
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
