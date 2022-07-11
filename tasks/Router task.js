let time = 12;

let goToDairy = false;
let goToStore = false;
let goToMarket = false;

if (time > 8 && time < 13 || time >= 14 && time < 19) {
    goToDairy = true;
  } else if (time >= 9 && time < 14 || time > 15 && time < 17) {
      goToStore = true;
    } else if (time >= 7 && time < 20) {
        goToMarket = true;
      } else {
          goToDairy = false;
          goToStore = false;
          goToMarket = false;
        }

/* Техническое задание

Напиши программу, которая определит ближайшее работающее место с молоком.

Время записано в часах в переменную time.

Молокозавод находится ближе всех. Он начинает работать в 8, а закрывается в 19. Перерыв на обед с 13 до 14.

Дальше находится магазин. Он работает с 9 до 17. Перерыв на обед с 14 до 15.

Дальше всех находится рынок. Он работает с 7 до 20 без перерывов.

В остальное время все места закрыты и можно никуда не ходить.

Вычисли, куда надо пойти за молоком и запиши значение true в одну из переменных: goToDairy (молокозавод), goToStore (магазин), goToMarket (рынок).

*/
