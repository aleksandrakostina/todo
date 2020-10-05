import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteItem, openModal, getTodos } from './../../redux/actionCreators';
import Todo from './Todo';
import { ReactComponent as Loader } from './../../assets/images/loader.svg';

const ToDoContainer = ({ getTodos, isLoading, todos, deleteItem, openModal }) => {

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      {isLoading 
        ? <Loader /> 
        : <Todo todos={todos}
                deleteItem={deleteItem}
                openModal={openModal} />}
    </>
  ) 
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    isLoading: state.todos.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (id, title) => {
      dispatch(openModal(id, title));
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
    getTodos: () => {
      dispatch(getTodos());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);