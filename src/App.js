import React from 'react';
import './App.css';
import AddFormContainer from './components/addForm/AddFormContainer';
import Header from './components/header/Header';
import TodoContainer from './components/todo/TodoContainer';
import TodoProvider from './redux/TodoPrivider';

const App = () => {
  return (
    <>
      <Header />
      <TodoProvider>     
        <AddFormContainer />
        <TodoContainer />
      </TodoProvider>
    </>
  );
}

export default App;
