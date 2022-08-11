import iconSun from '../assets/images/icon-sun.svg';
import { TodoAdd } from './todoAdd';

export const TodoHeader = () => {
  return (
    <header className='hero'>
        <div className='hero__container'>
          <h1 className='hero__title'>Todo</h1>
          <img className='hero__img' src={iconSun} alt="" />
        </div>
       <TodoAdd />
    </header>

  )
}
