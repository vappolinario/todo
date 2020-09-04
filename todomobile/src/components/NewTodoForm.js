import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';

const NewTodoForm = ({onPress}) => {
  const [newTodo, setNewTodo] = useState('New Task');
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        placeholder="New task"
        onChangeText={(text) => setNewTodo(text)}
      />
      <Button title="Add" onPress={onPress(newTodo)} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1.0,
  },
});

export default NewTodoForm;
