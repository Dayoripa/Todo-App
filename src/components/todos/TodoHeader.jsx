import iconSun from '../../assets/images/icon-sun.svg';
import iconMoon from '../../assets/images/icon-moon.svg';
import { TodoAdd } from './TodoAdd';


export const TodoHeader = ({ onNewTodo }) => {

  // {`hero ${!clicked ? 'hero__dark' : 'hero__light' } ` }

  return (
    <header className='hero hero__dark'>
        <div className='hero__container'>
          <h1 className='hero__title'>Todo</h1>
          <button
            className='icon__header'>
            <img className='hero__img' src={iconSun} alt="icono light" />
          </button>
        </div>
        <TodoAdd onNewTodo={onNewTodo} />
    </header>

  )
}
