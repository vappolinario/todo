import React from 'react';
import styled from 'styled-components';
import {Button} from './Button.js';
import {Header} from './Header.js';

const AddButton = styled(Button)``;

const Input = styled.input`
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    height: 18px;
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
    font-family: Lato, sans-serif;
    color: #888;
    float: left;
    width: 318px;

    &:focus {
        color: #333;
    }
`;

const FormAddTodo = (props) => {
    return (
        <form onSubmit={props.onFormSubmitted}>
            <Header>Add task</Header>
            <Input
                id="newTodo"
                name="newTodo"
                value={props.newTodo}
                onChange={props.onNewTodoChange}
            />
            <AddButton>Add</AddButton>
        </form>
    );
};

export default FormAddTodo;
