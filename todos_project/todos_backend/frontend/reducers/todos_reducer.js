import { RECEIVE_TODO } from '../actions/todo_actions.js';
import { RECEIVE_TODOS } from '../actions/todo_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODO:
      let stateCopy = merge({}, state);
      stateCopy[action.todo.id] = action.todo;
      return stateCopy;
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    default:
      return state;
  }
};


export default todosReducer;
