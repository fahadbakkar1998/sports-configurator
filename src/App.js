import React from 'react';
import LeftBar from './components/LeftBar/LeftBar';
import Scene from './components/Scene/Scene';
import RightBar from './components/RightBar/RightBar';
import './App.scss';

const App = () => (
  <div className="App">
    <LeftBar />
    <Scene />
    <RightBar />
  </div>
);

export default App;
