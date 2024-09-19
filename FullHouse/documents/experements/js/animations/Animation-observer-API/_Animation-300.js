class ScrollAnimator {
  constructor(options = {}) {
    this.options = {
      animationClass: 'element-animation',
      visibleClass: 'element-show',
      threshold: 0.5,
      ...options
    };

    this.animElements = document.querySelectorAll(`.${this.options.animationClass}`);
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), { threshold: this.options.threshold });
    this.observeElements();
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(this.options.visibleClass);
      } else {
        entry.target.classList.remove(this.options.visibleClass);
      }
    });
  }

  observeElements() {
    this.animElements.forEach(elem => this.observer.observe(elem));
  }
}

// Использование
const scrollAnimator = new ScrollAnimator({
  animationClass: 'my-animation',
  visibleClass: 'my-visible',
  threshold: 0.6
});