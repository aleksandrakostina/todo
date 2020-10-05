import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';
import { reducer as formReducer } from 'redux-form';
import { modalReducer } from './reducers/modalReducer';

const reducers = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;