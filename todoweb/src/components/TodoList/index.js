import React from 'react';
import TodoItem from '../TodoItem';
import {Header, List, ItemList, RemoveButton} from '../styled/Lib';

const TodoList = (props) => {
    return (
        <div>
            <Header>Tasks</Header>
            <List>
                {props.todos.map((todo, index) => (
                    <ItemList key={todo.id} >
                        <TodoItem todo={todo} index={index} onChange={() => props.onCheckToggle(todo, index)} />
                        <RemoveButton onClick={props.onRemoveClick(todo)}>Remove</RemoveButton>
                    </ItemList>
                ))}
            </List>
        </div>
    );
};

export default TodoList;
