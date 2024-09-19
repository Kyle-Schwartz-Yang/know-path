export function createDropdownMenu(container, options = {}) {
  const defaultOptions = {
    itemSelector: '.dropdown__item, .dropdown__sub-item',
    arrowSelector: '.dropdown__arrow',
    menuSelector: '.dropdown__menu, .dropdown__sub-menu',
    activeClass: '_active'
  };

  const mergedOptions = { ...defaultOptions, ...options };
  const dropdownItems = container.querySelectorAll(mergedOptions.itemSelector);

  function handleItemClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const item = e.currentTarget;
    const arrow = item.querySelector(mergedOptions.arrowSelector);
    const menu = item.querySelector(mergedOptions.menuSelector);
    const isSubmenu = item.classList.contains('dropdown__sub-item');

    closeOtherMenus(item);

    if (!isSubmenu) {
      closeSubmenus(item);
    }

    arrow?.classList.toggle(mergedOptions.activeClass);
    menu?.classList.toggle(mergedOptions.activeClass);
  }

  function closeOtherMenus(currentItem) {
    const siblings = Array.from(currentItem.parentNode.children);
    siblings.forEach(sibling => {
      if (sibling !== currentItem) {
        sibling.querySelector(mergedOptions.arrowSelector)?.classList.remove(mergedOptions.activeClass);
        sibling.querySelector(mergedOptions.menuSelector)?.classList.remove(mergedOptions.activeClass);
      }
    });
  }

  function closeSubmenus(item) {
    const openSubmenus = item.querySelectorAll(`${mergedOptions.itemSelector} .${mergedOptions.activeClass}`);
    openSubmenus.forEach(submenu => {
      submenu.classList.remove(mergedOptions.activeClass);
    });
  }

  function handleOutsideClick() {
    dropdownItems.forEach(item => {
      item.querySelector(mergedOptions.arrowSelector)?.classList.remove(mergedOptions.activeClass);
      item.querySelector(mergedOptions.menuSelector)?.classList.remove(mergedOptions.activeClass);
    });
  }

  dropdownItems.forEach(item => {
    item.addEventListener('click', handleItemClick);
  });

  document.addEventListener('click', handleOutsideClick);

  return {
    destroy: () => {
      dropdownItems.forEach(item => {
        item.removeEventListener('click', handleItemClick);
      });
      document.removeEventListener('click', handleOutsideClick);
    }
  };
}

// ---------------------------------ИСПОЛЬЗОВАНИЯ 

import { createDropdownMenu } from './dropdownMenu.js';
import { isMobile } from "./helpers/_isMobile";

document.addEventListener('DOMContentLoaded', () => {
  if (isMobile.any()) {
    document.body.classList.add('touch');

    const mainMenuContainer = document.querySelector('.main-menu');
    const mainMenu = createDropdownMenu(mainMenuContainer);

    const sidebarMenuContainer = document.querySelector('.sidebar-menu');
    const sidebarMenu = createDropdownMenu(sidebarMenuContainer, {
      itemSelector: '.sidebar-item',
      arrowSelector: '.sidebar-arrow',
      menuSelector: '.sidebar-submenu'
    });

    // Если нужно удалить обработчики:
    // mainMenu.destroy();
    // sidebarMenu.destroy();
  } else {
    document.body.classList.add('mouse');
  }
});