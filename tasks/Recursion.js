let myArr = [1, 2, 3, 4];
let mySum = 0;

function sum(arr, n) {

    if (n <= 0) {
      return 0;
    } else {
      return sum (arr, n - 1) + arr[n - 1];
    }
}

sum(myArr, 3);