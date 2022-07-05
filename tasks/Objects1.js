let diceNumber = 2;

let firstCat = {
  name: 'Кекс',
  points: 0
};

let secondCat = {
  name: 'Рудольф',
  points: 0
};


let runGame = function (quantity, firstPlayer, secondPlayer) {
  firstPlayer.points += keks.throwDice(quantity, quantity * 6);
  secondPlayer.points += keks.throwDice(quantity, quantity * 6);
  console.log(firstPlayer.name + ' выбросил ' + firstPlayer.points);
  console.log(secondPlayer.name + ' выбросил ' + secondPlayer.points);
};

runGame(diceNumber, firstCat, secondCat);
