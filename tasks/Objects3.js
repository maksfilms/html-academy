let diceNumber = 2;

let firstCat = {
  name: 'Кекс',
  points: 0
};

let secondCat = {
  name: 'Рудольф',
  points: 0
};

let cats = [firstCat, secondCat];


let runGame = function (quantity, players) {
  for (let i = 0; i < players.length; i++) {
    let throwResult = keks.throwDice(quantity, quantity * 6);
    players[i].points += throwResult;
    console.log(players[i].name + ' выбросил ' + players[i].points);
  }
  return(players);
};

cats = runGame(diceNumber, cats);
console.log(cats);
