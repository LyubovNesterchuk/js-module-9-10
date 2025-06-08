// для збереження та завантаження завдань у локальному сховищі


// const TASKS_KEY = 'tasks';
// const THEME_KEY = 'theme';

// export const localStorageApi = {
//   saveTasks(tasks) {
//     localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
//   },

//   loadTasks() {
//     const data = localStorage.getItem(TASKS_KEY);
//     return data ? JSON.parse(data) : [];
//   },

//   saveTheme(theme) {
//     localStorage.setItem(THEME_KEY, theme);
//   },

//   loadTheme() {
//     return localStorage.getItem(THEME_KEY);
//   },
// };

const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function loadTasks() {
  return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
  return localStorage.getItem(THEME_KEY) || 'theme-light';
}