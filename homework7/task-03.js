'use script';
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=560',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=560',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=560',
    alt: 'Group of Horses Running',
  },
];
for (let el of images)
  document
    .getElementById('gallery')
    .insertAdjacentHTML(
      'beforeend',
      `<li><img src="${el.url}" alt="${el.alt}"></li>`,
    );

const imgGallery = document.getElementById('gallery');

imgGallery.style.display = 'flex';

imgGallery.style.flexDirection = 'column';

imgGallery.style.alignItems = 'center';
