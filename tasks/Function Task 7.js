let getYears = function (firstYear, finishYear, num) {
    let years = [];
    let final = [];

    for (let i = firstYear; i <= finishYear; i++) {
        years.push(String(i));
    }

    for (let j = 0; j <= years.length - 1; j++) {
        let testDate = years[j];
        let sum = Number(testDate[0]) + Number(testDate[1]) + Number(testDate[2]) + Number(testDate[3]);

        if (sum === num) {
            final.push(Number(years[j]));
        }
    }
    return (final);
}

getYears(2021, 2058, 7);

/* Техническое задание

Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

Названия параметров могут быть любыми.

Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.

Например:
2025 год
Складываем каждую цифру
2 + 0 + 2 + 5 = 9
Сумма равна 9, 2025 год нам подходит

2019 год
2 + 0 + 1 + 9 = 12
Сумма равна 12, 2019 год не годится

*/
  