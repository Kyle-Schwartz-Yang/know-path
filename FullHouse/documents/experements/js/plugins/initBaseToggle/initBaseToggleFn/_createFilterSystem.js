function createToggleSystem(config) {
  const {
    containerSelector,
    toggleSelector,
    contentSelector,
    activeClass = 'active'
  } = config;

  const container = document.querySelector(containerSelector);
  const toggles = container.querySelectorAll(toggleSelector);
  const contents = container.querySelectorAll(contentSelector);

  function init() {
    toggles.forEach(toggle => {
      toggle.addEventListener('click', handleToggle);
    });
  }

  function handleToggle(event) {
    // Эта функция будет переопределена для каждого конкретного случая
    console.warn('handleToggle should be implemented');
  }

  return {
    init,
    setHandleToggle: (fn) => {
      handleToggle = fn;
    }
  };
}