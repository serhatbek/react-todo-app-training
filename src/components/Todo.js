import React from 'react';

const Todo = () => {
  return (
    <li className="list-item">
      <span>Todo Title</span>
      <div>
        <button className="btn-delete todo-btn">
          <i class="fas fa-trash-alt"></i>
        </button>
        <button className="btn-edit todo-btn">
          <i class="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Todo;
