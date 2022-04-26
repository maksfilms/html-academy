let numbers = [1, 4, 5, 9, 2, 5, 1];
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) 
{
  
  let haveRepeat = false;
  
  for (let j = numbers.length; j >= 0; j--) 
  {
    if (i !== j && numbers[i] === numbers[j])
    { 
      haveRepeat = true; //
    }
  }
  
  if (!haveRepeat) {
    uniqueNumbers.push(numbers[i]) 
  };
}

/* Техническое задание

Напишите программу, которая создаёт массив уникальных значений (тех, что не повторяются), взятых из первого массива.

Исходный массив записан в переменную numbers.

Переберите массив и последовательно добавьте уникальные значения в массив uniqueNumbers. Для добавления новых элементов в массив можете использовать метод
array.push().

*/