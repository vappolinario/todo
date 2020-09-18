import React, { useState, useCallback, useEffect } from 'react';
import TodoList from '../TodoList';
import FormAddTodo from '../FormAddTodo';
import ErrorLabel from '../ErrorLabel';
import {Container, Title} from '../styled/Lib';
import * as todoclient from '../../clients/todoclient.js';
import { useToken } from '../../contexts/Token';
import { useTodos } from '../../contexts/Todos';

const TodoApp = () => {
    const { token } = useToken();
    const { todos, setTodos } = useTodos();

    const [error] = useState('');

    useEffect(() => {
        todoclient.getTodoList(token, (items) => setTodos(items));
    }, [setTodos, token]);

    const removeTodo = useCallback((todo) => (_) => {
        todoclient.removeTodoItem(
            todo.id,
            token,
            () => setTodos(todos.filter(otherTodo => otherTodo !== todo))
        );
    }, [todos, token, setTodos]);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        todoclient.toggleTodoState(todo, token, () => setTodos(newTodos));
    }, [todos, token, setTodos]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        const item = e.target[0].value;
        if (!item.trim()) return;
        const newItem = { id: 0, content: item, done: false };
        todoclient.addTodoItem(
            newItem,
            token,
            (response) => {
                setTodos([ response, ...todos, ]);
            });
    }, [todos, token, setTodos]);

    return (
        <Container>
            <Title>Todo List</Title>
            <FormAddTodo
                onFormSubmitted={formSubmitted}
            />
            <TodoList
                todos={todos}
                onRemoveClick={removeTodo}
                onCheckToggle={toggleTodo}
            />
            <ErrorLabel error={error}/>
        </Container>
    );
};

export default TodoApp;

