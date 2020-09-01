import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const TodoItem = ({todo, onChange, index, onRemoveClick}) => {
  const handleRemove = (id) => onRemoveClick(id);
  return (
    <View style={styles.outter}>
      <View style={styles.inner}>
        <CheckBox
          disabled={false}
          value={todo.done}
          onValueChange={onChange(todo, index)}
        />
        <Text key={todo.id}> {todo.content} </Text>
      </View>
      <Button
        color="#BA160C"
        title="Remove"
        onPress={() => handleRemove(todo.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
  },
  outter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodoItem;
