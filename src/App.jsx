// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector(state => state.todos);
  const completedCount = useSelector(state => state.completedCount);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className='container'>
      <h1 className='heading'>My Todo List</h1>
      <input
        className='input'
        type="text"
        placeholder='Add todo...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='btn submit' onClick={handleAddTodo}>Submit</button>

      <div className='todo-list'>
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(index))}
            />
            <label>{todo.text}</label>
            <button className="delete-btn" onClick={() => dispatch(deleteTodo(index))}>
              Delete
            </button>
          </div>
        ))}
      </div>
      
      <h4 className='count'>Total complete items: <span>{completedCount}</span></h4>
    </div>
  );
};

export default App;
