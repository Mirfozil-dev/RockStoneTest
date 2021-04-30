import React, { useState } from 'react';

const LeftBlock = () => {
  let [text, setText] = useState([]);

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

  return (
    <div>
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
    </div>
  );
};
export default LeftBlock;