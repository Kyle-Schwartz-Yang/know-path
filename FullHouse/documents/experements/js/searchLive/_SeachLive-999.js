export const initSearchLive = (options = {}) => {

  // -------------------------------------------------------------------------------
  const defaults = {
    searchInputSelector: '[data-search]',
    searchElementSelector: '.card',
    cardTitleSelector: '.card__header',
    elemHiddenClass: 'hidden',
    searchMode: 'startsWith' // Режим поиска по умолчанию
  };

  const settings = { ...defaults, ...options };

  // -------------------------------------------------------------------------------

  // Получение элементов поиска и карт
  const searchInput = document.querySelector(settings.searchInputSelector);
  const cards = Array.from(document.querySelectorAll(settings.searchElementSelector));

  if (!searchInput || cards.length === 0) {
    return;
  }

  // Функция для обработки поиска
  const handleSearch = (event) => {
    const lowerCaseValue = event.target.value.toLowerCase();

    cards.forEach((card) => {

      const cardTitle = card.querySelector(settings.cardTitleSelector);

      if (!cardTitle) {
        return;
      }

      const cardHeaderText = cardTitle.textContent.toLowerCase();
      let isVisible;

      // Выбор режима поиска
      if (settings.searchMode === 'startsWith') {
        isVisible = cardHeaderText.startsWith(lowerCaseValue);
      } else {
        isVisible = cardHeaderText.includes(lowerCaseValue);
      }

      // Переключение класса видимости
      card.classList.toggle(settings.elemHiddenClass, !isVisible);
    });
  };

  // Функция debounce для уменьшения частоты вызовов handleSearch
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // Добавление обработчика события ввода
  searchInput.addEventListener('input', debounce(handleSearch, 300));
};



