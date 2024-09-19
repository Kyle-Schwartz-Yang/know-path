
//! ПРОДВИНУТАЯ РЕАЛИЗАЦИЯ ИЛИ ХЛАМ ХЛАМСКИЙ
// В целом есть что подсмотреть 
// Генерирования сообщение о ошибке 


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

  const formImage = form.querySelector('#formImage');
  const formPreview = form.querySelector('#formPreview');

  form.addEventListener('submit', formSend);
  form.addEventListener('input', handleInput);
  form.addEventListener('change', handleChange);

  if (formImage) {
    formImage.addEventListener('change', () => {
      uploadFile(formImage.files[0]);
    });
  }

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    if (error === 0) {
      form.classList.add('_sending');

      let formData = new FormData(form);
      if (formImage && formImage.files[0]) {
        formData.append('image', formImage.files[0]);
      }

      try {
        const response = await fetch('your-server-url', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message);
          if (formPreview) formPreview.innerHTML = '';
          form.reset();
        } else {
          throw new Error('Ошибка при отправке формы');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    formReq.forEach((input) => {
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (!validationRules.email(input.value)) {
          formAddError(input, errorMessages.email);
          error++;
        }
      } else if (input.type === 'checkbox' && !validationRules.checkbox(input.checked)) {
        formAddError(input, errorMessages.checkbox);
        error++;
      } else if (!validationRules.required(input.value)) {
        formAddError(input, errorMessages.required);
        error++;
      }
    });

    return error;
  }

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

  function formAddError(input, errorMessage) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

    //+ ИНТЕРЕСНЫЙ МОМЕНТ 
    let errorElement = input.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
      errorElement = document.createElement('div');
      errorElement.classList.add('error-message');
      input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
    errorElement.textContent = errorMessage;
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');

    let errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.remove();
    }
  }

  function uploadFile(file) {
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      alert('Разрешены только изображения.');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Файл должен быть менее 2 МБ.');
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      if (formPreview) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Превью">`;
      }
    };
    reader.onerror = function (e) {
      alert('Ошибка загрузки файла');
    };
    reader.readAsDataURL(file);
  }
};