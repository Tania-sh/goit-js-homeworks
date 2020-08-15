'use script';

const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
};
let counterValue = 0;
function increment() {
  counterValue += 1;
  document.getElementById('value').innerHTML = counterValue;
}
function decrement() {
  counterValue -= 1;
  document.getElementById('value').innerHTML = counterValue;
}
button.sub.addEventListener('click', increment);
button.add.addEventListener('click', decrement);
