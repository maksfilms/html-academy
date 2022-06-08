let calculateMiles = function (distance, isBusinessClass) {
    let percent = 0.18;
    if (isBusinessClass) {
      percent += 0.04;
    }
    if (distance > 3500) {
      percent += 0.15;
    }
    return distance * percent;
  };
  
  let calculateFlights = function (distance, isBusinessClass, milesTarget) {
    let miles = calculateMiles(distance, isBusinessClass);
    let flights = Math.ceil(milesTarget / miles);
    return(flights);
  };
  
  console.log('Необходимое количество полётов в бизнес-классе до Валенсии: ' +  calculateFlights(3118, true, 15000));
  console.log('Необходимое количество полётов в экономе до Лиссабона: ' +  calculateFlights(3617, false, 15000));
  