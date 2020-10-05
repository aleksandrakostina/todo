import React from 'react';
import './Todo.css';
import ToDoItem from './TodoItem';

const Todo = (props) => {

  const todoitems = props.todos.map((item, index) => <ToDoItem 
                      key={item.id} 
                      item={item}
                      id={index}
                      deleteItem={props.deleteItem}
                      openModal={props.openModal} />);
  
  return (
    <div className="todo">
      <div className="wrapper">   
        {todoitems.length 
          ? <ul>
              {todoitems}
            </ul>
          : <span>Нет задач</span>}
      </div>   
    </div>
  ) 
}

export default Todo;