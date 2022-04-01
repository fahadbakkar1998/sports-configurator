import React from 'react';
import MainScreen from './components/layout/MainScreen';
import LeftBar from './components/layout/LeftBar';
import RightBar from './components/layout/RightBar';

import './app.scss';

const App = () => (
  <div className="main">
    <LeftBar />
    <MainScreen />
    <RightBar />
  </div>
);

export default App;
