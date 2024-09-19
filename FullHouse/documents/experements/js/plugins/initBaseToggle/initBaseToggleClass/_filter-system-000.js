import { BaseToggleSystem } from './_base-toggle-system-000.js';




// -------------------------------------------


export class FilterSystem extends BaseToggleSystem {
  constructor(config) {
    super(config);
    this.showAll(); // Показываем все элементы при инициализации
  }

  handleToggle(toggle) {
    const target = toggle.getAttribute('data-target');

    // Убираем активный класс со всех кнопок
    this.toggles.forEach(t => t.classList.remove(this.activeClass));
    // Добавляем активный класс нажатой кнопке
    toggle.classList.add(this.activeClass);

    if (target === 'all') {
      this.showAll();
    } else {
      this.filterByCategory(target);
    }
  }

  showAll() {
    this.contents.forEach(content => {
      content.classList.add(this.activeClass);
    });
  }

  filterByCategory(category) {
    this.contents.forEach(content => {
      if (content.getAttribute('data-category') === category) {
        content.classList.add(this.activeClass);
      } else {
        content.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    super.init();
    // Устанавливаем фильтр "All" как активный по умолчанию
    const allFilter = this.toggles[0];
    if (allFilter) {
      allFilter.classList.add(this.activeClass);
    }
  }
}



