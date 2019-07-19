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
      let five = [];
      let six = [];
      let seven = [];
      let eight = [];
      for(let i = 0; i <shuffledArray.length; i++){
        switch (i % 8) {
          case 1:
            one.push(shuffledArray[i]);
            break;
          case 2:
            two.push(shuffledArray[i]);
            break;
          case 3:
            three.push(shuffledArray[i]);
            break;
          case 4:
            four.push(shuffledArray[i]);
            break;
          case 5:
            five.push(shuffledArray[i]);
            break;
          case 6:
            six.push(shuffledArray[i]);
            break;
          case 7:
            seven.push(shuffledArray[i]);
            break;
          default:
            eight.push(shuffledArray[i]);

        }
      }
      return [one, two, three, four, five, six ,seven, eight]
  }



  return split(totalCards);
}
