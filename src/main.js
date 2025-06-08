
// для ініціалізації застосунку та основної логіки


/*
  Створи список справ.

План на тиждень:
 Понеділок  Долучаємось на заняття з викладачем.
 Вівторок  Читаємо конспект, повторюємо пройдене.
 Середа  Практика, практика і ще раз практика! Чекаємо вас на занятті
 Четвер Виправляємо помилки та закріплюємо знання домашнім завданням.
 П’ятниця  Легке навчання: відео, подкасти, інтерактивні вправи для закріплення.
 Субота Самоперевірка та повторення.
 Неділя  Відпочиваємо та завершуємо тиждень здачею ДЗ.



  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
// import { form } from './js/refs.js';
// import { createTask } from './js/tasks.js';
// form.addEventListener('submit', createTask);

// import { form } from './js/refs.js';
// import { initTasks, createTask, setupDeleteListener } from './js/tasks.js';

// document.addEventListener('DOMContentLoaded', () => {
//   initTasks(); // Завантаження з localStorage
//   form.addEventListener('submit', createTask); // Додавання
//   setupDeleteListener(); // Видалення
// });

// import { initTheme } from './js/theme-switcher.js';
// //document.addEventListener("DOMContentLoaded", initTheme);
// initTheme();

import { refs } from './js/refs.js';
import { addTask, deleteTask, getTasks, setTasks } from './js/tasks.js';
import { saveTasks, loadTasks } from './js/local-storage-api.js';
import { renderTasks, removeTaskFromDOM } from './js/render-tasks.js';
import { initTheme, setupThemeToggle } from './js/theme-switcher.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupThemeToggle();

  const savedTasks = loadTasks();
  setTasks(savedTasks);
  renderTasks(savedTasks);
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const title = refs.form.taskName.value.trim();
  const description = refs.form.taskDescription.value.trim();

  if (!title || !description) {
    alert('Будь ласка, заповніть обидва поля: заголовок і опис завдання.');
    return;
  }

  const newTask = addTask(title, description);
  renderTasks(getTasks());
  saveTasks(getTasks());

  refs.form.reset();
});

refs.taskList.addEventListener('click', e => {
  if (e.target.classList.contains('task-list-item-btn')) {
    const taskId = e.target.closest('li').dataset.id;
    deleteTask(taskId);
    removeTaskFromDOM(taskId);
    saveTasks(getTasks());
  }
});
