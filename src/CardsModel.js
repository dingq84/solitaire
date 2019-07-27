import React, { useState, useEffect } from 'react';

import CardsData from './CardsData';

import club from './assets/images/club-24px.svg';
import diamond from './assets/images/diamond-24px.svg';
import heart from './assets/images/heart-24px.svg';
import spade from './assets/images/spade-24px.svg';

let isStopFlag;

export default function CardsModel(isStop, newGame, recordStep) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(CardsData(dragStart, drop, cancelDefault))
  }, [newGame]);

  useEffect(() => {
    isStopFlag = isStop;
  }, [isStop]);

  function dragStart(e) {
    if (isStopFlag || e.target !== e.target.parentNode.lastChild || e.target.className === 'left')
      e.preventDefault()
    else
      e.dataTransfer.setData('text/plain', e.target.id);
  }

  function drop(e) {
    cancelDefault(e);
    const id = e.dataTransfer.getData('text/plain');
    const target = document.getElementById(id);
    const targetParrent = target.parentNode.className;
    const targetZIndex = target.style.zIndex;
    const targetTop = target.style.top;
    //左上方只能放一張 
    if (e.target.className === 'right') {
      return
      // if it drops the same place, it will do nothing.
    } else if (e.target.parentNode.className === target.parentNode.className) {
      return
    } else if (e.target.className.indexOf('solitaire__wrap__place__right__items') !== -1) {
      target.style.top = '0px';
      target.className = 'right';
      e.target.appendChild(target);
    } else if (e.target.className.indexOf('solitaire__wrap__place__left__items') !== -1) {
      const [targetSuit, targetCard] = target.id.split('-');
      if (e.target.childNodes[0].id === targetSuit && targetCard === '1') {
        target.style.zIndex = '';
        target.style.top = '0px';
        target.className = 'left';
        e.target.appendChild(target);
      } else
        return;
    } else if (e.target.className === 'left') {
      const [targetSuit, targetNumber] = e.target.id.split('-');
      const [currentSuit, currentNumber] = target.id.split('-');
      if (targetSuit !== currentSuit || parseInt(targetNumber) !== parseInt(currentNumber) - 1)
        return;

      target.style.zIndex = '';
      target.style.top = '0px';
      target.className = 'left';
      e.target.parentNode.appendChild(target);
    } else if (e.target.className === '') {
      //放到其他排堆
      const lastCard = e.target.parentNode.lastChild;
      const [lastCardSuit, lastCardNumber] = lastCard.id.split('-');
      const [currentSuit, currentNumber] = target.id.split('-');
      if (parseInt(currentNumber) + 1 !== parseInt(lastCardNumber) ||
        (['spade', 'club'].includes(currentSuit) && ['spade', 'club'].includes(lastCardSuit)) ||
        (['heart', 'diamond'].includes(currentSuit) && ['heart', 'diamond'].includes(lastCardSuit))
      )
        return;

      const lastValue = lastCard.style.top.replace('px');
      target.className = '';
      target.style.top = (parseInt(lastValue) + 32).toString() + 'px';
      target.style.zIndex = lastCard.style.zIndex + 1;
      e.target.parentNode.appendChild(target);
    } else if (e.target.className.indexOf('solitaire__wrap__cards__') !== -1) {
      target.className = '';
      target.style.top = '0px';
      target.style.zIndex = 0;
      e.target.appendChild(target);
    }

    recordStep({
      parrent: `.${targetParrent}`,
      target: id,
      targetZIndex: targetZIndex,
      targetTop: targetTop
    });
  }

  function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  const cardsDOM =
    datas.map((data, index) =>
      <div
        key={index}
        className={`solitaire__wrap__cards__${index}`}
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      >
        {
          data.map((el, idx) => {
            return React.cloneElement(el, {
              style: {
                top: `${idx * 32}px`,
                position: 'absolute',
                left: '0',
                transition: '.3s'
              }
            })
          })
        }
      </div>
    );
  const leftDOM =
    <div className="solitaire__wrap__place__left">
      <div
        className="solitaire__wrap__place__left__items1"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      >
        <img
          src={spade}
          alt='spade'
          id='spade'
          className='solitaire__wrap__place__left__items1__icon'
        ></img>
      </div>
      <div
        className="solitaire__wrap__place__left__items2"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      >
        <img
          src={heart}
          alt='heart'
          id='heart'
          className='solitaire__wrap__place__left__items2__icon'
        >
        </img>
      </div>
      <div
        className="solitaire__wrap__place__left__items3"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      >
        <img
          src={club}
          alt='club'
          id='club'
          className='solitaire__wrap__place__left__items3__icon'
        >
        </img>
      </div>
      <div
        className="solitaire__wrap__place__left__items4"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      >
        <img
          src={diamond}
          alt='diamond'
          id='diamond'
          className='solitaire__wrap__place__left__items4__icon'
        >
        </img>
      </div>
    </div>
  const rightDOM =
    <div className="solitaire__wrap__place__right">
      <div
        className="solitaire__wrap__place__right__items1"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      ></div>
      <div
        className="solitaire__wrap__place__right__items2"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      ></div>
      <div
        className="solitaire__wrap__place__right__items3"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      ></div>
      <div
        className="solitaire__wrap__place__right__items4"
        onDragOver={(e) => cancelDefault(e)}
        onDragEnter={(e) => cancelDefault(e)}
        onDrop={(e) => drop(e)}
      ></div>
    </div>
  return [leftDOM, rightDOM, cardsDOM];
}