//how to add parametrs

let calculateMiles = function (distance) {
    let percent = 0.25;
    if (distance > 10500) {
        percent = 0.35;
    }
    let miles = distance * percent;
    console.log("За полёт получим " + miles + " миль");
};

calculateMiles(4125);
calculateMiles(11000);