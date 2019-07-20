import React from 'react';

export default function CardsData(dragStart, drop, cancelDefault){
  const suits = ['spade', 'heart', 'diamond', 'club'];
  const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  let totalCards = [];
  for(let i = 0; i < suits.length; i++){
    for (let j = 0; j < cards.length; j++){
      totalCards.push(
        <img
          key={suits[i] + cards[j]}
          id={suits[i] + cards[j]}
          src={require(`./assets/images/card-${suits[i]}-${cards[j]}.svg`)}
          alt={suits[i] + cards[j]}
          onDragStart={(e) => dragStart(e)}
          onDragOver={(e) => cancelDefault(e)}
          onDragEnter={(e) => cancelDefault(e)}
          onDrop={(e) => drop(e)}
          draggable="true"
        >
        </img>
      )
    }
  }

  function shuffle(a){
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const split = totalCards => {
    const arr = [[], [], [] ,[], [], [], [], []];
    const shuffledArray = shuffle(totalCards);
    for(let i = 0; i <shuffledArray.length; i++){
      switch (i % 8) {
        case 1:
          arr[0].push(shuffledArray[i]);
          break;
        case 2:
          arr[1].push(shuffledArray[i]);
          break;
        case 3:
          arr[2].push(shuffledArray[i]);
          break;
        case 4:
          arr[3].push(shuffledArray[i]);
          break;
        case 5:
          arr[4].push(shuffledArray[i]);
          break;
        case 6:
          arr[5].push(shuffledArray[i]);
          break;
        case 7:
          arr[6].push(shuffledArray[i]);
          break;
        default:
          arr[7].push(shuffledArray[i]);
        }
    }

    return arr;
  }

  return split(totalCards);
}
