import React from 'react';

const TodoListItem = ({ todo }) => (
  <li>
    <h3>{todo.title}</h3>
    <span>{todo.body}</span>
  </li>
);

export default TodoListItem;
