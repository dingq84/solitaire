import React, {useEffect} from 'react';

import CardsData from './CardsData';
import {CardsModel} from './CardsModel';

import './_Main.scss';
export default function Main(){
  const [one, two, three, four, five, six ,seven, eight] = CardsData();

  function dragStart(e){
    console.log(e.target.id);
    e.dataTransfer.setData('text/plain', e.target.id);
  }

  function drop (e) {
    // console.log('dropped')
    cancelDefault(e)
    let id = e.dataTransfer.getData('text/plain');
    const target = document.getElementById(id);
    console.log(e.target.style.top !== '' && e.target.style.top.replace('%', ''))
    
    target.style.top = e.target.style.top ? '10%' : '0%';
    target.style.left = '0';
    target.style.zIndex = parseInt(e.target.style.zIndex) + 1 || '0';
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
      <div className="solitaire__wrap__place">
        <div className="solitaire__wrap__place__left">
          <div 
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
          <div 
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
          <div 
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
          <div 
            className="solitaire__wrap__place__left__items"
            onDragOver={(e) => cancelDefault(e)}
            onDragEnter={(e) => cancelDefault(e)}
            onDrop={(e) => drop(e)}
          ></div>
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
          {
            one.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__second"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            two.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__third"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            three.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__forth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            four.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__fifth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            five.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__sixth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            six.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__seventh"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            seven.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__eighth"
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
        >
          {
            eight.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
                zIndex = {index}
                dragStart={dragStart}
                dragOver={cancelDefault}
                dragEnter={cancelDefault}
                drop={drop}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}
