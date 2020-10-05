import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  todos: todoReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;