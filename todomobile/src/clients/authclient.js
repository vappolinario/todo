import axios from 'axios';
import qs from 'qs';

const AUTH_URL =
  'http://192.168.100.5:8080/auth/realms/todoapp/protocol/openid-connect/token/';

export function login(username, password, callback) {
  var data = qs.stringify({
    grant_type: 'password',
    client_id: 'todo-app',
    username: username,
    password: password,
  });

  var postToken = {
    method: 'post',
    url: AUTH_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  axios(postToken)
    .then((response) => callback(response.data))
    .catch((error) => console.log('token error', error));
}
