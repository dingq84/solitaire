import React, { useState } from 'react';

import play from './assets/images/ic_play_24px.svg';
import pause from './assets/images/ic_pause_24px.svg';


export default function useClock() {
  const [isStop, setIsStop] = useState(false);
  const [time, setTime] = useState('00:00');

  let int;
  if (!isStop) {
    int = setTimeout(() => {
      const [min, sec] = time.split(':');
      let newTotalSeconds = parseInt(min) * 60 + parseInt(sec) + 1;
      let [newMin, newSec] = [Math.floor(newTotalSeconds / 60).toString(), (newTotalSeconds % 60).toString()];
      newMin = (newMin.length === 1) ? '0' + newMin : newMin;
      newSec = (newSec.length === 1) ? '0' + newSec : newSec;
      setTime(newMin + ':' + newSec);
    }, 1000);
  }

  function handleClick() {
    setIsStop(!isStop);
    clearTimeout(int);
  }

  const pauseDOM =
    <div onClick={handleClick}>
      <img
        src={(isStop) ? play : pause}
        alt={(isStop) ? 'play' : 'pause'}
      />
      <span>{(isStop) ? 'PLAY' : 'PAUSE'}</span>
    </div>

  return [isStop, time, pauseDOM];
}