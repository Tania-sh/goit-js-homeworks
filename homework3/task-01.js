'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
// console.log(user);

user.mood = 'happy';
// console.log(user);

user.hobby = 'skydiving';
// console.log(user);

user.premium = false;
console.log(user);

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`key: ${key}, value: ${user[key]}`);
}
