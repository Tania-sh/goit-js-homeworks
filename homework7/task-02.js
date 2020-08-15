'use script';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

createListIndregients(ingredients);
function createListIndregients() {
  const infoList = document.createElement('ul');
  infoList.setAttribute('id', 'ingredients');

  const potatoField = createInfoItem('Картошка');
  const mushroomsField = createInfoItem('Грибы');
  const garlicField = createInfoItem('Чеснок');
  const tomatoesField = createInfoItem('Помидоры');
  const greensField = createInfoItem('Зелень');
  const seasoningsField = createInfoItem('Приправы');
  infoList.append(
    potatoField,
    mushroomsField,
    garlicField,
    tomatoesField,
    greensField,
    seasoningsField,
  );

  console.log(infoList);
}
function createInfoItem(text) {
  const item = document.createElement('li');
  const itemText = document.createTextNode(text);
  item.appendChild(itemText);
  return item;
}
