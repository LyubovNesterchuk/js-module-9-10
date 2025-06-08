// для логіки управління завданнями (створення, збереження, відображення)

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