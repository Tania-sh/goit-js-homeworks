'use strict';

const formatString = function (string) {
  // console.log(string.length);
  if (string.length > 40) {
    let newString = '';
    for (let i = 0; i < 40; i += 1) {
      newString += string[i];
    }
    newString += '...';
    return newString;
  }
  return string;
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
