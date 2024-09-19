
import { randomContent } from "./_cardsData";


/*
! ИСПОЛЬЗОВАНИЕ new Set () для того чтобы карточки не повторялись.
Это конечно не так чтобы идеальный вариант, но рабочий (а может и идеальный)

*/

export class RandomCard {
  constructor(containerId, buttonId, templateId) {
    this.container = document.getElementById(containerId);
    this.button = document.getElementById(buttonId);
    this.template = document.getElementById(templateId);

    this.shownIndices = new Set();

    this.init();
  }

  init() {
    this.updateCard(randomContent[0]);
    if (this.button) {
      this.button.addEventListener('click', () => this.changeCard());
    }
  }

  changeCard() {

    if (this.shownIndices.size === randomContent.length) {
      // Все карточки уже показаны, сбрасываем список
      this.shownIndices.clear();
    }

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * randomContent.length);
    } while (this.shownIndices.has(newIndex));

    this.shownIndices.add(newIndex);
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