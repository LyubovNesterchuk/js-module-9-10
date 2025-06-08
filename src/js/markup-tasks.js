// https://www.npmjs.com/package/uuid

// import { taskList } from "./refs.js"

// export const createMarkUp = ({ title, description, id }) =>
//     `<li class="task-list-item" id=${id}>
// <button class="task-list-item-btn">Delete</button>
// <h3>${title}</h3>
// <p>${description}</p>
// </li>`

// // export const addTask = task => taskList.insertAdjacentHTML("beforeend", createMarkUp(task));
// export const renderTasks = tasks => {
//     taskList.innerHTML = tasks.map(createMarkUp).join('');
//   };


export function createTaskMarkup({ id, title, description }) {
    return `
      <li class="task-list-item" data-id="${id}">
       <button class="task-list-item-btn">Delete</button>
       <h3>${title}</h3>
        <p>${description}</p>
        
      </li>
    `;
  }


