const URL = 'https://test.megapolis-it.ru/api/list';
const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';

const fetchTodo = (url, method, body) => {
  let obj = {};
  if(method !== GET) {
    obj = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      } 
    }
  }
  return fetch(url, obj)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}

export const todoFetch = {
  todoInitial() {
    return fetchTodo(URL, GET)
  },
  todoAdd(todo) {
    return fetchTodo(URL, POST, todo)
  },
  todoDelete(id, objId) {
    return fetchTodo(URL+`/${id}`, DELETE, objId)
  },
  todoUpdate(id, title) {
    return fetchTodo(URL+`/${id}`, POST, title)
  }
} 