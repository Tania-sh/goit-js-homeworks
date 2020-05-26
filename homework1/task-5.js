'use strict';


let country = prompt('Оформить доставку товара');
let credit = 0;
if (country !==null) {
  country = country.toLowerCase();
}

switch (country) {
  case 'китай':
    credit = '100';
    break;

  case 'чили':
    credit = '250';
    break;

  case 'австралия':
    credit = '170';
    break;

  case 'индия':
    credit = '80';
    break;

  case 'ямайка':
    credit = '120';
    break;

  default:
    credit = -1;
}

if (credit !==-1) {
  country = country.charAt(0).toUpperCase() + country.slice(1);
  alert (`Доставка в ${country} будет стоить ${credit} кредитов`);
}else {
  alert (`В вашей стране доставка не доступна`);
}
