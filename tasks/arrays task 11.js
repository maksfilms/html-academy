let numbers = [0,17,0,0,15,2,2];
let number = 15;
let lastIndex = 0;

let allIndexs;

for (let i = numbers.length - 1; i >= 0; i--) {
    if (number === numbers[i]) {
      lastIndex = i;
      break;
      } else {
        lastIndex = -1;
        }
    
  }  
console.log(lastIndex);
 
/* Техническое задание

Напишите программу, которая будет находить последний индекс элемента в массиве.

Массив записан в переменную numbers.

Элемент, последний индекс которого надо найти, записан в переменную number.

Создайте переменную lastIndex и записывайте в неё последний индекс числа number. Если числа number в массиве нет, переменная lastIndex должна быть равна -1.

*/