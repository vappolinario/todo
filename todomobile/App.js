import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import qs from 'qs';

import TodoList from './src/components/TodoList.js';

const App: () => React$Node = () => {
  const [token, setToken] = useState('');
  const [todos, setTodos] = useState([]);

  const AUTH_URL =
    'http://192.168.100.5:8080/auth/realms/todoapp/protocol/openid-connect/token/';
  const API_URL = 'http://192.168.100.5:5000/api/todo/';

  const getToken = useCallback(() => {
    var data = qs.stringify({
      grant_type: 'password',
      client_id: 'todo-app',
      username: 'vitor',
      password: 'teste123',
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
      .then(function (response) {
        setToken(response.data);
        setTodos([]);
      })
      .catch(function (error) {
        console.log('token error', error);
      });
  }, [setToken]);

  const getTodoList = useCallback(() => {
    const getTodos = {
      method: 'get',
      url: API_URL,
      headers: {
        Authorization: 'Bearer ' + token.access_token,
      },
    };

    axios(getTodos)
      .then((res) => setTodos(res.data.tasks))
      .catch((err) => console.log('error todo api', err));
  }, [token]);

  const toggleDone = useCallback(
    (todo, index) => (_) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1, {
        ...todo,
        done: !todo.done,
      });

      const toggleTodo = {
        method: 'put',
        url: `${API_URL}${todo.id}`,
        headers: {
          Authorization: 'Bearer ' + token.access_token,
        },
        data: {id: todo.id, done: !todo.done},
      };

      axios(toggleTodo)
        .then(() => setTodos(newTodos))
        .catch((err) => console.log('error toggle api', err));
    },
    [todos, token],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Button onPress={getToken} title="Get Token" />
            <Text> {token.access_token} </Text>
            <Button onPress={getTodoList} title="Get List" />
            <TodoList todos={todos} onCheckToggle={toggleDone} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
