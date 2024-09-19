
/*
- Первая попытка написать что-вминяемое, не очень хорошо закончилась, хотя это рабочий вариант.
*/

let isMobile = {
  Android: function () { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
  any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body');


if (isMobile.any()) {
  body.classList.add('touch');
  // const arrow = document.querySelectorAll('.dropdown__arrow');

  const dropdownToggle = document.querySelectorAll('.dropdown__link');


  for (let index = 0; index < dropdownToggle.length; index++) {
    const currentToggle = dropdownToggle[index];
    // console.log(currentToggle.offsetParent);
    // console.log(currentToggle.previousElementSibling);
    const dropdownArrow = currentToggle.lastElementChild;
    const dropdownMenu = currentToggle.nextElementSibling;

    currentToggle.classList.add('parent');

    currentToggle.addEventListener('click', () => {
      dropdownArrow.classList.toggle('_active')
      dropdownMenu.classList.toggle('_active');
    })
  }
} else {
  body.classList.add('mouse');
}