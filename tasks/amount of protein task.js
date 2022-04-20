let days = 25; // Дней в периоде
let evenDayAmount = 200; // Количество протеина в чётные дни
let oddDayAmount = 100; // Количество протеина в нечётные дни
let total = 0; // Общее количество протеина

for (let i = 1; i <= days; i++) {
    if (i % 2 === 0) {
        total += evenDayAmount;
      } else {
        total += oddDayAmount;
        }
  }

console.log(total);

/* Техническое задание

Программа должна считать сколько протеина я должен выпить за весь тренировочный период.

В чётные дни я пью 200 грамм. В нечётные 100 грамм.


*/
