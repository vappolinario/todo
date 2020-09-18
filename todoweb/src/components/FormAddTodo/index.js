import React, { useState, useCallback } from 'react';
import {AddButton, Header, Input} from '../styled/Lib.js';

const FormAddTodo = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    return (
        <form onSubmit={props.onFormSubmitted}>
            <Header>Add task</Header>
            <Input
                id="newTodo"
                name="newTodo"
                value={newTodo}
                onChange={onNewTodoChange}
            />
            <AddButton>Add</AddButton>
        </form>
    );
};

export default FormAddTodo;
