import { reset } from "redux-form";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, OPEN_MODAL, CLOSE_MODAL, FETCH_SUCCESS, FETCH_FAILURE, FETCH_INIT } from "./actions";
import { todoFetch } from './../api/fetchTodo';

export function fetchInitial() {
  return { type: FETCH_INIT };
}

export function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, data };
}

export function fetchFailure() {
  return { type: FETCH_FAILURE };
}
export function addTodo(newtodo) {
  return { type: ADD_TODO, newtodo };
}

export function removeTodo(id) {
  return { type: DELETE_TODO, id };
}

export function updateTodo(todo) {
  return { type: UPDATE_TODO, todo };
}

export function closeModal() {
  return { type: CLOSE_MODAL }
}

export function openModal(id, title) {
  return { type: OPEN_MODAL, id, title }
}

export const getTodos = () => {
  return (dispatch) => {
    dispatch(fetchInitial());
    todoFetch.todoInitial()
    .then(data=> {
      dispatch(fetchSuccess(data.data));
    })
    .catch(e =>
      dispatch(fetchFailure()));
  }
}

export const addItem = (title) => {
  return (dispatch) => {
    todoFetch.todoAdd({title: title})
    .then(data => {
      dispatch(addTodo({id: data.id, title: title}));
      dispatch(reset('add'));
      })
    .catch(e => {
      console.log(e)
    })
  }
}

export const deleteItem = (deleteId) => {
  return (dispatch) => {
    const id = {id: deleteId};
    todoFetch.todoDelete(deleteId, id)
    .then(data => {
      dispatch(removeTodo(deleteId));
    })
    .catch(e => {
      console.log(e)
    })
  }
}

export const updateItem = (updateId, updateTitle) => {
  return (dispatch) => {
    const newTitle = {title: updateTitle};
    todoFetch.todoUpdate(updateId, newTitle)
    .then(data => {
      dispatch(updateTodo({id: updateId, title: updateTitle}));
      dispatch(closeModal());
    })
    .catch(e => {
      console.log(e)
    })
  }
}