import React, { useContext, useState } from 'react';
import { TodoListContext } from '../context/TodoListContext';

const TodoForm = () => {
  const { addTodo, clearList } = useContext(TodoListContext);

  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="todo-input"
        placeholder="Add to do"
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-todo-btn">
          Add To Do
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
