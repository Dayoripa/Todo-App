import './todo.css';
import { TodoHeader } from './TodoHeader';


export const TodoApp = () => {
  return (
    <>
      
      <main className='principal'>
        <article>
          <section className='form'>
              <form>
                <input
                   type="text"
                   placeholder='Create a new todo..'
                   className='input'
                 />
              </form>
          </section>

          <section className='todo'>
              <ul className='list'>
                  <li className='list__item'>Job around the park 3x</li>
                  <li>10 minutes meditation</li>
                  <li>Read for I hour</li>
                  <li>ick up groceries</li>
                  <li>Complete todo App on Frontend Mentor</li>
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
