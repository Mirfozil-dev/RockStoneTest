import React, { useEffect, useState } from 'react';

const RightBlock = () => {
  let [time, setTime] = useState('');

  function getTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    setTime(`${h}:${m}:${s}`);
  }

  useEffect(() => {
    getTime();
    setInterval(getTime, 1000);
  }, []);

  return (
    <div>
      <div className="right_block">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default RightBlock;