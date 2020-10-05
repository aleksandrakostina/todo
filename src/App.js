import React from 'react';
import './App.css';
import AddFormContainer from './components/addForm/AddFormContainer';
import Header from './components/header/Header';
import PopapContainer from './components/popap/PopapContainer';
import TodoContainer from './components/todo/TodoContainer';
import TodoProvider from './redux/TodoPrivider';

const App = () => {
  return (
    <>
      <Header />
      <TodoProvider>     
        <AddFormContainer />
        <TodoContainer />
        <PopapContainer />
      </TodoProvider>
    </>
  );
}

export default App;
