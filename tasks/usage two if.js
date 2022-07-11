let enoughDevelopers = true;
let techAvailable = false;

let message = 'Проект нельзя выполнить';

if (enoughDevelopers) {
    if (techAvailable) {
      message = 'Проект можно выполнить';
      }
  }
console.log(message);


// ver 2
/*let enoughDevelopers = true;
let techAvailable = true;
let onVacation = true;
let onSickLeave = false;

if (enoughDevelopers && techAvailable) {
  console.log('Проект можно выполнить');
}

if (onVacation || onSickLeave) {
  console.log('Проект нельзя выполнить');
}*/

/*
// ver 3
let enoughDevelopers = true;
let techAvailable = true;
let onVacation = false;
let onSickLeave = false;

if (enoughDevelopers && techAvailable && !onVacation && !onSickLeave) {
  console.log('Проект можно выполнить');
} else {
  console.log('Проект нельзя выполнить');
}
*/

