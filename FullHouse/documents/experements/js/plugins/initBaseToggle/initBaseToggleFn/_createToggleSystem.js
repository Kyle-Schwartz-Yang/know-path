function createFilterSystem(config) {
  const system = createToggleSystem(config);

  function showAll() {
    system.contents.forEach(content => {
      content.classList.add(system.activeClass);
    });
  }

  function filterByCategory(category) {
    system.contents.forEach(content => {
      if (content.getAttribute('data-category') === category) {
        content.classList.add(system.activeClass);
      } else {
        content.classList.remove(system.activeClass);
      }
    });
  }

  system.setHandleToggle((event) => {
    const toggle = event.currentTarget;
    const target = toggle.getAttribute('data-target');

    system.toggles.forEach(t => t.classList.remove(system.activeClass));
    toggle.classList.add(system.activeClass);

    if (target === 'all') {
      showAll();
    } else {
      filterByCategory(target);
    }
  });

  // Показываем все элементы при инициализации
  showAll();

  return system;
}