import React from 'react';
import useZustand from '../../utils/useZustand';
import {
  updateWireFrameMode,
  updateSnapToRect,
  updateSameElevation,
  updateRoofMode,
  updateVisibility,
} from '../../utils/bpSupport';
import cn from 'classnames';

const Scene_Header = () => {
  const editMode = useZustand((state) => state.editMode);
  const setEditMode = useZustand((state) => state.setEditMode);
  const isWireFrame = useZustand((state) => state.isWireFrame);
  const setIsWireFrame = useZustand((state) => state.setIsWireFrame);
  const snapToRect = useZustand((state) => state.snapToRect);
  const setSnapToRect = useZustand((state) => state.setSnapToRect);
  const sameElevation = useZustand((state) => state.sameElevation);
  const setSameElevation = useZustand((state) => state.setSameElevation);
  const showRoof = useZustand((state) => state.showRoof);
  const setShowRoof = useZustand((state) => state.setShowRoof);
  const visibility = useZustand((state) => state.visibility);
  const setVisibility = useZustand((state) => state.setVisibility);

  return (
    <div className="Scene_Header">
      <div
        className={cn('item', { active: editMode === 'FLOOR PLAN' })}
        onClick={() => {
          setEditMode('FLOOR PLAN');
        }}>
        Floor Plan
      </div>
      <div
        className={cn('item', { active: editMode === '3D' })}
        onClick={() => {
          setEditMode('3D');
        }}>
        3D
      </div>
      <div
        className={cn('item', { active: isWireFrame })}
        onClick={() => {
          updateWireFrameMode(!isWireFrame);
          setIsWireFrame(!isWireFrame);
        }}>
        WireFrame
      </div>
      <div
        className={cn('item', { active: snapToRect })}
        onClick={() => {
          updateSnapToRect(!snapToRect);
          setSnapToRect(!snapToRect);
        }}>
        Snap To Rect
      </div>
      <div
        className={cn('item', { active: sameElevation })}
        onClick={() => {
          updateSameElevation(!sameElevation);
          setSameElevation(!sameElevation);
        }}>
        Same Elevation
      </div>
      <div
        className={cn('item', { active: showRoof })}
        onClick={() => {
          updateRoofMode(!showRoof);
          setShowRoof(!showRoof);
        }}>
        Show Roof
      </div>
      <div
        className={cn('item', { active: visibility })}
        onClick={() => {
          updateVisibility(!visibility);
          setVisibility(!visibility);
        }}>
        Visibility
      </div>
    </div>
  );
};

export default Scene_Header;
