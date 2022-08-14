import { useEffect, useReducer } from 'react';
import './todo.css';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

  const initialState = [

  ];

  const init = () => {
    return JSON.parse( localStorage.getItem('todos') || [] );
  }

  const [ todos, dispath ] = useReducer(todoReducer, initialState, init);

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

  return (
    <>
      <TodoHeader onNewTodo={ handleNewTodo } />
      <main className='principal principal__light'>
        <TodoList todoInit={ todos }
                  onDeleteTodo={ handleDeleteTodo}
                  onToggleTodo={ handleToggleTodo } />
      </main>   
      <footer className='todo__drag--dark todo_drag-light'>
            <p className='todo__drag--text'>Drag and drop to reorder list</p>
      </footer>    
    </>
  )
}
