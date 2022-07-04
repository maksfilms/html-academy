function getRepeats(array) {
    var repeats = {};
  
    for (var i = 0; i < array.length; i++) {
      var word = array[i]; 
  
      if (!repeats[word]) {
        repeats[word] = 1;
      } else if (repeats[word] > 0) {
        repeats[word] += 1;
      }
    }
  
    return repeats;
  };
  /*
  
  В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.
  
  Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.
  
  Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.
  
  
  */
  