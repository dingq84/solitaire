import React from 'react';

export default function CardsData(){
  const suits = ['spade', 'heart', 'diamond', 'club'];
  const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let totalCards = [];
  for(let i = 0; i < suits.length; i++){
    for (let j = 0; j < cards.length; j++){
      totalCards.push(suits[i] + cards[j])
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
      const shuffledArray = shuffle(totalCards);
      let one = [];
      let two = [];
      let three = [];
      let four = [];
      for(let i = 0; i <shuffledArray.length; i++){
        if(i < 13)
          one.push(shuffledArray[i])
        else if(i >= 13 && i < 26)
          two.push(shuffledArray[i])
        else if (i >= 26 && i < 39)
          three.push(shuffledArray[i])
        else
          four.push(shuffledArray[i]);
      }
      return [one, two, three, four]
  }



  return split(totalCards);
}
