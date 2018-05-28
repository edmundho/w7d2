import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodo} from './actions/todo_actions';
import {receiveTodos} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  const store = configureStore();

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  window.store = store;

  ReactDOM.render(<h1>Todos App</h1>, root);
});
