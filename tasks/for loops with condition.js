let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i > 5) {
    sum += 2;
  } else {
    sum += i;
  }

  console.log('i: ' + i);
  console.log('sum: ' + sum);
}
