
import { createStore } from 'redux';

const initialState = {
  todos: [],
  completedCount: 0 
};


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
        completedCount: state.completedCount 
      };
    case 'TOGGLE_TODO':
      const updatedTodos = state.todos.map((todo, index) =>
        index === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

   
      const newCompletedCount = updatedTodos.filter(todo => todo.completed).length;

      return {
        ...state,
        todos: updatedTodos,
        completedCount: newCompletedCount 
      };
    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter((_, index) => index !== action.payload);
  
      return {
        ...state,
        todos: filteredTodos,
        completedCount: filteredTodos.filter(todo => todo.completed).length
      };
    default:
      return state;
  }
};

export const store = createStore(todoReducer);
