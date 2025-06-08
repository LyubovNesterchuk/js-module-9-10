// для роботи з DOM (додавання та видалення елементів)

// import { addTask } from './markup-tasks.js';

// export function renderTasks(tasks) {
//   taskList.innerHTML = '';
//   tasks.forEach(task => addTask(task));
// }

import { refs } from './refs.js';
import { createTaskMarkup } from './markup-tasks.js';

export function renderTasks(tasks) {
  refs.taskList.innerHTML = tasks.map(createTaskMarkup).join('');
}

export function removeTaskFromDOM(id) {
  const taskEl = refs.taskList.querySelector(`[data-id="${id}"]`);
  if (taskEl) taskEl.remove();
}
