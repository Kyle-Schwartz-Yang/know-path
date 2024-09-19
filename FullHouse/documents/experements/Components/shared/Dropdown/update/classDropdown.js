export class DropdownMenu {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      itemSelector: '.dropdown__item, .dropdown__sub-item',
      arrowSelector: '.dropdown__arrow',
      menuSelector: '.dropdown__menu, .dropdown__sub-menu',
      activeClass: '_active',
      ...options
    };
    this.init();
  }

  init() {
    this.dropdownItems = this.container.querySelectorAll(this.options.itemSelector);
    this.addEventListeners();
  }

  addEventListeners() {
    this.dropdownItems.forEach(item => {
      item.addEventListener('click', this.handleItemClick.bind(this));
    });
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  handleItemClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const item = e.currentTarget;
    const arrow = item.querySelector(this.options.arrowSelector);
    const menu = item.querySelector(this.options.menuSelector);
    const isSubmenu = item.classList.contains('dropdown__sub-item');

    this.closeOtherMenus(item);

    if (!isSubmenu) {
      this.closeSubmenus(item);
    }

    arrow?.classList.toggle(this.options.activeClass);
    menu?.classList.toggle(this.options.activeClass);
  }

  closeOtherMenus(currentItem) {
    const siblings = Array.from(currentItem.parentNode.children);
    siblings.forEach(sibling => {
      if (sibling !== currentItem) {
        sibling.querySelector(this.options.arrowSelector)?.classList.remove(this.options.activeClass);
        sibling.querySelector(this.options.menuSelector)?.classList.remove(this.options.activeClass);
      }
    });
  }

  closeSubmenus(item) {
    const openSubmenus = item.querySelectorAll(`${this.options.itemSelector} .${this.options.activeClass}`);
    openSubmenus.forEach(submenu => {
      submenu.classList.remove(this.options.activeClass);
    });
  }

  handleOutsideClick() {
    this.dropdownItems.forEach(item => {
      item.querySelector(this.options.arrowSelector)?.classList.remove(this.options.activeClass);
      item.querySelector(this.options.menuSelector)?.classList.remove(this.options.activeClass);
    });
  }
}


// ---------------------------------ИСПОЛЬЗОВАНИЯ 


import { DropdownMenu } from './DropdownMenu.js';
import { isMobile } from "./helpers/_isMobile";

document.addEventListener('DOMContentLoaded', () => {
  if (isMobile.any()) {
    document.body.classList.add('touch');

    // Инициализация для главного меню
    const mainMenuContainer = document.querySelector('.main-menu');
    new DropdownMenu(mainMenuContainer);

    // Инициализация для другого меню
    const sidebarMenuContainer = document.querySelector('.sidebar-menu');
    new DropdownMenu(sidebarMenuContainer, {
      itemSelector: '.sidebar-item',
      arrowSelector: '.sidebar-arrow',
      menuSelector: '.sidebar-submenu'
    });
  } else {
    document.body.classList.add('mouse');
  }
});