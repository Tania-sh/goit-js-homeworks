'use strict';

const ADMIN_PASSWORD = 'qwerty';
const userAdmin = 'Пароль администратора';
const userPassword = prompt(userAdmin);
let message;

if (userPassword === null) {
  message = 'Отменено пользователем!';
} else if (userPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

// console.log(message);

alert(message);
