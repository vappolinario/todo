import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import * as todoclient from '../clients/todoclient';
import {useUserCredential} from '../contexts/AuthContext';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const {token} = useUserCredential();

  useEffect(() => {
    todoclient.getTodoList(token.access_token, setTodos);
  }, [token]);

  const handleGetListClick = useCallback(() => {
    todoclient.getTodoList(token.access_token, setTodos);
  }, [token]);

  const handleAddTodo = useCallback(
    (item) => () => {
      todoclient.addTodoItem(item, token, (response) => {
        setTodos([response, ...todos]);
      });
      handleGetListClick();
    },
    [token, todos, handleGetListClick],
  );

  const handleToggleDone = useCallback(
    (todo, index) => (_) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1, {
        ...todo,
        done: !todo.done,
      });
      todoclient.toggleTodoState(todo, token, setTodos(newTodos));
    },
    [todos, token],
  );

  const handleRemoveClick = useCallback(
    (id) => {
      console.log('remove id', id);
      todoclient.removeItem(id, token, () => {
        handleGetListClick();
      });
    },
    [token, handleGetListClick],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <NewTodoForm onPress={handleAddTodo} />
          <Button onPress={handleGetListClick} title="Get List" />
          <TodoList
            todos={todos}
            onCheckToggle={handleToggleDone}
            onRemoveClick={handleRemoveClick}
          />
        </View>
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

export default TodoApp;
