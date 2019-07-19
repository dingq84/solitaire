import React from 'react';

import CardsData from './CardsData';
import {CardsModel} from './CardsModel';

import './_Main.scss';
export default function Main(){
  const [one, two, three, four, five, six ,seven, eight] = CardsData();

  return (
    <div className="solitaire__wrap">
      <div className="solitaire__wrap__place" onDragOver="false">

      </div>
      <div className="solitaire__wrap__cards">
        <div className="solitaire__wrap__cards__first">
          {
            one.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__second">
          {
            two.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__third">
          {
            three.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__forth">
          {
            four.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__fifth">
          {
            five.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__sixth">
          {
            six.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__seventh">
          {
            seven.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
        <div className="solitaire__wrap__cards__eighth">
          {
            eight.map((item, index) =>
              <CardsModel
                key={index}
                data={item}
                top={`${index * 10}%`}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}
