import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todos/reducer/todoReducer';


const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
  }


export const useTodos = () => {

  
  const [ todos, dispath ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
      dispath( action );
  }

  const handleDeleteTodo = ( id ) => {
    dispath({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    dispath({
      type: '[TODO] toggle Todo',
      payload: id
    });
  }

  return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
  }
}
