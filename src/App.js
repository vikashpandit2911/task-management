import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1/todos'
      );
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        title: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: input } : todo
    );
    setTodos(updatedTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="app">
      <h1 className='bg-dark p-4 text-white'>Task Management</h1>
      <div className="input-container">
        <input className='inputstyle' type="text" placeholder="Add a new task..." value={input} onChange={handleInputChange}/>
        <button className='btn btn-success' onClick={handleAdd}>Add</button>
        <button class="btn btn-info" onClick={handleToggleCompleted}>
          {showCompleted ? 'Show All' : 'Show Completed'}
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
