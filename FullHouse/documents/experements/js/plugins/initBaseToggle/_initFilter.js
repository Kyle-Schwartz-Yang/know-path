


export const initFilter = (selectorB, selectorC) => {
  /*
    C - Contents
    B - Buttons
  */

  const filterButton = document.querySelectorAll(selectorB);
  const filterContent = document.querySelectorAll(selectorC);

  //!Объвляем действия по нажатию на кнопку.
  for (let button of filterButton) {
    button.addEventListener('click', function (e) {
      //-----------------------------
      const buttonAttribut = button.dataset.filter;
      //-----------------------------
      removeActiveClasses();
      // Добавление класса active контенту и кнопке
      button.classList.add('active');
      filterContentOpen(buttonAttribut);
      //-----------------------------
    });
    //-----------------------------
    //Клик по 3 кнопке!
    if (button === filterButton[2]) {
      button.click();
    }
  }

  // Удаление активных классов у кнопок и контента
  function removeActiveClasses() {
    filterButton.forEach(button => { button.classList.remove('active') });
    filterContent.forEach(content => { content.classList.remove('active') });
  };

  // Добавление класса active контенту
  function filterContentOpen(buttonAttribut) {
    filterContent.forEach(content => {
      const contentAttribut = content.dataset.filter;
      //-----------------------------
      (contentAttribut.includes(buttonAttribut) || !buttonAttribut) ?
        content.classList.add('active') : content.classList.remove('active');
      // animOnScroll();
      //-----------------------------
    });
  };

}

