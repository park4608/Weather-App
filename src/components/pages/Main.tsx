import React from 'react';
import Widget from '../widget/Widget';
import WorldMap from './worldMap/WorldMap';

function Main() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <WorldMap />
        {/* <Widget /> */}
      </div>
    </>
  );
}

export default Main;
