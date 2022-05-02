let numbers = [4, 2, 1, 3, 6, 7, 9 , 5 , 8];
console.log(numbers);


for (let index = 0; index <= numbers.length - 1; index++) {
    let minNumber = numbers[index];

for (let j = index + 1; j <= numbers.length - 1; j++) {
  if (numbers[j] < minNumber) {
    minNumber = numbers[j];
    let swap = numbers[index];
    numbers[index] = minNumber;
    numbers[j] = swap;
  }
}

}

console.log(numbers)