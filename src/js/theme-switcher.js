// import { body, themeToggle } from './refs.js';
// import { localStorageApi } from './local-storage-api.js';

//   function initTheme() {
//   const savedTheme = localStorageApi.loadTheme();

//   // Якщо збережена тема є — застосовуємо її
//   if (savedTheme === 'theme-dark') {
//     body.classList.add('theme-dark');
//   } else {
//     body.classList.add('theme-light');
//   }

//   themeToggle.addEventListener('click', () => {
//     // Перемикаємо обидва класи
//     const darkNow = body.classList.toggle('theme-dark');
//     body.classList.toggle('theme-light');

//     // Зберігаємо тему в localStorage
//     const newTheme = darkNow ? 'theme-dark' : 'theme-light';
//     localStorageApi.saveTheme(newTheme);
//   });
// }


// export { initTheme };


import { refs } from './refs.js';
import { saveTheme, loadTheme } from './local-storage-api.js';

export function initTheme() {
  const savedTheme = loadTheme();
  refs.body.className = savedTheme;
}

export function setupThemeToggle() {
  refs.themeToggle.addEventListener('click', () => {
    refs.body.classList.toggle('theme-light');
    refs.body.classList.toggle('theme-dark');
    const currentTheme = refs.body.classList.contains('theme-light') ? 'theme-light' : 'theme-dark';
    saveTheme(currentTheme);
  });
}