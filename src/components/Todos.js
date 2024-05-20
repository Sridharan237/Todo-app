import {useEffect} from 'react';
import todosStore from "../stores/todosStore";
import Todo from "./todo";
import '../index.css';

export default function Notes() {
  const store = todosStore();
  
  //useEffect - will get called when the page gets loaded
  useEffect(store.fetchTodos, []);

  return (
    <div id="Notes">
    <h2 className="text-4xl font-bold">Todos:</h2>
    {store.todos && 
     store.todos.map((todo) => {
      return (
        <Todo todo={todo} key={store.todo._id}/>
      );
    })
    }
  </div>
  );
}