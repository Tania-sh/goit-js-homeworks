'use strict';

const logItems = function (array) {
  let items = 1;
  for (let i of array) {
    console.log(items + ' - ' + i);
    items += 1;
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
