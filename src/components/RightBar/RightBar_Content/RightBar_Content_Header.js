import React from 'react';
import useZustand from '../../../utils/useZustand';
import cn from 'classnames';

const RightBar_Content_Header = () => {
  const rightBarMode = useZustand((state) => state.rightBarMode);
  const setRightBarMode = useZustand((state) => state.setRightBarMode);

  return (
    <div className="RightBar_Content_Header">
      <div
        className={cn('item', { active: rightBarMode === 'INSPECTOR' })}
        onClick={() => setRightBarMode('INSPECTOR')}>
        Inspector
      </div>
      <div
        className={cn('item', { active: rightBarMode === 'TOTAL' })}
        onClick={() => setRightBarMode('TOTAL')}>
        Total
      </div>
    </div>
  );
};

export default RightBar_Content_Header;
