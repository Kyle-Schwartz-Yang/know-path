import { BaseToggleSystem } from './_base-toggle-system-000.js';

export class TabSystem extends BaseToggleSystem {
  handleToggle(toggle) {
    const target = toggle.getAttribute('data-target');

    this.toggles.forEach(t => t.classList.remove(this.activeClass));
    this.contents.forEach(c => c.classList.remove(this.activeClass));

    toggle.classList.add(this.activeClass);
    this.container.querySelector(`[data-id="${target}"]`).classList.add(this.activeClass);
  }
}


