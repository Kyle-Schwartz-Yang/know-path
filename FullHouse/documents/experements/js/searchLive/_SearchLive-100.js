
const searchInput = document.querySelector('[data-search]');
const cards = document.querySelectorAll('.card');



searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();


  cards.forEach((card) => {
    const cardHeader = card.querySelector('.card__header');
    // const isVisible = cardHeader.textContent.toLowerCase().includes(value);

    const isVisible = cardHeader.textContent.toLowerCase().startsWith(value);


    card.classList.toggle('hidden', !isVisible);
  });

})

