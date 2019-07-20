import React from 'react';


export const CardsModel = (props) => {
  const bgc = {
    '0': 'orange',
    '1': 'red',
    '2': 'green',
    '3': 'yellow',
    '4': 'white',
    '5': 'blue',
    '6': 'purple',
    '7': 'grey'
  }

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: props.zIndex,
        top: props.top,
        backgroundColor: bgc[props.zIndex]
      }}
      draggable="true"
      id={props.data}
      onDragStart={(e) => props.dragStart(e)}
      onDragOver={(e) => props.dragOver(e)}
      onDragEnter={(e) => props.dragEnter(e)}
      onDrop={(e) => props.drop(e)}
    >
      {props.data}
    </div>
  )
}
