let incomeTax = 13;
let contributions = 30;

let calculateExpenses = function (netSalary) {
    let taxOne = (netSalary * 100) / (100 - incomeTax) - netSalary;
    let grossSalary = taxOne + netSalary;
    let taxTwo = grossSalary / 100 * contributions;
    let expenses = Math.round(taxOne + taxTwo + netSalary);
    return (expenses);
}

/* Техническое задание

Напиши функцию calculateExpenses, которая вычисляет ежемесячные затраты компании на сотрудника из «чистой» зарплаты работника.

Функция должна принимать параметр netSalary – это «чистая» зарплата после вычета налогов.

В переменную incomeTax записан размер НДФЛ в процентах.

В переменной contributions указан общий размер взносов в процентах.

Функция должна возвращать общие затраты компании на сотрудника. Округляй результат вычислений с помощью Math.round.

*/