import {  OPEN_MODAL, CLOSE_MODAL } from "./../actions";

const initialState = {
  isOpenModal: false,
  clickId: '',
  clickTitle: ''
} 

export const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        isOpenModal: true,
        clickId: action.id,
        clickTitle: action.title
      };
    case CLOSE_MODAL:
      return {
        isOpenModal: false,
        clickId: '',
        clickTitle: ''
      }
    default:
      return state;
  }
}