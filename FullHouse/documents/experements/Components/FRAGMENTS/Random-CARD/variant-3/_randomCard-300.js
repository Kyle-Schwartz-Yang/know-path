

import { randomContent } from "./_cardsData";


/*
- Вместо new Set будет использовать массив (чтобы решение было близко к тому если бы это был REACT)
- Новый массив заполняется карточками и затем сбрасывается. 
- Можно условие использовать в зависимости от желаем частоты совпадения в теории 


*/

export class RandomCard {
  constructor(containerId, buttonId, templateId) {
    this.container = document.getElementById(containerId);
    this.button = document.getElementById(buttonId);
    this.template = document.getElementById(templateId);

    this.shownIndices = [];

    this.init();
  }

  init() {
    this.updateCard(randomContent[0]);
    if (this.button) {
      this.button.addEventListener('click', () => this.changeCard());
    }
  }

  changeCard() {

    /*
    ! ДЛИНА БОЛЬШЕ 2
    if (this.shownIndices.length >= 2) {
    // Длина массива больше или равна 2, сбрасываем список
    this.shownIndices = [];
    }
    */

    if (this.shownIndices.length === randomContent.length) {
      // Все карточки уже показаны, сбрасываем список
      this.shownIndices = [];
    }

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * randomContent.length);
    } while (this.shownIndices.includes(newIndex));

    this.shownIndices.push(newIndex);
    this.updateCard(randomContent[newIndex]);

  }

  updateCard(cardData) {
    const cardElement = this.template.content.cloneNode(true);

    cardElement.querySelector('.random-purchase__title').textContent = cardData.title;
    cardElement.querySelector('.random-purchase__txt').textContent = cardData.txt;

    cardElement.querySelector('img').src = cardData.image;
    cardElement.querySelector('img').alt = cardData.title;
    cardElement.querySelector('.original-price').textContent = cardData.oldPrice;
    cardElement.querySelector('.discounted-price').textContent = cardData.newPrice;
    cardElement.querySelector('.likes-count').textContent = cardData.likes;

    this.container.innerHTML = '';
    this.container.appendChild(cardElement);
  }
}