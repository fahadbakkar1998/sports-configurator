import React, { useState } from 'react';
import DetailDraft from '../detail-draft';
import DetailAdditional from '../detail-additional';
import './index.scss';

const Inspector = () => {
  const [expand, setExpand] = useState(false);
  const handleClick = () => setExpand(!expand);

  return (
    <div className="inspector">
      {expand ? <DetailAdditional /> : <DetailDraft />}
      <div className="footer" onClick={handleClick}>
        {expand ? 'Back' : 'Additional Features'}
      </div>
    </div>
  );
};

export default Inspector;
