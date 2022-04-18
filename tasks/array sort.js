let array = [3, 5, 4, 1, 6, 2];

for (let index = 0; index <= array.length - 1; index++) {
    let minNumber = array[index];

    for (let j = index + 1; j <= array.length - 1; j++) {
        if (minNumber > array[j]) {
            minNumber = array[j];
            let swap = array[index];
            array[index] = minNumber;
            array[j] = swap;
        }
    }
}
console.log(array)