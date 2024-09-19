// Для табов
const tabSystem = createTabSystem({
  containerSelector: '#tab-container',
  toggleSelector: '.tab-toggle',
  contentSelector: '.tab-content',
  activeClass: 'active'
});
tabSystem.init();

// Для фильтров
const filterSystem = createFilterSystem({
  containerSelector: '#filter-container',
  toggleSelector: '.filter-toggle',
  contentSelector: '.filter-item',
  activeClass: 'active'
});
filterSystem.init();