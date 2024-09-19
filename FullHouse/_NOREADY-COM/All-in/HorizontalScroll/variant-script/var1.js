/*
! РАБОЧИЙ (простой)
- есть не точности с вычислениеями
- 
*/


const stickySections = [...document.querySelectorAll('.sticky')]

// window.addEventListener('scroll', (e) => {
//   for (let i = 0; i < stickySections.length; i++) {
//     transform(stickySections[i]);
//   }
// });

// window.requestAnimationFrame Улучшает производительность ...
window.addEventListener('scroll', () => {
  window.requestAnimationFrame(() => {
    stickySections.forEach(section => transform(section));
  });
});

function transform(section) {

  // const offsetTop = section.parentElement.offsetTop;
  const { offsetTop } = section.parentElement;
  const scrollSection = section.querySelector('.scroll_section');
  if (!scrollSection) return; // Проверка на существование 
  // ---------------------------------------------------------------------------

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = Math.max(0, Math.min(percentage, 400));

  // -------------------------------------------------------------------------------

  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}
