import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('');
  
    const onInputChange = ({target}) => {
        // console.log();
        setInputValue(target.value);
    }

    const onSubmit = ( event )=>{
        event.preventDefault();//esto permite no que se redireccione
        if( inputValue.trim().length <= 1) return; //valida cuando esta vacio el input
        // console.log(inputValue);//muestra lo que taipeas presionando enter
        // setCategories([...categories, inputValue]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        //onSubmit={(event)=>onSubmit(event)}
        <form onSubmit={onSubmit} noValidate> 
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={onInputChange}// onChange={ (event) => onInputChange(event) }
            />
            <button type='submit'>enviar</button>
        </form>
  )
}
