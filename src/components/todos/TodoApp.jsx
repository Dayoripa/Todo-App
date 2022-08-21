import { useTodos } from '../hooks/useTodos';
import './todo.css';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';



export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

  console.log(todosCount)

  return (
    <>
      <TodoHeader onNewTodo={ handleNewTodo } />
      <main className='principal'>
        <TodoList todoInit={ todos }
                  onDeleteTodo={ handleDeleteTodo}
                  onToggleTodo={ handleToggleTodo }
                  todosCount={ todosCount }
                  pendingTodosCount={ pendingTodosCount } />
      </main>   
    </>
  )
}
