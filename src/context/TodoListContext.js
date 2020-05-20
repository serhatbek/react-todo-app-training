import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { todoTitle: 'Read the book', id: 1 },
    { todoTitle: 'Watch the documentary', id: 2 },
    { todoTitle: 'Finish 125 steps', id: 3 },
  ]);

  const addTodo = (title) => {
    setTodos([...todos, { todoTitle: title, id: uuid() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearList = () => {
    setTodos([]);
  };

  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo, clearList }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
