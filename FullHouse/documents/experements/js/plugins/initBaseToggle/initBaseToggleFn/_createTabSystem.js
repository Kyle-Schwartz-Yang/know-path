function createTabSystem(config) {
  const system = createToggleSystem(config);

  system.setHandleToggle((event) => {
    const toggle = event.currentTarget;
    const target = toggle.getAttribute('data-target');

    system.toggles.forEach(t => t.classList.remove(system.activeClass));
    system.contents.forEach(c => c.classList.remove(system.activeClass));

    toggle.classList.add(system.activeClass);
    system.container.querySelector(`[data-id="${target}"]`).classList.add(system.activeClass);
  });

  return system;
}