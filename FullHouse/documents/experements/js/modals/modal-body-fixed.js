
/*
Здесь я планирую использувовать fixed для <body> а также замораживать scroll

*/


document.addEventListener('DOMContentLoaded', () => {
  initModals();
})

const initModals = () => {
  // ------------------------------------------------------
  const options = {
    modalsGroupSelector: '.modals-group', thisModal: '.modal',
    buttonsSelector: '.modal-open', closingButtonsSelector: '.modal__close',
  };
  // ------------------------------------------------------

  function bindModal(options) {
    // ----------------------------------------------------------------------------------
    const { modalsGroupSelector, buttonsSelector, closingButtonsSelector, thisModal } = options;

    const modalsGroup = document.querySelector(modalsGroupSelector);
    const buttons = document.querySelectorAll(buttonsSelector);
    const closingButtons = document.querySelectorAll(closingButtonsSelector);

    // --------------------freezing scroll
    const bodyLock = document.body; // Lock
    let scrollPosition = 0; // scroll
    // --------------------freezing scroll

    // ----------------------------------------------------------------------------------
    // : --------------------------------------Оптимизация :

    const openModal = (contentUnique) => {

      modalsGroup.classList.remove('hidden');
      contentUnique.classList.add('active');

      // ------------freezing scroll 
      scrollPosition = window.scrollY;
      bodyLock.classList.add('_lock-body');
      bodyLock.style.top = `-${scrollPosition}px`;
      // ------------freezing scroll
    };

    const closeModal = (contentUnique) => {
      const ms = 350;
      contentUnique.classList.remove('active');

      setTimeout(() => {
        modalsGroup.classList.add('hidden');
        // ----------fire scroll
        bodyLock.classList.remove('_lock-body');
        window.scrollTo(0, scrollPosition);
        // ----------fire scroll
      }, ms);
    };
    // : --------------------------------------Оптимизация :
    // ----------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    buttons.forEach(button => button.addEventListener('click', event => {
      event.preventDefault(); // Отменить перезагрузку страницы ( <a href='#'>Если кнопка ссылка</a> )
      const getDataAttribut = event.currentTarget.dataset.modalTarget;
      const contentUnique = document.getElementById(getDataAttribut);
      // --------------------------

      // Apply lock class and set scroll position

      if (button && contentUnique && modalsGroup) {
        openModal(contentUnique);

        // --------------------------
        closingButtons.forEach(close => {
          close.addEventListener('click', () => { closeModal(contentUnique) })
        })
        // --------------------------
        modalsGroup.addEventListener('click', function (event) {
          if (!event.target.closest(thisModal)) {
            closeModal(contentUnique);
          }
        });

        // --------------------------
        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            closeModal(contentUnique);
          }
        });

      }

    }))

  }

  bindModal(options); // Записываем классы для работы: 
  // bindModal(optionsSomething); // Можно подключать еще
}















