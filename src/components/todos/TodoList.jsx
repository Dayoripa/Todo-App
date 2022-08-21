import {TodoInfo} from './TodoInfo';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todoInit = [], onDeleteTodo, onToggleTodo, todosCount, pendingTodosCount }) => {
  return (
    <section className="todo">
      {todoInit.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}

      <TodoInfo todosCount={todosCount}
        pendingTodosCount={pendingTodosCount} 
      />
      <section className="todo__drag--dark">
        <p className='todo__drag--text'>Drag and drop to reorder list</p>
      </section>
    </section>
  );
}
