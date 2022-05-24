let totalPages = 7;

for (let page = 0; page < totalPages; page = page + 1) {
    console.log(page)
  }


  // ver 2
let mode = 'document'; // Режим работы драйвера печати
let pageNumber = 5; // Номер копируемой страницы
let copyCount = 7; // Количество копий
let totalPages = 6; // Всего страниц в документе

if (mode === 'pageCopy') {
  for (let copies = 1; copies <= copyCount; copies++) {
    console.log(pageNumber);
  }
}

if (mode === 'document') {
  for (let page = 1; page <= totalPages; page++) {
    console.log(page);
  }
}

//ver 3 reverse print
let mode = 'reverse'; // Режим работы драйвера печати
let pageNumber = 5; // Номер копируемой страницы
let copyCount = 7; // Количество копий
let totalPages = 6; // Всего страниц в документе

if (mode === 'pageCopy') {
  for (let copies = 1; copies <= copyCount; copies++) {
    keks.print(pageNumber);
  }
}

if (mode === 'document') {
  for (let page = 1; page <= totalPages; page++) {
    keks.print(page);
  }
}

if (mode === 'reverse') {
  for (let reversePage = totalPages; reversePage > 0; reversePage--) {
      keks.print(reversePage);
  }
}


// печать нечетных страниц ver 4
let mode = 'alternate'; // Режим работы драйвера печати
let pageNumber = 5; // Номер копируемой страницы
let copyCount = 7; // Количество копий
let totalPages = 6; // Всего страниц в документе
let startPage = 1; // Стартовая страница

if (mode === 'pageCopy') {
  for (let copies = 1; copies <= copyCount; copies++) {
    keks.print(pageNumber);
  }
}

if (mode === 'document') {
  for (let page = 1; page <= totalPages; page++) {
    keks.print(page);
  }
}

if (mode === 'reverse') {
  for (let reversePage = totalPages; reversePage >= 1; reversePage--) {
    keks.print(reversePage);
  }
}

if (mode === 'alternate') {
    for (let alternatePage = startPage; alternatePage <= totalPages; alternatePage +=2) {
        keks.print(alternatePage);
      }
  }
