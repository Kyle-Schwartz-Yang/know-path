// Общие рекомендации для достижения желаемого результата и получаения descrop или mobile

/*
! Решение на 70%
1. Проверить ширину экрана (однако можем попасть на большие планшеты)
function isMobile() {
  return window.innerWidth <= 768; // Вы можете изменить это значение
}

! Решение на 90%
2. Использование User Agent ()
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

! Решение на 90%
3. Проверка наличия touch событий:
function isMobile() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

! Решение на 98%
4. Комбинированный подход: проверку User Agent и наличие touch событий
function isMobile() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return true;
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
  ) {
    return true;
  }
  return false;
}


! Решение на 90%
5.Использование медиа-запросов в JavaScript:
function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

if (isMobile()) {
  // Код для мобильных устройств
} else {
  // Код для десктопных устройств
}

*/



function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

document.querySelectorAll('.dropdown__item, .dropdown__sub-item').forEach(item => {
  if (isMobile()) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('active');
    });
  } else {
    // Десктопное поведение, если нужно
  }
});


