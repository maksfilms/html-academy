let calculateMiles = function (distance, isBusinessClass) {
    let percent = 0.18;
    if (isBusinessClass) {
      percent += 0.04;
    } if (distance > 3500) {
        percent += 0.15;
      }
    return distance * percent;
  };
  
  let milesEco = calculateMiles(10000, false);
  let milesBusiness = calculateMiles(10000, true);
  
  console.log('Эконом-классом Кексофлота накопишь ' + milesEco + ' миль');
  console.log('Бизнес-классом Кексофлота накопишь ' + milesBusiness + ' миль');
  