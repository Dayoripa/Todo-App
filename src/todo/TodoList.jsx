import { TodoItem } from './TodoItem';

export const TodoList = ({ todoInit = [], onDeleteTodo, onToggleTodo }) => {
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

      <div className="todo__info">
          <a href="#">5 items left</a>
          <div className="todo__actions">
            <a className="actions__item" href="#">
              All
            </a>
            <a className="actions__item" href="#">
              Active
            </a>
            <a className="actions__item" href="#">
              Completed
            </a>
          </div>
          <a href="#">Clear Completed</a>
        </div>
    </section>
  );
}
