// Мой вариатн, вполне рабочий, самое главное понятный мне !

const initToogleThemeDark = () => {
  const switchElement = document.querySelector('.darktheme');
  if (!switchElement) return; // Проверка на существование элемента

  const htmlElement = document.documentElement;


  const savedTheme = localStorage.getItem('user-theme');
  if (savedTheme) {
    htmlElement.classList.add(savedTheme);

  }

  switchElement.addEventListener('click', (e) => {
    e.preventDefault();

    htmlElement.classList.toggle('dark');


    // switchElement.classList.add('_active')

    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('user-theme', 'dark');
    } else {
      localStorage.removeItem('user-theme');
    }

    /*
    - Просто другой вариант записи 
    if (localStorage.getItem('user-theme') === 'dark') {
      localStorage.removeItem('user-theme');
    } else {
      localStorage.setItem('user-theme', 'dark');
    }
    */
  })
}


