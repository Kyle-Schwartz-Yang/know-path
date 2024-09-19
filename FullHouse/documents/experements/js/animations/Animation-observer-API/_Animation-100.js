


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      // Для повторной анимации
      change.target.classList.remove('element-show');
    }
  });
}


let options = {
  threshold: [0.5]
}

let observer = new IntersectionObserver(onEntry, options)

let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

//! ----------------------------------------------------------- Похожий вариант


const animElements = document.querySelectorAll('.elm-anim');

const observerUp = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('elem-show');
    } else {
      entry.target.classList.remove('elem-show');
    }
  });
}, { threshold: 0.5 }); // Элемент считается видимым, если хотя бы 50% его высоты находится в видимой области

animElements.forEach(elem => observerUp.observe(elem));

/*
.element-animation {opacity: 0}
.element-animation.element-show {opacity: 1}




.&__item.element-animation {opacity: 0; transtion: .1s}
.&__item.element-animation.element-show {opacity: 1}

.&__item.element-animation:nth-of-type(2).element-show {transition-delay: .33s}
.&__item.element-animation:nth-of-type(3).element-show {transition-delay: .33s}


*/


