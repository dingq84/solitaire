import React, {useEffect} from 'react';

import CardsData from './CardsData';
// import {CardsModel} from './CardsModel';

import club from './assets/images/club-24px.svg';
import diamond from './assets/images/diamond-24px.svg';
import heart from './assets/images/heart-24px.svg';
import spade from './assets/images/spade-24px.svg';
import restart from './assets/images/ic_loop_24px.svg';
import pause from './assets/images/ic_pause_24px.svg';
import undo from './assets/images/ic_undo_24px.svg';

import './_Main.scss';

export default function Main() {
  const [one, two, three, four, five, six ,seven, eight] = CardsData(dragStart, drop, cancelDefault);

  function dragStart(e){
    if (e.target === e.target.parentNode.lastChild)
      e.dataTransfer.setData('text/plain', e.target.id);
    else 
      e.preventDefault();
  }

  function drop (e) {
    cancelDefault(e)
    let id = e.dataTransfer.getData('text/plain');
    const target = document.getElementById(id);

    //左上方只能放一張 
    if (e.target.className === 'left') {
      return 
      // e.target.parentNode.appendChild(target)
      //放到左上方
    } else if (e.target.className === 'solitaire__wrap__place__left__items') {
      target.style.top = '0px';
      target.className = 'left';
      e.target.appendChild(target);
      //放到其他排堆
      //TODO 比卡片花色和大小
    } else if (e.target.className === '') {
      console.log(e.target.style);
      const value = e.target.style.top.replace('px');
      target.className = '';
      target.style.top = (parseInt(value) + 32).toString() + 'px';
      target.style.zIndex = e.target.style.zIndex + 1;
      e.target.parentNode.appendChild(target);
    } else if (e.target.className.indexOf('solitaire__wrap__cards__') !== -1) {
      target.style.top = '0px';
      target.style.zIndex = 0;
      e.target.appendChild(target);
    }
  }

  function cancelDefault(e){
    console.log('dragenter');
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
          <div>
            <img
              src={undo}
              alt='undo'
            >
            </img>
            <span>UNDO</span>
          </div>
          <div>
            <img
              src={pause}
              alt='pause'
            >
              
            </img>
            <span>PAUSE</span>
          </div>
          <div>
            <img
              src={restart}
              alt='restart'
            >
              
            </img>
            <span>RESTART</span>
          </div>
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
              className='solitaire__wrap__place__left__items__icon'
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
              className='solitaire__wrap__place__left__items__icon'
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
              className='solitaire__wrap__place__left__items__icon'
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
              className='solitaire__wrap__place__left__items__icon'
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
          // onDragOver={(e) => cancelDefault(e)}
          // onDragEnter={(e) => cancelDefault(e)}
          // onDrop={(e) => drop(e)}
        >
          {
           one.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             {/* item.props.style.zIndex = index; */}
             return item
           })
          }
        </div>
        <div className="solitaire__wrap__cards__second"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            two.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             item.props.style.zIndex = index;
             return item
           })
          }
        </div>
        <div className="solitaire__wrap__cards__third"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            three.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             item.props.style.zIndex = index;
             return item
           })
          }
        </div>
        <div className="solitaire__wrap__cards__forth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            four.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             item.props.style.zIndex = index;
             return item
           })
          }
        </div>
        <div className="solitaire__wrap__cards__fifth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            five.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             item.props.style.zIndex = index;
             return item
           })
          }
        </div>
        <div className="solitaire__wrap__cards__sixth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            six.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             item.props.style.zIndex = index;
             return item
           })
          }
        </div>
        <div className="solitaire__wrap__cards__seventh"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            seven.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             item.props.style.zIndex = index;
             return item
           })
          }
        </div>
        <div className="solitaire__wrap__cards__eighth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            eight.map((item, index) => {
             item.props.style.top = `${index * 32}px`;
             item.props.style.zIndex = index;
             return item
           })
          }
        </div>
      </div>
    </div>
  )
}
