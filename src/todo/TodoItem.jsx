import iconClose from '../assets/images/icon-cross.svg';
import iconList from '../assets/images/icon-check.svg';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    
  return (
    <>
      <div className="todo__container todo__light">
        <div className="todo__list">
          <div className="todo__item">
            <button
                onClick={ () => onToggleTodo(todo.id) } 
                className={`icono__check ${ (todo.done) ? 'check__fill' : '' } `}>
              <img className={`image__none ${(todo.done) ? 'image-block' : ''}`}
                   src={iconList} />
            </button>
            <p className={`todo__text ${ (todo.done) ? 'text__through' : '' } `}>
              { todo.description }
            </p>
          </div>
          <button
              onClick={ () => onDeleteTodo(todo.id)}
              className="icono__close">
            <img src={iconClose} />{" "}
          </button>
        </div>
      </div>
    
    </>
  );
}