
/*
Список библиотек:
  - ScrollReveal.js
  - Animate On Scroll (AOS)
  - Wow.js
  - GSAP
*/


export const initAnimation = (options = {}) => {

  const defaultOptions = {
    animationClass: '.on-animated',
    visibilityClass: '._animation',
    threshold: .5,
    rootMargin: '0px 0px -100px 0px'
  }

  const mergedOptions = { ...defaultOptions, ...options };
  const { animationClass, visibilityClass, threshold, rootMargin } = mergedOptions;

  const animElements = document.querySelectorAll(animationClass);

  // !---------------------------------ERROR
  if (animElements.length === 0) {
    console.warn('Warning: Animation not found on page !');
    return;
  }
  // !---------------------------------ERROR
  // ----------------------API IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, { threshold, rootMargin })

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //.replace('.', '') необходим для удаления точки, classList плохо понимает точки.
        entry.target.classList.add(visibilityClass.replace('.', ''));
      } else {
        entry.target.classList.remove(visibilityClass.replace('.', ''));
      }
    });
  }

  // ----------------------API IntersectionObserver
  animElements.forEach(elem => observer.observe(elem));
};


/*
# ИСПОЛЬЗОВАНИЕ: 
-----------------------------------------------------------------------
.on-animated {opacity: 0}
.on-animated._animation {opacity: 1}
-----------------------------------------------------------------------
.&__list.on-animated {
  > :nth-of-type(1) {opacity: 0}
  > :nth-of-type(2) {opacity: 0}
  > :nth-of-type(3) {opacity: 0}
}
.&__list.on-animated._animation {
  >*{ transtition: 1s }
  > :nth-of-type(1) {opacity: 1; transition-delay: .33s}
  > :nth-of-type(2) {opacity: 1; transition-delay: .66s}
  > :nth-of-type(3) {opacity: 1; transition-delay: .99s}
}
-----------------------------------------------------------------------

*/


