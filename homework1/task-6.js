'use strict';

const enterNumber = 'Введите число';
let total = 0;
let input = 0;
do {
  input = prompt(enterNumber);
  if (isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
