import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ToDo from './components/todo/Todo';
import TodoProvider from './redux/TodoPrivider';

const App = () => {
  return (
    <>
      <Header />
      <TodoProvider>
        <ToDo />
      </TodoProvider>
    </>
  );
}

export default App;
