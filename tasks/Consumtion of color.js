// Find consumtion of color for print each page

let totalPages = 6; 
let consumptionTotal = 0;
let consumptionPerPage = 70;

for (let page = 1; page <= totalPages; page++) {
  console.log(page);
  consumptionTotal += consumptionPerPage;
  console.log(consumptionTotal);
}



// ver 2

let totalPages = 6; // Всего страниц в документе
let consumptionTotal = 0; // Общий расход тонера
let consumptionPerPage = 70; // Расход краски на одну страницу
let economyMode = false;

for (let page = 1; page <= totalPages; page++) {
  console.log(page);

  if (economyMode && page > 3) {
    consumptionTotal += consumptionPerPage * 0.5;    
  }
  
  consumptionTotal += consumptionPerPage;
  console.log(consumptionTotal);
}
