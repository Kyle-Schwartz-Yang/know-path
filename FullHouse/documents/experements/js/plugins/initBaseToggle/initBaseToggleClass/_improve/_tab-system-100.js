import { BaseToggleSystem } from './_base-toggle-system.js';



// ------------------------------------------------------------------------------------------------

export class TabSystem extends BaseToggleSystem {


  //+-----------------------------------------------------
  init() {
    super.init();
    // Активируем первую кнопку или любуй другуй: (Либо можно напрямою указать в HTML)
    if (this.toggles.length > 0) {
      this.handleToggle(this.toggles[0]);
    }
  }
  //+-----------------------------------------------------

  handleToggle(button) {
    const target = button.getAttribute('data-target');
    // const buttonAttribut = button.getAttribute('data-target');

    if (!button.classList.contains(this.activeSelector)) {
      this.removeActiveClasses();
      button.classList.add(this.activeSelector);
      this.contentActive(target)
    }


    /*
    - GPT настваивал на том что использование contentActive() отдельной функции занимает больше производительности
      поэтому предпочтительнее и понятнее использовать эти две строчки :
    - Их еще можно украсить разве что дополнительными проверками
    */


  }


  // -----------------------ДОПОЛНИТЕЛЬНО
  removeActiveClasses() {
    this.toggles.forEach(button => button.classList.remove(this.activeSelector));
    this.contents.forEach(content => content.classList.remove(this.activeSelector));
  }


  // array.forEach(element => {

  //   });


  // Добавление класса active контенту
  contentActive(target) {

    this.contents.forEach(content => {
      const contentAttribut = content.dataset.id;

      /*
      - Удаление класса content.classList.remove(this.activeSelector) является избыточный (У нас есть уже removeActiveClasses)
      - По сути удаление класса в тернарном операторе для красоты 
      - Дополнительная проверка if (!content.classList.contains(this.activeSelector)) также не очень важна
        Потому что у нас уже есть проверка для кнопки, а это значит что мы и так не будем получать классы _active снова и снова
      ------------------------------------------------------------------
      if (contentAttribut.includes(target) || !target) {
        if (!content.classList.contains(this.activeSelector)) {
          content.classList.add(this.activeSelector);
        }
      }else {
        content.classList.remove(this.activeSelector);
      }
      -------------------------------------------------------------------
      */


      (contentAttribut.includes(target) || !target) ?
        content.classList.add(this.activeSelector) : content.classList.remove(this.activeSelector);

    });
  };


}


