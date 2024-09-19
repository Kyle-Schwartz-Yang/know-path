
//! Рабочий 
// Хорошо сделанный, но немного мудренный, плохо читается.



const sticky_sections = document.querySelectorAll('.sticky');

window.addEventListener('scroll', (e) => {

  sticky_sections.forEach(section => transform2(section))
});

function transform2(section) {
  let scroll_section = section.querySelector('.scroll_section');



  let sticky_top = parseFloat(window.getComputedStyle(section).getPropertyValue('top'));
  let top = window.scrollY - section.parentElement.offsetTop + sticky_top
  let bottom = window.scrollY - (section.parentElement.offsetTop + section.parentElement.offsetHeight) + window.innerHeight - (window.innerHeight - section.offsetHeight) + sticky_top;


  // -----------------------------------------------------------------------------
  let progress = Math.min(Math.max(top / (top - bottom), 0), 1);
  let left_min = 0;
  let left_max = scroll_section.offsetWidth - section.offsetWidth;

  let left = (progress - 0) * (left_max - left_min) / (1 - 0) + left_min;

  // -----------------------------------------------------------------------------

  scroll_section.style.transform = 'translateX(-' + left + 'px)';
}
