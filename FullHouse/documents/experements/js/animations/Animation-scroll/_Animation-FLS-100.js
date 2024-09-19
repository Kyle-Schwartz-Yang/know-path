/*
Список библиотек:
  - ScrollReveal.js
  - Animate On Scroll (AOS)
  - Wow.js
  - GSAP
*/

//---initAnimation();

export const initAnimation = () => {

  const animItems = document.querySelectorAll('.on-animated');

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      const animItemPoint = window.innerHeight - (Math.min(animItemHeight, window.innerHeight) / animStart);
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_animation');
      } else {

        if (!animItem.classList.contains('off-repeat-animated')) {
          animItem.classList.remove('_animation');
        }

      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  if (animItems.length > 0) {

    //"debouncе" или "throttle" - это почитай.
    function debounce(func, wait) {
      let timeout;
      return function executedFunction() {
        const later = () => {
          timeout = null;
          func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    // Слушаем событие скролла с помощью дебаунс функции
    const debouncedAnimOnScroll = debounce(animOnScroll, 100);
    window.addEventListener('scroll', debouncedAnimOnScroll);

    setTimeout(() => {
      animOnScroll();
    }, 100);
  }

}


/* Испольование:(...)
----------------------------------------------------------------------------------------
#- Пример использования:
Важно указать класс .on-animated в HTML дереве, но не обязательно исполльзовать его в стилях (делай как хочешь)
  .title.on-animated {opacity: 0}
  .title._animation {opatity: 1; transition: all .33s ease-in-out;}
-Eсли нужно чтобы анимациия была только один раз добавить класс .off-repeat-animated:
  .title.on-animated.off-repeat-animated 
----------------------------------------------------------------------------------------

#- Правильное использования для элементов родителя:
  .animation-list {
      &.on-animated {
        >:nth-of-type(1) {
          opacity: 0;
        }
          
        >:nth-of-type(2) {
          opacity: 0;
        }

        >:nth-of-type(3) {
          opacity: 0;
        }
      }
  //---------------------------
    &._animation {
      >* {
        transition: all 1s ease-in-out;
      }

      >:nth-of-type(1) {
        transition-delay: .33s;
        opacity: 1;
      }

      >:nth-of-type(2) {
        transition-delay: .66s;
        opacity: 1;
      }

      >:nth-of-type(3) {
        transition-delay: .99s;
        opacity: 1;
      }
    }
  }
----------------------------------------------------------------------------------------
#- Правильное использования для элементов родителя: (используя цикл)
.animation__list {

  &.on-animated {
    @for $i from 1 through 3 {
      > :nth-of-type(#{$i}) {
        opacity: 0;
      }
    }
  }
// ----------------------------------
  &._animation {
    >* {
      transition: all 1s ease-in-out;
    }

    @for $i from 1 through 3 {
      > :nth-of-type(#{$i}) {
        opacity: 1;
        transition-delay: #{$i * 0.33}s;
      }
    }
  }
}
----------------------------------------------------------------------------------------

*/
