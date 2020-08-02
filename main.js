const submitTodo = document.querySelector('.submit-todo');
const list = document.querySelector('.todos')

// Add Todos
submitTodo.addEventListener('submit', e => {
  e.preventDefault();

  const todo = submitTodo.add.value.trim();
  if (todo.length) {
    list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between aligh-items-center">
        <span class="mr-3">${todo}</span>
        <i class="far fa-trash-alt del"></i>
      </li>
      `;
    submitTodo.reset();  
  }
});

// Remove Todos
list.addEventListener('click', e => {
  if(e.target.classList.contains('del')) {
    e.target.parentElement.remove();
  }
});