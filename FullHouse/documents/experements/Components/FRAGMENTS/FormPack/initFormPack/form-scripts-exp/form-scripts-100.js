//! ЦЕЛЕНЬКИЙ МНОЙ НАПИСАНЫЙ + КОМЕНТАРИИ 

const form = document.getElementById('form');

form.addEventListener('submit', formSend);


async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);

  // ------------------------------------------------------ PART 3 (Отправить форму)
  // let formData = new FormData(form);
  // formData.append('image', formImage.files[0]);

  // ------------------------------------------------------ PART 3 (Отправить форму)
  if (error === 0) {
    // error 0 значит что ошибок в форме не обнаруженно

    form.classList.add('_sending'); // Загрузка спинер

    /*
// ------------------------------------------------------ PART 3 (Отправить форму)
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      console.error(response.error);
    }

    let result = await response.json();
    console.log(result.message);
// ------------------------------------------------------ PART 3 (Отправить форму)
    */

    setTimeout(() => {
      formPreview.innerHTML = '';
      form.reset();
      form.classList.remove('_sending');
    }, 2000);

  } else {
    // alert('Заполните пожалуйста форму!')
  }

}

function formValidate(form) {
  let error = 0;
  // Обязательно заполненные поля должны быть с классом ._req
  let formReq = document.querySelectorAll('._req');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    // Убираем стилизацию ошибки если пользователь вводит


    if (input.classList.contains('_email')) {
      if (isValidEmail(input)) {
        formAddError(input);
        error++;
      }
      // ---------------------------------------------
      input.addEventListener('input', () => {
        if (!isValidEmail(input)) {
          formRemoveError(input)
        }
        // ---------------------------------------------

      });

    } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
      formAddError(input);
      error++;

      // ---------------------------------------------
      input.addEventListener('change', () => {
        if (input.checked) {
          formRemoveError(input)
        }
      });
      // ---------------------------------------------
    } else {
      if (input.value.trim() === '') {
        formAddError(input);
        error++;
      }
      // ---------------------------------------------
      input.addEventListener('input', () => formRemoveError(input));
      // ---------------------------------------------
    }
  }

  return error;
}

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}

function isValidEmail(input) {
  //- return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  //- Если все эти символы содержит поле email значит получаем true :
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
  return !emailRegex.test(input.value);
}


// -------------------------------------------------PART 2 (Preview IMAGE)

//Получаем инпут file в переменную
const formImage = document.getElementById('formImage');
//Получаем див для превью в переменную
const formPreview = document.getElementById('formPreview');

//Слушаем изменения в инпуте file
formImage.addEventListener('change', () => {
  uploadFile(formImage.files[0]);
});

function uploadFile(file) {
  // провераяем тип файла
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Разрешены только изображения.');
    formImage.value = '';
    return;
  }
  // проверим размер файла (<2 Мб)
  if (file.size > 2 * 1024 * 1024) {
    alert('Файл должен быть менее 2 МБ.');
    return;
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
  };
  reader.onerror = function (e) {
    alert('Ошибка');
  };
  reader.readAsDataURL(file);
}
// -------------------------------------------------PART 2 (Preview IMAGE)