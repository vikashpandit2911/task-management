import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Todo = ({ todo, handleDelete, handleEdit }) => {
  const { id, title, completed } = todo;

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <span onClick={() => handleEdit(id)}>{title}</span>
      <div className="actions">
        <FaEdit onClick={() => handleEdit(id)} className="edit-icon" />
        <FaTrash onClick={() => handleDelete(id)} className="delete-icon color-danger" />
      </div>
    </div>
  );
};

export default Todo;
