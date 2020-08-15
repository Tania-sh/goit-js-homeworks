'use script';
const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const handleInputChange = event => {
  output.textContent =
    event.currentTarget.value === '' ? 'незнакомец' : event.currentTarget.value;
};
input.addEventListener('input', handleInputChange);
