import React from 'react';
import './Todo.css';
import { ReactComponent as CanIcon } from './../../assets/images/can.svg';
import { ReactComponent as PenIcon } from './../../assets/images/pen.svg';

const ToDoItem = (props) => {

  const {id, title} = props.item;
  const textId = props.id + 1;

  const onDeleteItem = () => {
    props.deleteItem(id)
  }

  const onOpenModal = () => {
    props.openModal(id, title);
  }

  return (
    <>
      <li className="todo__item">
        <span className="todo__id">{textId}</span>
        <span className="todo__text">{title}</span>
        <span className="todo__icons">
          <span className="todo__icon" onClick={onOpenModal}>
            <PenIcon />
          </span>
          <span className="todo__icon" onClick={onDeleteItem}>
            <CanIcon />
          </span>  
        </span>
      </li>
    </>
  )
}

export default ToDoItem;