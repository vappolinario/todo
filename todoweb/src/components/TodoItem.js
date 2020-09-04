import React from 'react';
import {ItemLabel} from './Lib';

const TodoItem = (props) => {
    return (
        <ItemLabel todo={props.todo}>
            <input
                checked={props.todo.done}
                type="checkbox"
                onChange={props.onChange(props.todo, props.index)}
            />
            {props.todo.content}
        </ItemLabel>
    );
};

export default TodoItem;
