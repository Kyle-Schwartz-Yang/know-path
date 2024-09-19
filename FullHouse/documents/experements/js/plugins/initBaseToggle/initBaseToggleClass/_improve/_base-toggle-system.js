
// Можно создать значения по умолчанию
const defaultConfig = {
  containerSelector: '.toggle-system',
  toggleSelector: '.toggle',
  contentSelector: '.content',
  activeClass: 'active'
};


export class BaseToggleSystem {
  constructor(config) {
    const mergedConfig = { ...defaultConfig, ...config };
    this.container = document.querySelector(mergedConfig.containerSelector);
    this.toggleSelector = mergedConfig.toggleSelector;
    this.contentSelector = mergedConfig.contentSelector;
    this.activeClass = mergedConfig.activeClass;
  }

  init() {
    this.addEventListeners();
  }

  // Применяется делигирование событий. (возможносно пригодится)
  addEventListeners() {
    this.container.addEventListener('click', (event) => {
      const toggle = event.target.closest(this.toggleSelector);
      if (toggle) {
        this.handleToggle(toggle);
      }
    });
  }

  handleToggle(toggle) {
    console.warn('handleToggle method should be implemented in child class');
  }
}