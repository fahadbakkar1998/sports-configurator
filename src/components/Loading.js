import React from 'react';
import useZustand from '../utils/use.zustand';
import cn from 'classnames';

const Loading = () => {
  const { loading } = useZustand();

  return (
    <div className={cn('Loading', { active: loading })}>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
