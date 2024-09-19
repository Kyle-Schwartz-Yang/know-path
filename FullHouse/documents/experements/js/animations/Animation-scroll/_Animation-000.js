
const animElements = document.querySelectorAll('.element-animation');

function animateOnScroll() {
  animElements.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;

    if (elemTop < window.innerHeight && elemBottom >= 0) {
      elem.classList.add('element-show');
    } else {
      elem.classList.remove('element-show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Вызов функции при первой загрузке страницы




/*
.element-animation {opacity: 0}
.element-animation.element-show {opacity: 1}


.&__item.element-animation {opacity: 0; transtion: .1s}
.&__item.element-animation.element-show {opacity: 1}

.&__item.element-animation:nth-of-type(2).element-show {transition-delay: .33s}
.&__item.element-animation:nth-of-type(3).element-show {transition-delay: .33s}


*/