let luggage = ['пакет', 'мяч', 'тапки', 'когтеточка', 'коробка', 'миска', 'мята'];
let startIndex = 2;
let quantity = 4;
let chosenLuggage = [];

for (let i = startIndex; i <= luggage.length -1; i++) {
  if (chosenLuggage.length < quantity) {
        chosenLuggage.push(luggage[i]);
      } else {continue}
}
console.log(chosenLuggage);

/* Техническое задание

Напиши программу, которая на основе одного массива c багажом создаст другой.

Изначальный массив с багажом записан в переменную luggage.

Индекс элемента, с которого нужно начинать добавлять багаж (включая этот элемент), записан в переменную startIndex.

Количество элементов, которые нужно взять с собой записано в переменную quantity.

Собери новый массив на основе изначального, добавляя элементы последовательно (от меньшего индекса к большему). 
Выбирай определённое количество элементов из массива luggage, начиная с элемента с индексом startIndex, и добавляй их 
в новый массив. Он должен быть записан в переменную chosenLuggage.
*/