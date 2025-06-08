
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