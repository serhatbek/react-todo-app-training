import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from './Header';
import TodoListContextProvider, {
  TodoListContext,
} from '../context/TodoListContext';
import '../App.css';

const App = () => {
  return (
    <TodoListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoListContextProvider>
  );
};

export default App;
