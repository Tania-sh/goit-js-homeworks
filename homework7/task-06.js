'use strict';

const input = document.querySelector('#validation-input');
const handleInputValidation = event => {
  const dataLength = Number(input.getAttribute('data-length'));
  const inputLength = event.currentTarget.value.length;
  if (dataLength === inputLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  }
  input.classList.remove('valid');
  input.classList.add('invalid');
};
input.addEventListener('blur', handleInputValidation);
