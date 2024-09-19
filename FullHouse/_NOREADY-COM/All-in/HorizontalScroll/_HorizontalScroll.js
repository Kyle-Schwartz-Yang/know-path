const stickySections = [...document.querySelectorAll('.sticky')];

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      stickySections.forEach(section => transformOptimized(section));
      ticking = false;
    });
    ticking = true;
  }
});

function transformOptimized(section) {
  const scrollSection = section.querySelector('.scroll_section');
  if (!scrollSection) return;

  const { offsetTop, offsetHeight } = section.parentElement;
  const stickyTop = parseFloat(window.getComputedStyle(section).getPropertyValue('top'));

  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;

  const top = scrollY - offsetTop + stickyTop;
  const bottom = scrollY - (offsetTop + offsetHeight) + viewportHeight - (viewportHeight - section.offsetHeight) + stickyTop;

  const progress = Math.min(Math.max(top / (top - bottom), 0), 1);

  const maxTranslation = scrollSection.offsetWidth - section.offsetWidth;
  const translation = progress * maxTranslation;

  scrollSection.style.transform = `translate3d(${-translation}px, 0, 0)`;
}



