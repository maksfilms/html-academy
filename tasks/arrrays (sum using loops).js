//summing in array using loop

let usersByDay = [812, 1360, 657, 1247];
let totalUsers = 0;

for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
}
console.log(totalUsers);