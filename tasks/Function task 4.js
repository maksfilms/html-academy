let getDiet = function (dishesCalories, caloriesLimit) {
    let sumCalories = 0;
    let portions = 0;

    for (let i = 0; i <= dishesCalories.length - 1; i++) {
        if (sumCalories < caloriesLimit) {
            sumCalories += dishesCalories[i];
            portions++;
        }
        if (sumCalories > caloriesLimit) {
            sumCalories -= dishesCalories[i];
            portions--;
        }
    }
    return (portions);
}

let dishes = [300, 700, 500, 600, 200];
getDiet(dishes, 1100);

/* Техническое задание

Напиши программу, которая будет анализировать мой суточный рацион.

Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.

Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.

*/