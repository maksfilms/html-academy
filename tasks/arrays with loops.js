let expectedUsers = 1000;

let usersByDay = [812, 1360, 657, 1247];

// Рисуем график посещаемости
keks.plot(usersByDay, expectedUsers);

for (let i = 0; i <= usersByDay.length - 1; i++) {
  console.log(usersByDay[i]);  
}

// Рассчитываем среднее значение посещаемости
let averageUsers = 0;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}
