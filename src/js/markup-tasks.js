// https://www.npmjs.com/package/uuid


export function createTaskMarkup({ id, title, description }) {
    return `
      <li class="task-list-item" data-id="${id}">
       <button class="task-list-item-btn">Delete</button>
       <h3>${title}</h3>
        <p>${description}</p>
        
      </li>
    `;
  }


