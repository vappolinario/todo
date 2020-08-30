import axios from 'axios';

const API_URL = 'http://192.168.100.5:5000/api/todo/';

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
      Authorization: 'Bearer ' + token.access_token,
    },
    data: {id: todo.id, done: !todo.done},
  };

  axios(toggleTodo)
    .then(() => updateList())
    .catch((err) => console.log('error toggle api', err));
}

export function addTodoItem(item, token, callback) {
  const toggleTodo = {
    method: 'post',
    url: `${API_URL}`,
    headers: {
      Authorization: 'Bearer ' + token.access_token,
    },
    data: {content: item, done: false},
  };

  axios(toggleTodo)
    .then((response) => callback(response.data))
    .catch((err) => console.log('error toggle api', err));
}
