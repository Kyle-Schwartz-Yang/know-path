
export class BaseToggleSystem {

  constructor(uniqueAttributeData, config = {}) {

    // ПОЛУЧИТЬ УНИКАЛЬНЫЙ АТРИБУТ (data-tabs="tabs-default")
    this.selectorParent = document.querySelector(`[data-tabbed="${uniqueAttributeData}"]`)

    if (!this.selectorParent) {
      console.warn(`Перевір код уважно this.selectorParent: ${this.selectorParent}`);
      console.log(this.selectorParent);

      return;
    }

    this.toggles = this.selectorParent.querySelectorAll(config.toggleSelector);
    this.contents = this.selectorParent.querySelectorAll(config.contentSelector);
    this.activeSelector = config.activeSelector || '_active';

    // this.init(); Обрат внимания, можно вызывать здесь \\
  }

  // Метод инициализации
  init() {
    this.addEventListeners();
  }

  // Метод для добавления обработчиков событий
  addEventListeners() {
    this.toggles.forEach(button => {
      button.addEventListener('click', () => this.handleToggle(button));
    });
  }

  // handleToggle будет переопределена в дочерних классах (иак задумано)
  handleToggle(button) {
    console.warn('Метод handleToggle должен быть реализован в дочернем классе.');
  }

}

