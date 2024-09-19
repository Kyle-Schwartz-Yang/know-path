
export class BaseToggleSystem {

  constructor(config = {}) {

    // ПОЛУЧИТЬ УНИКАЛЬНЫЙ АТРИБУТ (data-tabs="tabs-default")
    this.attributeParent = document.querySelector(`[data-tabbed="${config.dataAttributeParent}"]`)

    if (!this.attributeParent) {
      console.warn(`ATTENTION! Not found dataAttributeParent: ${this.attributeParent}`);
      return;
    }
    this.toggles = this.attributeParent.querySelectorAll(config.toggleSelector);
    this.contents = this.attributeParent.querySelectorAll(config.contentSelector);
    this.activeSelector = config.activeSelector || '_active';
    // this.init(); Обрат внимания, можно вызывать здесь \\
  }

  // Метод инициализации
  init() {
    if (!this.toggles || !this.contents) {
      console.warn('toggleSelector или contentSelector не найдены. Инициализация отменена.');
      return; // Завершаем выполнение метода, если тогглы или контент не найдены
    }

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

