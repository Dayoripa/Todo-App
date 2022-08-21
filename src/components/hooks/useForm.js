import { useState } from 'react';


export const useForm = (initialForm = {} ) => {

  const [ formState, setFormState ] = useState( initialForm );

  const onInputChange = ({ target }) => {
      const {name, value} = target;
      setFormState({
        ...formState,
        [ name ]: value
      });
  }

  const onResetform = (e) => {
    setFormState(initialForm);
 }

  return {
    ...formState,
      formState,
      onInputChange,
      onResetform
  }
}

