import './App.scss';
import React, { useState } from 'react';
import LeftBlock from './components/LeftBlock.jsx';
import RightBlock from './components/RightBlock.jsx';

const App = () => {
  let [xStart, setXStart] = useState(null);

  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    setXStart(firstTouch.clientX);
  }

  function handleTouchMove(event) {
    let changeX = event.touches[0].clientX - xStart;
    let leftBlock = document.querySelector('.left_block');
    let rightBlock = document.querySelector('.right_block');
    if (changeX < -100) {
      // SWIPE LEFT
      leftBlock.style.left = '-100%';
      rightBlock.style.left = '0';

    } else if (changeX > -100) {
      // SWIPE RIGHT
      leftBlock.style.left = '0';
      rightBlock.style.left = '100%';
    }
  }

  return (
    <div className="App">
      <div className="body" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <LeftBlock />
        <RightBlock />
      </div>
    </div>
  );
};

export default App;
