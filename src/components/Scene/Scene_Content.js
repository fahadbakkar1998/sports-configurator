import React, { useEffect } from 'react';
import * as Blueprint from '../../utils/blueprint/blueprint';
import useZustand from '../../utils/useZustand';
import { loadDefaultDesign } from '../../utils/bpSupport';
import cn from 'classnames';

const Scene_Content = () => {
  const [bpJS, setBpJS] = globalStore.useState('blueprintJS');
  const {
    editMode,
    setSelectedWall,
    setSelectedFloor,
    setSelectedRoof,
    setFloorPlanMode,
    setCur2dItemEvent,
    setCur3dItemEvent,
    setLoading,
  } = useZustand();

  useEffect(() => {
    // init
    if (!window.blueprintJS) {
      window.blueprintJS = new Blueprint.BlueprintJS({
        floorplannerElement: 'floor_planner',
        threeElement: 'three',
        threeCanvasElement: 'three_canvas',
        widget: false,
      });
      setBpJS(window.blueprintJS);
    }

    // init events
    initEvents();

    // load home
    loadDefaultDesign();
  }, []);

  const initEvents = () => {
    /* three */

    // blueprintJS.three.addEventListener(Blueprint.EVENT_FPS_EXIT, (o) => {
    //   console.log('Scene_Content_EVENT_FPS_EXIT: ', o);
    // });

    // blueprintJS.three.addEventListener(Blueprint.EVENT_GLTF_READY, (o) => {
    //   console.log('Scene_Content_EVENT_GLTF_READY: ', o);
    // });

    blueprintJS.three.addEventListener(Blueprint.EVENT_ITEM_SELECTED, (o) => {
      console.log('Scene_Content_EVENT_ITEM_SELECTED: ', o);
      setCur3dItemEvent(o);
    });

    blueprintJS.three.addEventListener(Blueprint.EVENT_ITEM_UNSELECTED, (o) => {
      console.log('Scene_Content_EVENT_ITEM_UNSELECTED: ', o);
      setCur3dItemEvent(null);
    });

    blueprintJS.three.addEventListener(Blueprint.EVENT_WALL_CLICKED, (o) => {
      console.log('Scene_Content_EVENT_WALL_CLICKED: ', o);
      setSelectedWall(o);
      setSelectedRoof({ item: o.item.room.roof });
    });

    blueprintJS.three.addEventListener(Blueprint.EVENT_FLOOR_CLICKED, (o) => {
      console.log('Scene_Content_EVENT_FLOOR_CLICKED: ', o);
      setSelectedFloor(o);
      setSelectedRoof({ item: o.item.roof });
    });

    blueprintJS.three.addEventListener(Blueprint.EVENT_NOTHING_CLICKED, (o) => {
      console.log('Scene_Content_EVENT_NOTHING_CLICKED: ', o);
      setSelectedWall(null);
      setSelectedFloor(null);
      setSelectedRoof(null);
    });

    // blueprintJS.three.addEventListener(
    //   Blueprint.EVENT_CAMERA_VIEW_CHANGE,
    //   (o) => {
    //     console.log('Scene_Content_EVENT_CAMERA_VIEW_CHANGE: ', o);
    //   },
    // );

    // blueprintJS.three.addEventListener(
    //   Blueprint.EVENT_CAMERA_ACTIVE_STATUS,
    //   (o) => {
    //     console.log('Scene_Content_EVENT_CAMERA_ACTIVE_STATUS: ', o);
    //   },
    // );

    /* floor planner */

    // When the planner mode changes. (between move, draw and delete)
    blueprintJS.floorplanner.addEventListener(
      Blueprint.EVENT_MODE_RESET,
      (o) => {
        console.log('Scene_Content_EVENT_MODE_RESET: ', o);
        setFloorPlanMode(o.mode);
      },
    );

    // global events
    blueprintJS.floorplanner.floorplan.addEventListener(
      Blueprint.EVENT_NOTHING_CLICKED,
      (o) => {
        console.log('Scene_Content_EVENT_NOTHING_CLICKED: ', o);
        setCur2dItemEvent(null);
      },
    );

    // corner events
    blueprintJS.floorplanner.floorplan.addEventListener(
      Blueprint.EVENT_CORNER_2D_CLICKED,
      (o) => {
        console.log('Scene_Content_EVENT_CORNER_2D_CLICKED: ', o);
        o.type = 'CORNER';
        setCur2dItemEvent(o);
      },
    );

    blueprintJS.floorplanner.floorplan.addEventListener(
      Blueprint.EVENT_CORNER_2D_MOVED,
      (o) => {
        console.log('Scene_Content_EVENT_CORNER_2D_MOVED: ', o);
        o.type = 'CORNER';
        setCur2dItemEvent(o);
      },
    );

    // wall events
    blueprintJS.floorplanner.floorplan.addEventListener(
      Blueprint.EVENT_WALL_2D_CLICKED,
      (o) => {
        console.log('Scene_Content_EVENT_WALL_2D_CLICKED: ', o);
        o.type = 'WALL';
        setCur2dItemEvent(o);
      },
    );

    // room events
    blueprintJS.floorplanner.floorplan.addEventListener(
      Blueprint.EVENT_ROOM_2D_CLICKED,
      (o) => {
        console.log('Scene_Content_EVENT_ROOM_2D_CLICKED: ', o);
        o.type = 'ROOM';
        setCur2dItemEvent(o);
      },
    );

    /* scene */
    blueprintJS.three.scene.addEventListener(
      Blueprint.EVENT_ITEM_LOADING,
      (o) => {
        console.log('Scene_Content_EVENT_ITEM_LOADING: ', o);
        setLoading(true);
      },
    );

    blueprintJS.three.scene.addEventListener(
      Blueprint.EVENT_ITEM_LOADED,
      (o) => {
        console.log('Scene_Content_EVENT_ITEM_LOADED: ', o);
        setLoading(false);
        setBpJS({ ...blueprintJS });
      },
    );
  };

  return (
    <div className="Scene_Content">
      <canvas
        id="floor_planner"
        className={cn({ hide: editMode !== 'FLOOR PLAN' })}></canvas>
      <div id="three" className={cn({ hide: editMode !== '3D' })}></div>
    </div>
  );
};

export default Scene_Content;
