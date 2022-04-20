// understanding how to create a function

let calculateMiles = function () {
    let percent = 0.25;
    let distance = 4125;
    
    if (distance > 10500) {
      percent = 0.35;
    }
    
    let miles = distance * percent;
    
    console.log('За полёт в Иркутск получим ' + miles + ' миль');
    }; 

    calculateMiles();
      