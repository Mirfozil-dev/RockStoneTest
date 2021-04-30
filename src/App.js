import './App.scss';
import React, { useEffect, useState } from 'react';

function App() {
  let [xStart, setXStart] = useState(null);
  let [time, setTime] = useState('');
  let [text, setText] = useState([]);

  function getTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    setTime(`${h}:${m}:${s}`);
  }

  function enterText() {
    let textHolder = '';
    let textArea = document.querySelector('textarea');
    let textAreaValue = document.querySelector('textarea').value;
    for (let i = 0; i < textAreaValue.length; i++) {
      setTimeout(() => {
        textHolder += textAreaValue.charAt(i);
        setText([...text, textHolder]);
      }, i * 130);
    }
    textArea.value = '';
  }

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

  useEffect(() => {
    getTime();
    setInterval(getTime, 1000);
  }, []);

  return (
    <div className="App">
      <div className="body" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className="left_block">
          <div className="left_block__top">
            <textarea placeholder="Enter some awesome words..." />
            <button onClick={enterText}>Send</button>
          </div>
          <div className="left_block__paragraph">{
            text.map((item, index) => {
              return (
                <p key={index}>
                  {item}
                  <br />
                </p>
              );
            })
          }</div>
        </div>
        <div className="right_block">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
