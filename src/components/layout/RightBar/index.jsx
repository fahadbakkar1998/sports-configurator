import React from 'react';
import '../../../assets/styles/components/react-tabs/index.scss';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import Inspector from '../../common/inspector';
import Total from '../../common/total';

import './index.scss';

const RightBar = () => {
  return (
    <div className="right-bar">
      <div className="right-bar-categories">
        <p className="utils-save">Save</p>
        <p className="utils-share">Share</p>
        <p className="utils-addcart">Add to Cart</p>
      </div>
      <div className="right-bar-inner">
        <div className="right-bar-content">
          <Tabs>
            <TabList>
              <Tab>Inspector</Tab>
              <Tab>Total</Tab>
            </TabList>
            <TabPanel>
              <Inspector />
            </TabPanel>
            <TabPanel>
              <Total />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
