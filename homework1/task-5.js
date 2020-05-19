'use strict';

const deliveryGoods = 'Оформить доставку товара ';
const deliveryCountry = prompt(deliveryGoods);
let credit = 0;
let message;
const titleInLC = deliveryCountry.toLowerCase();

switch (titleInLC) {
  case 'китай':
    credit = '100';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'чили':
    credit = '250';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'австралия':
    credit = '170';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'индия':
    credit = '80';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'ямайка':
    credit = '120';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
    alert(message);
}

console.log(message);
