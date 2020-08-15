'use strict';

const control = document.getElementById('font-size-control');
const text = document.getElementById('text');

const handleTextChange = event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

control.addEventListener('input', handleTextChange);
