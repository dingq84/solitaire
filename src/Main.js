import React, {useEffect} from 'react';

import CardsData from './CardsData';
// import {CardsModel} from './CardsModel';

import club from './assets/images/club-24px.svg';
import diamond from './assets/images/diamond-24px.svg';
import heart from './assets/images/heart-24px.svg';
import spade from './assets/images/spade-24px.svg';

import './_Main.scss';

export default function Main(){
  const [one, two, three, four, five, six ,seven, eight] = CardsData(dragStart, drop, cancelDefault);

  function dragStart(e){
    console.log(e.target.id);
    e.dataTransfer.setData('text/plain', e.target.id);
  }

  function drop (e) {
    // console.log('dropped')
    cancelDefault(e)
    let id = e.dataTransfer.getData('text/plain');
    const target = document.getElementById(id);
    console.log(e.target)

    // target.style.top = e.target.style.top ? '10%' : '0%';
    // target.style.left = '0';
    // target.style.zIndex = parseInt(e.target.style.zIndex) + 1 || '0';
    e.target.appendChild(target);
  }

  function cancelDefault(e){
    // console.log('dragenter');
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  return (
    <div className="solitaire__wrap">
      <div className="solitaire__wrap__sidebar">
        <div className="solitaire__wrap__sidebar__flag">
          <span>FREE</span>
          <span>CELL</span>
        </div>
        <span className="solitaire__wrap__sidebar__time">
          00:30
        </span>
        <div className="solitaire__wrap__sidebar__buttons">
          <button>UNDO</button>
          <button>PAUSE</button>
          <button>RESTART</button>
        </div>
      </div>
      <div className="solitaire__wrap__place">
        <div className="solitaire__wrap__place__left">
          <div
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          >
            <img
              src={spade}
              alt='spade'
            ></img>
          </div>
          <div
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          >
            <img
              src={heart}
              alt='heart'
            >
            </img>
          </div>
          <div
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          >
            <img
              src={club}
              alt='club'
            >
            </img>
          </div>
          <div
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          >
            <img
              src={diamond}
              alt='diamond'
            >
            </img>
          </div>
        </div>
        <div className="solitaire__wrap__place__right">
          <div
            className="solitaire__wrap__place__right__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
          <div
            className="solitaire__wrap__place__right__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
          <div
            className="solitaire__wrap__place__right__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
          <div
            className="solitaire__wrap__place__right__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
        </div>
      </div>
      <div className="solitaire__wrap__cards">
        <div
          className="solitaire__wrap__cards__first"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {one.map(item => item)}
        </div>
        <div className="solitaire__wrap__cards__second"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {two.map(item => item)}
        </div>
        <div className="solitaire__wrap__cards__third"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {three.map(item => item)}
        </div>
        <div className="solitaire__wrap__cards__forth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {four.map(item => item)}
        </div>
        <div className="solitaire__wrap__cards__fifth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {five.map(item => item)}
        </div>
        <div className="solitaire__wrap__cards__sixth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {six.map(item => item)}
        </div>
        <div className="solitaire__wrap__cards__seventh"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {seven.map(item => item)}
        </div>
        <div className="solitaire__wrap__cards__eighth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {eight.map(item => item)}
        </div>
      </div>
    </div>
  )
}
