import React from 'react';
import LeftBar from './components/LeftBar/LeftBar';
import Scene from './components/Scene/Scene';
import RightBar from './components/RightBar/RightBar';
import Scene_Content from './components/Scene/Scene_Content';
import { createStore } from 'state-pool';
import './App.scss';

window.globalStore = createStore();
globalStore.setState('blueprintJS');

const App = () => (
  <div className="App">
    <LeftBar />
    <Scene />
    <RightBar />
    <Scene_Content></Scene_Content>
  </div>
);

export default App;
