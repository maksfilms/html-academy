let lastNumber = 12;
let multiplicationResult = 1;

for (let i = 1; i <= lastNumber; i++) {
    if (i % 2 === 0) {
        multiplicationResult *= i;
    } else {
        continue
    }
    console.log(multiplicationResult);
}

/* Техническое задание

Напишите универсальную программу, которая находит произведение всех чётных чисел из последовательности от 1 до n.

Число, до которого идёт последовательность (включительно), записано в переменную lastNumber

Найдите произведение всех чисел и сохраните результат в переменную multiplicationResult.

*/
