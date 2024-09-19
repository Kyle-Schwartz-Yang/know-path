
import { isMobile } from "./helpers/_isMobile";


export const connectDropdownMenu = () => {

  let body = document.querySelector('body');

  if (isMobile.any()) {
    body.classList.add('touch');

    const dropdownItems = document.querySelectorAll('.dropdown__item, .dropdown__sub-item');

    dropdownItems.forEach(item => {
      // const link = item.querySelector('.dropdown__link');
      const arrow = item.querySelector('.dropdown__arrow');
      const menu = item.querySelector('.dropdown__menu, .dropdown__sub-menu');

      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Проверяем, является ли текущий элемент подменю
        const isSubmenu = item.classList.contains('dropdown__sub-item');

        // Закрываем все открытые меню на том же уровне, кроме текущего
        const siblings = Array.from(item.parentNode.children);
        siblings.forEach(sibling => {
          if (sibling !== item) {
            sibling.querySelector('.dropdown__arrow')?.classList.remove('_active');
            sibling.querySelector('.dropdown__menu, .dropdown__sub-menu')?.classList.remove('_active');
          }
        });


        // Если это не подменю, закрываем все открытые подменю
        if (!isSubmenu) {
          const openSubmenus = item.querySelectorAll('.dropdown__sub-item ._active');
          openSubmenus.forEach(submenu => {
            submenu.classList.remove('_active');
          });
        }

        arrow?.classList.toggle('_active');
        menu?.classList.toggle('_active');
      });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', () => {
      dropdownItems.forEach(item => {
        item.querySelector('.dropdown__arrow')?.classList.remove('_active');
        item.querySelector('.dropdown__menu, .dropdown__sub-menu')?.classList.remove('_active');
      });
    });

  } else {
    body.classList.add('mouse');
  }

}








