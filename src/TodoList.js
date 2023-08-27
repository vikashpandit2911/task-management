import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
