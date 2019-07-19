import React from 'react';


export const CardsModel = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: props.left,
        top: props.top,
      }}
      draggable="true"
    >
      {props.data}
    </div>
  )
}
