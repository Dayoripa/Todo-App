import './todo.css';
import { TodoHeader } from './TodoHeader';


export const TodoApp = () => {
  return (
    <>
      <TodoHeader />
      <main className='principal'>
        <article>
          <section className='todo'>
              <ul className='list'>
                  <li type="circle" className='list__item'>Job around the park 3x</li>
                  <li type="circle" className='list__item'>10 minutes meditation</li>
                  <li type="circle" className='list__item'>Read for I hour</li>
                  <li type="circle" className='list__item'>ick up groceries</li>
                  <li type="circle" className='list__item'>Complete todo App on Frontend Mentor</li>
              </ul>
              <div className='todo__info'>
                <p>3 items</p>
                <p>Completed</p>
                <p>pending</p>
              </div>
          </section>
        </article>
      </main>    
    </>
  )
}
