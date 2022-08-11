import iconSun from '../assets/images/icon-sun.svg';

export const TodoHeader = () => {
  return (
    <header className='hero'>
        <div className='hero__container'>
          <h1 className='hero__title'>Todo</h1>
          <img className='hero__img' src={iconSun} alt="" />
        </div>
        <section className='form'>
            <form>
              <button type="submit" className='btn'>o</button>
                <input
                  type="text"
                  placeholder='Create a new todo..'
                  className='input'
                />
            </form>
        </section>
    </header>

  )
}
