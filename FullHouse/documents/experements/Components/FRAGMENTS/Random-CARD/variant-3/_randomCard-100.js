

import { randomContent } from "./_cardsData";


/*


*/

export class RandomCard {
  constructor(containerId, buttonId, templateId) {
    this.container = document.getElementById(containerId);
    this.button = document.getElementById(buttonId);
    this.template = document.getElementById(templateId);
    this.currentIndex = 0;

    this.init();
  }

  init() {
    this.updateCard(randomContent[0]);
    if (this.button) {
      this.button.addEventListener('click', () => this.changeCard());
    }
  }

  changeCard() {
    this.currentIndex = Math.floor(Math.random() * randomContent.length);
    this.updateCard(randomContent[this.currentIndex]);
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