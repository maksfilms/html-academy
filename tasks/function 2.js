let calculateMiles = function (distance, isBusinessClass) {
    if (isBusinessClass) {
      return distance * 0.22;
    } else {
      return distance * 0.18;
    }
  };
  
  let milesEconom = calculateMiles(3000, false);
  let milesBusiness = calculateMiles(3000, true);
  
  console.log('Эконом-классом Кексофлота накопишь ' + milesEconom + ' миль');
  console.log('Бизнес-классом Кексофлота накопишь ' + milesBusiness + ' миль');