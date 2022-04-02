import React, { useEffect, useRef } from 'react';
import WebGL from '../../WebGL/WebGL';
import './index.scss';

let wg;

const MainScreen = ({ breadcrumb }) => {
  const screenRef = useRef(null);

  useEffect(() => {
    wg = new WebGL(screenRef.current);
    wg.init();
    window.addEventListener('mousemove', (e) => {});
    window.addEventListener('resize', () =>
      wg.onWindowResize(
        screenRef.current.clientWidth,
        screenRef.current.clientHeight,
      ),
    );
  }, []);

  return (
    <div className="main-screen">
      <div className="title-bar">
        <p className="breadcrumb">{breadcrumb}Rubber Flooring Rolls</p>
      </div>
      <div className="screen" ref={screenRef}></div>
    </div>
  );
};

export default MainScreen;
