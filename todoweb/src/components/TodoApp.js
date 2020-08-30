import React, { useState, useCallback, useEffect } from 'react';
import TodoList from './TodoList';
import FormAddTodo from './FormAddTodo';
import ErrorLabel from './ErrorLabel';

const TodoApp = (props) => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');

    const TODO_URL = "http://localhost:5000/api/todo/";

    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    const errorHanlder = (err) => {
        if ( err.text === "function" ) {
            err.text().then( errorMessage => setError(errorMessage));
        }
        else {
            setError('' + err);
        }
    };

    const requestHeaders = useCallback(() => {
        if(!props.keycloak) return {};
        const header = {
            headers: {
                'Authorization': 'Bearer ' + props.keycloak.token,
                'Content-Type': 'application/json'
            }};
            return header;
    }, [props]);

    const removeTodo = useCallback((todo) => (_) => {
        fetch(`${TODO_URL}${todo.id}`, {
            ...requestHeaders(),
            method: "DELETE",
        })
            .then(_  => {
                setTodos(todos.filter(otherTodo => otherTodo !== todo));
            })
            .catch(err => { errorHanlder(err) });
    }, [todos, requestHeaders]);

    useEffect(() => {
        fetch(TODO_URL, requestHeaders() )
            .then(res => res.json())
            .then(response => {
                setTodos(response.tasks);
            })
            .catch(err => { errorHanlder(err) });
    }, [props, requestHeaders]);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        fetch(`${TODO_URL}${todo.id}`, {
            ...requestHeaders(),
            method: "PUT",
            body: JSON.stringify({ id: todo.id,  done: !todo.done})
        })
            .then(_  => {
                setTodos(newTodos);
            })
            .catch(err => { errorHanlder(err) });
    }, [todos, requestHeaders]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        fetch(TODO_URL, {
            method: "POST",
            ...requestHeaders(),
            body: JSON.stringify({ id: 0, content: newTodo, done: false})
        })
            .then(res => res.json())
            .then(response => {
                setTodos([ response, ...todos, ])
            })
            .catch(err => { errorHanlder(err) });
        setNewTodo('');
    }, [todos, newTodo, requestHeaders]);

    return (
        <div className="container">
            <h2>Todo List</h2>
            <FormAddTodo newTodo={newTodo} onFormSubmitted={formSubmitted} onNewTodoChange={onNewTodoChange} />
            <TodoList todos={todos} onRemoveClick={removeTodo} onCheckToggle={toggleTodo} />
            <ErrorLabel error={error}/>
        </div>
    );
};

export default TodoApp;

