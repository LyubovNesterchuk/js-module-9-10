// для логіки управління завданнями (створення, збереження, відображення)


// import { form, taskList } from './refs.js';
// import { renderTasks } from './markup-tasks.js';
// import { localStorageApi } from './local-storage-api.js';

// let tasks = [];

// export function initTasks() {
//   tasks = localStorageApi.loadTasks();
//   renderTasks(tasks);
// }

// export function createTask(event) {
//   event.preventDefault();
//   const { taskName, taskDescription } = event.currentTarget.elements;
//   const title = taskName.value.trim();
//   const description = taskDescription.value.trim();

//   if (!title || !description) return;

//   const newTask = {
//     id: Date.now().toString(),
//     title,
//     description
//   };

//   tasks.push(newTask);
//   localStorageApi.saveTasks(tasks);
//   renderTasks(tasks);
//   event.currentTarget.reset();
// }

// export function setupDeleteListener() {
//   taskList.addEventListener('click', e => {
//     if (e.target.classList.contains('task-list-item-btn')) {
//       const li = e.target.closest('li');
//       const id = li.dataset.id;

//       tasks = tasks.filter(task => task.id !== id);
//       localStorageApi.saveTasks(tasks);
//       renderTasks(tasks);
//     }
//   });
// }


let tasks = [];

export function getTasks() {
  return tasks;
}

export function setTasks(newTasks) {
  tasks = newTasks;
}

export function addTask(title, description) {
  const newTask = { id: Date.now().toString(), title, description };
  tasks.push(newTask);
  return newTask;
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}