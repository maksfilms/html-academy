let calculateDeposit = function (deposit, precent, term, kapital) {
    let sum = deposit;
    
    if(!kapital) {
      let yearPrecent = (precent / 12 * term);
      sum = (sum / 100 * yearPrecent) + sum;
      } else {
        for (let i = 0; i < term; i++) {
           sum += (precent / 100 / 12) * sum;
          }
        }   
    return(Math.floor(sum));
  };
  
  /* Техническое задание
  
  Мне нужно посчитать, сколько я накоплю, если положу деньги в банк на разных условиях. Оформи программу, как функцию calculateDeposit с четырьмя параметрами:
  
  1. начальная сумма депозита;
  2. процент годовых (число от 0 до 100);
  3. срок вклада в месяцах;
  4. с капитализацией процентов или нет (флаг с булевым значением).
  
  Функция должна возвращать итоговую сумму депозита, округлённую до рублей с помощью Math.floor. Название параметров используй любые.
  
  Если вклад простой, то процент годовых делится на 12 и умножается на срок вклада, а затем начальная сумма увеличивается на посчитанный процент.
  
  Вклад с капитализацией считается сложнее: каждый месяц к сумме депозита прибавляются накопленный за месяц процент годовых, а процент следующего месяца считается уже от увеличенной суммы депозита.
  
  */
  