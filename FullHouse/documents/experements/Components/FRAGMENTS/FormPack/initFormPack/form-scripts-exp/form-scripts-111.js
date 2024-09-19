
export const initValidateForm = (formId) => {


  const validationRules = {
    required: (value) => value.trim() !== '',
    email: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value),
    checkbox: (checked) => checked
  };

  const errorMessages = {
    required: 'Это поле обязательно для заполнения',
    email: 'Введите корректный email адрес',
    checkbox: 'Необходимо отметить это поле'
  };


  const form = document.getElementById(formId);

  if (!form) {
    console.error(`Form with id "${formId}" not found`);
    return;
  }


  form.addEventListener('submit', formSend);
  form.addEventListener('input', handleInput);
  form.addEventListener('change', handleChange);


  // --------------------------------------------------------------

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);


    if (error === 0) {
      form.classList.add('_sending');


      /*
        -Здесь может быть код отправки формы PHP
      */

      setTimeout(() => {
        // formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      }, 2000);

    } else {
      // alert('Заполните пожалуйста форму!')
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      // ----------------CHECK EMAIL
      if (input.classList.contains('_email')) {
        if (!validationRules.email(input.value)) {

          formAddError(input);
          error++;
        }
        // модификация "Второй ШАНС"
        // input.addEventListener('input', () => {
        //   if (validationRules.email(input.value)) {
        //     formRemoveError(input)
        //   }
        // });

        // ----------------CHECK CHECKBOX
      } else if (input.getAttribute('type') === 'checkbox' && !validationRules.checkbox(input.checked)) {
        formAddError(input);
        error++;

        // модификация "Второй ШАНС"
        // input.addEventListener('change', () => {
        //   if (validationRules.checkbox(input.checked)) {
        //     formRemoveError(input)
        //   }
        // });
        // ----------------Check any fields (на заполнения)
      } else {
        if (!validationRules.required(input.value)) {
          formAddError(input);
          error++;
        }
        // модификация "Второй ШАНС"
        // input.addEventListener('input', () => formRemoveError(input));
      }
    }

    return error; // ВЕРНУТЬ ЗНАЧЕНИЕ
  }



  // --------------------------------------------------------------
  //НЕОБЯЗАТЕЛЬНЫЕ ВВЕДЕНИЯ ("ВТОРОЙ ШАНС")

  function handleInput(e) {
    const input = e.target;
    if (input.classList.contains('_req')) {
      if (input.classList.contains('_email')) {
        if (validationRules.email(input.value)) {
          formRemoveError(input);
        }
      } else {
        formRemoveError(input);
      }
    }
  }

  function handleChange(e) {
    const input = e.target;
    if (input.type === 'checkbox' && input.classList.contains('_req')) {
      if (validationRules.checkbox(input.checked)) {
        formRemoveError(input);
      }
    }
  }


  // ---------------------------------------------------------------

  // ДОБАВИТЬ КЛАСС
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  // УБРАТЬ КЛАСС
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  /*
  // -----------------------------------------------------------
    -Возможно добваить Preview IMAGE ? 
    -Может вынести это вообще в отдельный файл ?
    -Почему бы и нет 
  
  // -----------------------------------------------------------
  */

}

