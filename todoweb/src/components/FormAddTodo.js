import React from 'react';

const FormAddTodo = (props) => {
    return (
        <form onSubmit={props.onFormSubmitted}>
            <h3 htmlFor="newTodo">Add task</h3>
            <input
                id="newTodo"
                name="newTodo"
                value={props.newTodo}
                onChange={props.onNewTodoChange}
            />
            <button>Add</button>
        </form>
    );
};

export default FormAddTodo;
