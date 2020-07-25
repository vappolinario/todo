import React from 'react';

const TodoItem = (props) => {
    return (
        <div>
            <input
                checked={props.todo.done}
                type="checkbox"
                onChange={props.onChange(props.todo, props.index)}
            />
            <span className={props.todo.done ? 'done' : ''}>{props.todo.content}</span>

        </div>
    );
};

export default TodoItem;
