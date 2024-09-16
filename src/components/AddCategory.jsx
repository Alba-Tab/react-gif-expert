import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (e) => {
        //Evitar que se recargue la pagina
        e.preventDefault();
        const inputValue2 = inputValue.trim();
        if(inputValue2.length <= 1)  return;

        onNewCategory(inputValue2);
        setInputValue('');
    }
   
    return(
        <form onSubmit={onSubmit}>
            <input 
                type="Text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange}
            />
        </form>
    )
}