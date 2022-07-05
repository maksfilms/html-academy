let getSortedArray = function (arr, key) {
  
    for (i = 0; i <= arr.length - 1; i ++) {
      let minValue = arr[i];
     
      for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[j][key] < minValue[key]) {
           minValue = arr[j];
           let swap = arr[i];
           arr[i] = minValue;
           arr[j] = swap;
          }
        }
      }
      return arr;
    }
  /*
  Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.
  
  Функция должна возвращать отсортированный массив объектов.
  
  Значения в массиве должны увеличиваться от меньшего к большему
  */
  