let weight = 5;
let recommendation;

if (weight < 4) {
    recommendation = 'Пора перекусить';
  } else if (weight >= 4 && weight <= 5.5) {
      recommendation = 'Вес в норме';
    } else if (weight > 5.5) {
        recommendation = 'Пора на тренировку';
      }

console.log(recommendation);

/* Техническое задание

Запрограммируй умные весы, чтобы они давали рекомендации в зависимости от веса.

Вес записан в переменную weight.

Рекомендацию записывай строкой в переменную recommendation.

Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'.

Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.

Если вес больше 5.5 кг – 'Пора на тренировку'.

*/
