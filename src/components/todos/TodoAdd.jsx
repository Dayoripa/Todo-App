import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetform} = useForm({
      description: '',
  });

  // const { todos, done } = formState;

  const onFormSubmit = (e) => {
    e.preventDefault();

    if( description.length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }

      onNewTodo(newTodo);
      onResetform();
      
  }

  return (
    <section className='form'>
        <form onSubmit={ onFormSubmit } >
            <button 
                    type="submit"
                    className='btn'>
            </button>
                <input
                type="text"
                placeholder='Create a new todo..'
                className='input'
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
        </form>
    </section>
  )
}
