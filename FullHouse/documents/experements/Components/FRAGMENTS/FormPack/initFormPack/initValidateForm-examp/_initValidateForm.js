import { initFormPreview } from './formPreview.js';
import { sendFormData } from './formSender.js';

export const initValidateForm = (formId, previewConfig = {}, sendConfig = {}) => {
  const validationRules = {
    required: (value) => value.trim() !== '',
    email: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value),
    checkbox: (checked) => checked
  };

  const form = document.getElementById(formId);

  if (!form) {
    console.error(`Form with id "${formId}" not found`);
    return;
  }

  form.addEventListener('submit', formSend);
  form.addEventListener('input', handleInput);
  form.addEventListener('change', handleChange);

  // Инициализация предпросмотра, если настройки предоставлены
  if (previewConfig.imageInputId && previewConfig.previewId) {
    initFormPreview(previewConfig.imageInputId, previewConfig.previewId);
  }

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    if (error === 0) {
      form.classList.add('_sending');

      let formData = new FormData(form);

      try {
        const result = await sendFormData(formData, sendConfig);
        alert(result.message);
        form.reset();
        if (previewConfig.previewId) {
          document.getElementById(previewConfig.previewId).innerHTML = '';
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
    // ... (оставить как есть)
  }

  function handleInput(e) {
    // ... (оставить как есть)
  }

  function handleChange(e) {
    // ... (оставить как есть)
  }

  function formAddError(input, errorMessage) {
    // ... (оставить как есть)
  }

  function formRemoveError(input) {
    // ... (оставить как есть)
  }
};


/*
Использование : 

import { initValidateForm } from './formValidator.js';
----------------------------------------
  initValidateForm('myFormId', {
    imageInputId: 'formImage',
    previewId: 'formPreview'
  }, {
    url: 'https://your-server-url.com/submit',
    method: 'POST'
  });
----------------------------------------
*/