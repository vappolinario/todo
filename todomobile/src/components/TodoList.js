import React from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem.js';

const TodoList = ({todos, onCheckToggle}) => {
  const toggle = (a, b) => onCheckToggle(a, b);

  const renderItem = ({item, index}) => {
    return <TodoItem todo={item} index={index} onChange={toggle} />;
  };

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => 'lst_' + item.id}
    />
  );
};

export default TodoList;
