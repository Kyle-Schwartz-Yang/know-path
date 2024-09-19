/*
- Буду использовать pdding для body и для fixedElemnt при открытие модального окна, это позволит избавиться от проблем
*/


export const initModals = () => {
  // ------------------------------------------------------
  const options = {
    modalsGroupSelector: '.modals-group', thisModal: '.modal',
    buttonsSelector: '.modal-open', closingButtonsSelector: '.modal__close',
    fixedElement: '.lock-padding',
  };
  // ------------------------------------------------------

  function bindModal(options) {
    // ----------------------------------------------------------------------------------
    const { modalsGroupSelector, buttonsSelector, closingButtonsSelector, thisModal, fixedElement } = options;

    const modalsGroup = document.querySelector(modalsGroupSelector);
    const buttons = document.querySelectorAll(buttonsSelector);
    const closingButtons = document.querySelectorAll(closingButtonsSelector);
    // -----------------paddingXscroll починить
    const lockPadding = document.querySelectorAll(fixedElement);
    const bodyLock = document.body; // Lock
    const timeout = 333;
    // -----------------paddingXscroll починить

    // ----------------------------------------------------------------------------------
    // : --------------------------------------Оптимизация :
    // -----------Заблокировать scrool body
    function bodyBlocking() {
      /*
      #Два способа получить scrollbar ширину:
        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';
      */
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';
      // ---------------------------------------------
      if (lockPadding.length > 0) {
        // Все fixedElement получает paddingRight: 
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = scrollBarWidth;
        }
      }
      // ---------------------------------------------
      bodyLock.style.paddingRight = scrollBarWidth;
      bodyLock.classList.add('_lock-body');
    }

    // ------ Разблокировать scroll body
    function bodyUnLock() {

      setTimeout(() => {

        if (lockPadding.length > 0) {
          // Все fixedElement очистят paddingRight: 
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
          }
        }

        // ----------fire scroll
        bodyLock.style.paddingRight = '0px';
        bodyLock.classList.remove('_lock-body');
        // ----------fire scroll

        // Уменьшее задержи для более быстрого появление scrollbar
      }, timeout - 33);

    }

    // -------Показать модальное окно
    const showModal = (contentUnique) => {

      modalsGroup.classList.remove('hidden');
      contentUnique.classList.add('active');

      // ------------Lock scroll
      bodyBlocking()
      // ------------Lock scroll
    };
    // ---------Закрыть модальное окно
    const closeModal = (contentUnique) => {

      contentUnique.classList.remove('active');
      // ----------------------------------------------
      setTimeout(() => {
        modalsGroup.classList.add('hidden');
        bodyUnLock(); // Unlock scroll
      }, timeout);
    };
    // : --------------------------------------Оптимизация :
    // ----------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    if (buttons.length > 0 && modalsGroup) {
      buttons.forEach(button => button.addEventListener('click', event => {
        event.preventDefault(); // Отменить перезагрузку страницы ( <a href='#'>Если кнопка ссылка</a> )
        const getDataAttribut = event.currentTarget.dataset.modalTarget;
        const contentUnique = document.getElementById(getDataAttribut);
        // --------------------------

        // Apply lock class and set scroll position

        if (button && contentUnique && modalsGroup) {
          showModal(contentUnique);

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


  }

  bindModal(options);
}



















