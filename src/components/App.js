import React from 'react';
import TodoList from './TodoList';
import TodoListContextProvider, {
  TodoListContext,
} from '../context/TodoListContext';
import '../App.css';

const App = () => {
  return (
    <TodoListContextProvider>
      <div>
        <TodoList />
      </div>
    </TodoListContextProvider>
  );
};

export default App;
