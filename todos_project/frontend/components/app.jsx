import React from 'react';
import connect from './todos/todo_list_container';
import TodoList from './todos/todo_list_container';

export const App = () => {
  return (
    <div>
    <h1>Our Todo App</h1>
    <TodoList />
    </div>
  );
};
