let getStatistics = function(players) {
    let allGoals = 0;
    
    for (let i = 0; i < players.length; i++) {
        allGoals += players[i].goals;
      }
      
    for (let i = 0; i < players.length; i++) {
      players[i].coefficient = players[i].goals * 2 + players[i].passes;
      players[i].percent = Math.round(players[i].goals / (allGoals / 100));
      }
    return players;
    }
    
    getStatistics([{"name":"Васька","goals":5,"passes":5},{"name":"Байт","goals":12,"passes":2},{"name":"Снежок","goals":2,"passes":7}]);