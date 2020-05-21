import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

const Todo = ({ todo }) => {
  const { removeTodo, findItem } = useContext(TodoListContext);

  return (
    <li className="list-item">
      <span>{todo.title}</span>
      <div>
        <button
          onClick={() => removeTodo(todo.id)}
          className="btn-delete todo-btn"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(todo.id)} className="btn-edit todo-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Todo;
