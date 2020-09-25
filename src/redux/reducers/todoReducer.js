import { ADD_TODO, DELETE_TODO, UPDATE_TODO, FETCH_SUCCESS, FETCH_FAILURE, FETCH_INIT} from "./../actions";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false
};

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        todos: action.data,
        isLoading: false,
        isError: false
      };
    case FETCH_FAILURE: 
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.newtodo]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id)
      };
    case UPDATE_TODO: 
      const newItems = state.todos.map(item => {
        if(item.id === action.todo.id) {
          const newItem = {...item, title: action.todo.title};
          return newItem;
        } else {
          return item;
        }
      });
      return {
        ...state,
        todos: newItems
      };
    default:
      return state;
  }
}