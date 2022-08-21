
export const TodoInfo = ({todosCount, pendingTodosCount}) => {

  return (
    <div className="todo__info">
        <a href="#">{todosCount} items left</a>
        <div className="todo__actions">
            <a className="actions__item" href="#">
                All
            </a>
            <a className="actions__item" href="#">
                Active { pendingTodosCount }
            </a>

            <a className="actions__item" href="#">
                Completed
            </a>
        </div>
        <a href="#">Clear Completed</a>
  </div>
  
  )
}
