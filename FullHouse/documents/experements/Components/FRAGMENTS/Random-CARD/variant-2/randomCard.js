
const randomContaner = document.getElementById('randomCard');
const randomContent = JSON.parse(randomContaner.dataset.randomContent);
let currentIndex = 0;
const changeCardButton = document.getElementById('changeCardButton');
const template = document.getElementById('card-template');

function changeCard() {
  currentIndex = Math.floor(Math.random() * randomContent.length);
  updateCard(randomContent[currentIndex]);
}

function updateCard(cardData) {
  const cardElement = template.content.cloneNode(true);
  console.log(cardElement);

  cardElement.querySelector('.random-purchase__title').textContent = cardData.title;
  cardElement.querySelector('.random-purchase__txt').textContent = cardData.txt;
  cardElement.querySelector('img').src = cardData.image;
  cardElement.querySelector('img').alt = cardData.title;
  cardElement.querySelector('.original-price').textContent = cardData.oldPrice;
  cardElement.querySelector('.discounted-price').textContent = cardData.newPrice;
  cardElement.querySelector('.likes-count').textContent = cardData.likes;

  randomContaner.innerHTML = '';
  randomContaner.appendChild(cardElement);
}


if (changeCardButton) {
  changeCardButton.addEventListener('click', changeCard);
}
updateCard(randomContent[0]);