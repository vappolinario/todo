import React from 'react';
import {View, StyleSheet} from 'react-native';
import TodoItem from './TodoItem.js';

const TodoList = ({todos, onCheckToggle}) => {
  return (
    <View style={styles.view}>
      {todos.map((todo, index) => (
        <TodoItem
          key={'app_' + todo.id}
          todo={todo}
          index={index}
          onChange={onCheckToggle}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
  },
});

export default TodoList;
