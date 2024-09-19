

export class BaseToggleSystem {
  // Конструктор класса, принимает объект конфигурации
  constructor(config) {
    this.container = document.querySelector(config.containerSelector);
    this.toggles = this.container.querySelectorAll(config.toggleSelector);
    this.contents = this.container.querySelectorAll(config.contentSelector);
    this.activeClass = config.activeClass || 'active';
  }
  // Метод инициализации
  init() {

    this.addEventListeners();
  }
  // Метод для добавления обработчиков событий
  addEventListeners() {
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.handleToggle(toggle));
    });
  }

  // Метод обработки переключения (будет переопределен в дочерних классах)
  handleToggle(toggle) {
    // Эта функция будет переопределена в дочерних классах
    console.warn('handleToggle method should be implemented in child class');
  }
}





/*
- BaseToggleSystem, основан для создания систем переключения (например, табов или фильтров).
- Инициализируем основные свойства: container, toggles, contents, activeClass
- Метод init() вызывается для инициализации системы. В данном случае он просто добавляет обработчики событий.
- Метод addEventListeners() добавляет обработчики кликов на все элементы переключения. При клике вызывается метод handleToggle().
- Метод handleToggle() в базовом классе не имеет реализации. Это сделано намеренно, так как конкретная логика переключения будет определена в дочерних классах (например, отдельно для табов и для фильтров).

*/