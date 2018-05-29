import React from 'react';
import TodoListContainer from './todos/todo_list_container';

export const App = () => {
  return (
    <div>
      <h1>Our Todos</h1>
      <TodoListContainer />
    </div>
  );
};
