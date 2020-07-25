import React from 'react';

const FormAddTodo = (props) => {
    return (
        <form onSubmit={props.onFormSubmitted}>
            <label htmlFor="New todo">Enter task:</label>
            <input
                id="newTodo"
                name="newTodo"
                value={props.newTodo}
                onChange={props.onNewTodoChange}
            />
            <button>Add Todo</button>
        </form>
    );
};

export default FormAddTodo;
