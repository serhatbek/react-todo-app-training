import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { todo: 'Read the book', id: 1 },
    { todo: 'Watch the documentary', id: 2 },
    { todo: 'Finish 125 steps', id: 3 },
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
