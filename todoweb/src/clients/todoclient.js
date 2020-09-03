import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export function getTodoList(token, setTodos) {
  const getTodos = {
    method: 'get',
    url: API_URL,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  axios(getTodos)
    .then((res) => setTodos(res.data.tasks))
    .catch((err) => {
      console.log('error todo api', err);
      setTodos([]);
    });
}

export function toggleTodoState(todo, token, updateList) {
  const toggleTodo = {
    method: 'put',
    url: `${API_URL}${todo.id}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: {id: todo.id, done: !todo.done},
  };

  axios(toggleTodo)
    .then(() => updateList())
    .catch((err) => console.log('error toggle api', err));
}

export function addTodoItem(item, token, callback) {
  const add = {
    method: 'post',
    url: `${API_URL}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: {content: item.content, done: false},
  };

  axios(add)
    .then((response) => callback(response.data))
    .catch((err) => console.log('error toggle api', err));
}

export function removeTodoItem(itemId, token, callback) {
  const remove = {
    method: 'delete',
    url: `${API_URL}${itemId}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  axios(remove)
    .then((response) => callback(response.data))
    .catch((err) => console.log('error toggle api', err));
}
