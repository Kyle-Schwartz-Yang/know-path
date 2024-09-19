export class BaseToggleSystem {


  constructor(config) {


    const defaultSeting = {
      isChanged: () => { }
    }

    this.config = Object.assign(defaultSeting, config);


    this.container = document.querySelector(config.containerSelector);

    if (this.container) {

      this.toggles = this.container.querySelectorAll(config.toggleSelector);
      this.contents = this.container.querySelectorAll(config.contentSelector);
      // Устанавливаем класс для активного состояния, используя значение из конфигурации или 'active' по умолчанию
      this.activeSelector = config.activeSelector || '_active';

    } else {
      console.warn(`Перевір код уважно this.container: ${this.container}`);
      return
    }

    // this.init(); Обрат внимания можно вызывать здесь
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

