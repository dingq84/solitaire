import React, { useState } from 'react';

import useClock from './useClock';
import CardsModel from './CardsModel';

import restart from './assets/images/ic_loop_24px.svg';
import undo from './assets/images/ic_undo_24px.svg';

import './_Main.scss';

export default function Main() {
  const [newGame, setNewGame] = useState(true);
  const [steps, setSteps] = useState([]);
  const [isStop, time, pauseDOM] = useClock(newGame);
  const [leftDOM, rightDOM, cardsDOM] = CardsModel(isStop, newGame, recordStep);

  //there are some problem, when card move to left or other cards,
  //steps will be empty
  function recordStep(value) {
    setSteps([...steps, value]);
  }

  function rollback() {
    if (steps.length !== 0) {
      const newSteps = [...steps];
      const lastStep = newSteps.pop();
      const { parrent, target, targetZIndex, targetTop } = lastStep;
      const targetNode = document.getElementById(target);
      const targetCurrentParent = targetNode.parentNode;
      targetCurrentParent.removeChild(targetNode);
      targetNode.className = '';
      targetNode.style.zIndex = targetZIndex;
      targetNode.style.top = targetTop;
      document.querySelector(parrent).appendChild(targetNode);
      setSteps(newSteps);
    }
  }

  return (
    <div className="solitaire__wrap">
      <div className="solitaire__wrap__sidebar">
        <div className="solitaire__wrap__sidebar__flag">
          <span>FREE</span>
          <span>CELL</span>
        </div>
        <span className="solitaire__wrap__sidebar__time">
          {time}
        </span>
        <div className="solitaire__wrap__sidebar__buttons">
          <div onClick={rollback}>
            <img src={undo} alt='undo' />
            <span>UNDO</span>
          </div>
          {pauseDOM}
          <div
            onClick={() => {
              if (window.confirm('Are you sure you want to restart the game?')) {
                setNewGame(!newGame);
                window.location.reload();
              }
            }}
          >
            <img src={restart} alt='restart' />
            <span>RESTART</span>
          </div>
        </div>
      </div>
      <div className="solitaire__wrap__place">
        {leftDOM}
        {rightDOM}
      </div>
      <div className="solitaire__wrap__cards">
        {cardsDOM}
      </div>
    </div>
  )
}
