- Здесь могут быть различные вспомогательные функции.
- Также очень часто для этих целей используется название `lib` или `utils`

```javascript

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

/*Затем использование вспомогательной функции в initHeader.js*/
  const menuToggle = document.querySelector('.header__menu-toggle');
  const menu = document.querySelector('.header__menu');
  menuToggle.addEventListener('click', () => toggleClass(menu, 'header__menu--open'));

```


