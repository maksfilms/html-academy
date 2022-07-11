// searching for even numbers

let sum = 0;

for (let i = 1; i <= 10; i++) {
  console.log('i: ' + i);
    if (i % 2 === 0) {
        sum += 2;
        console.log('чётное число');
      } else {
          sum ++;
          console.log('нечётное число');
        }

  console.log('sum: ' + sum);
}
