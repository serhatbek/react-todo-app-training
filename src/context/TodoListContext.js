import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { todoTitle: 'Read the book', id: 1 },
    { todoTitle: 'Watch the documentary', id: 2 },
    { todoTitle: 'Finish 125 steps', id: 3 },
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
