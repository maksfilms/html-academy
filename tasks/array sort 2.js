let numbers = [4, 6, 2, 11, 1, 3, 7, 12, 10, 9, 5, 8];
console.log('Массив до сортировки: ' + numbers);

for (let i = 0; i <= numbers.length -1; i++) {
    let min = numbers[i];

    for (let j = i + 1; j <= numbers.length -1; j++) {
        if (numbers[j] < min) {
            min = numbers[j];
            let forSwap = numbers[i];
            numbers[i] = min;
            numbers[j] = forSwap;
        }
    }
}
console.log('Массив после сортировки: ' + numbers);