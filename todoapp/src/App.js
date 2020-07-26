import React, { useState, useCallback, useEffect } from 'react';
import TodoList from './components/TodoList';
import FormAddTodo from './components/FormAddTodo';
import ErrorLabel from './components/ErrorLabel';

const App = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');

    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    const errorHanlder = (err) => {
        if ( err.text === "function" ) {
            err.text().then( errorMessage => setError(errorMessage));
        }
        else {
            setError('' + err);
        }
    };

    const removeTodo = useCallback((todo) => (_) => {
        fetch(`http://localhost:5000/api/todo/${todo.id}`, {
            method: "DELETE",
        })
            .then(_  => {
                setTodos(todos.filter(otherTodo => otherTodo !== todo));
            })
            .catch(err => { errorHanlder(err) });
    }, [todos]);

    useEffect(() => {
        fetch("http://localhost:5000/api/todo")
            .then(res => res.json())
            .then(response => {
                setTodos(response);
            })
            .catch(err => { errorHanlder(err) });
    }, []);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        setTodos(newTodos);
    }, [todos]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        fetch("http://localhost:5000/api/todo", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: 0, content: newTodo, done: false})
        })
            .then(res => res.json())
            .then(response => {
                setTodos([ response, ...todos, ])
            })
            .catch(err => { errorHanlder(err) });
        setNewTodo('');
    }, [todos, newTodo]);

    return (
        <div className="container">
            <h2>Todo List</h2>
            <FormAddTodo newTodo={newTodo} onFormSubmitted={formSubmitted} onNewTodoChange={onNewTodoChange} />
            <TodoList todos={todos} onRemoveClick={removeTodo} onCheckToggle={toggleTodo} />
            <ErrorLabel error={error}/>
        </div>
    );
};

export default App;
