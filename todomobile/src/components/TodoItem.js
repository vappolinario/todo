import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const TodoItem = ({todo, onChange, index}) => {
  return (
    <View style={styles.view}>
      <CheckBox
        disabled={false}
        value={todo.done}
        onValueChange={onChange(todo, index)}
      />
      <Text key={todo.id}> {todo.content} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
});

export default TodoItem;
