'use strict';

const userCredits = 23580;
const pricePerDroid = 3000;
const userQuantity = 'Сколько дроидов вы хотите купить?';
const userChoise = prompt(userQuantity);
let totalPrice = 0;
let creditBalance;
let message;

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = Number(userChoise) * pricePerDroid;
  if (totalPrice > 23580) {
    message = 'Недостаточно средств на счету!';
  } else {
    creditBalance = userCredits - totalPrice;
    message = `Вы купили ${totalPrice} дроидов, на счету осталось ${creditBalance} кредитов.`;
  }
}
console.log(message);
