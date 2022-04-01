import React from 'react';
import Dimensions from '../detail-additional/dimensions';
import NumberOfLanes from './number-of-lanes';
import LaneWidths from './lane-widths';
import MeshSize from './mesh-size';
import Gauge from './gauge';
import AdditionalFeatures from './additional-features';
import ShellCage from './shell-cage';
import MoreDetail from '../more-detail';

import './index.scss';

const DetailAdditional = () => {
  return (
    <>
      <MoreDetail />
      <Dimensions />
      <NumberOfLanes />
      <LaneWidths />
      <MeshSize />
      <Gauge />
      <AdditionalFeatures />
      <ShellCage />
    </>
  );
};

export default DetailAdditional;
