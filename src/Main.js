import React from 'react';

import CardsData from './CardsData';

import './_Main.scss';
export default function Main(){
  const  [one, two, three, four] = CardsData();
  
  return (
    <div className="solitaire__wrap">
      <div className="solitaire__wrap__place">

      </div>
      <div className="solitaire__wrap__cards">
        <div className="solitaire__wrap__cards__first">
          {one}
        </div>
        <div className="solitaire__wrap__cards__second">
          {two}
        </div>
        <div className="solitaire__wrap__cards__third">
          {three}
        </div>
        <div className="solitaire__wrap__cards__forth">
          {four}
        </div>
      </div>
    </div>
  )
}
