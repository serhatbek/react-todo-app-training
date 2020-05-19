import React from 'react';

const TodoForm = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="todo-input"
        placeholder="Add to do"
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-todo-btn">
          Add To Do
        </button>
        <button className="btn clear-btn">Clear</button>
      </div>
    </form>
  );
};

export default TodoForm;
