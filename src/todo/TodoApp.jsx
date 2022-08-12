import './todo.css';
import { TodoHeader } from './TodoHeader';

import iconClose from '../assets/images/icon-cross.svg';
import iconList from '../assets/images/icon-check.svg';

export const TodoApp = () => {
  return (
    <>
      <TodoHeader />
      <main className='principal'>
          <section className="todo">
              <div className='todo__container'>
                <div className='todo__list'>
                  <div className='todo__item'>
                    <span className='icono__check'><img src="" /></span>
                    <p className='todo__text'>Complete online JavaScript course</p>
                  </div>
                  <span className='icono__close'><img src={iconClose} /> </span> 
                </div>
                 
              </div>
              <div className='todo__container'>
                <div className='todo__list'>
                    <div className='todo__item'>
                      <span className='icono__check'><img src="" /></span>
                      <p className='todo__text'>Job around the park 3x </p>
                    </div>
                    <span className='icono__close'><img src={iconClose} /></span> 
                  </div>
              </div>

              <div className='todo__container'>
                <div className='todo__list'>
                    <div className='todo__item'>
                     <span className='icono__check'><img src=""/></span>
                      <p className='todo__text'>10 minutes meditation</p>
                    </div>
                    <span className='icono__close'><img src={iconClose} /></span> 
                  </div>
              </div>

              <div className='todo__container'>
                <div className='todo__list'>
                    <div className='todo__item'>
                      <span className='icono__check active'><img src=""/></span>
                      <p className='todo__text'>Read for I hour</p>
                    </div>
                    <span className='icono__close'><img src={iconClose} /></span> 
                  </div>
              </div>

              <div className='todo__container'>
                <div className='todo__list'>
                    <div className='todo__item'>
                      <span className='icono__check active'><img src=""/></span>
                      <p className='todo__text todo__text--throuhg'>ick up groceries</p>
                    </div>
                    <span className='icono__close'><img src={iconClose} /></span> 
                  </div>
              </div>
              <div className='todo__container'>
                <div className='todo__list'>
                    <div className='todo__item'>
                      <span className='icono__check active'><img src=""/></span>
                      <p className='todo__text todo__text--throuhg'>Complete todo App on Frontend Mentor</p>
                    </div>
                    <span className='icono__close'><img src={iconClose} /></span> 
                  </div>
               </div>
             
              <div className='todo__info'>
                <a href='#'>5 items left</a>
                <div className='todo__actions'>
                  <a className='actions__item' href='#'>All</a>
                  <a  className='actions__item' href='#'>Active</a>
                  <a className='actions__item' href='#'>Completed</a>
                </div>
                <a href='#'>Clear Completed</a>
              </div>
          </section>
      </main>   
      <section className='todo__drag'>
            <p className='todo__drag--text'>Drag and drop to reorder list</p>
      </section>    
    </>
  )
}
