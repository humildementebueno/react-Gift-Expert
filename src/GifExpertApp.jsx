import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = (newCategory) =>{

        if( categories.includes(newCategory) ) return;//si la categoria existe no haga nada
        // categories.push(newCategory);
        // console.log(newCategory);
        // console.log(setCategories);
        // setCategories(categories.concat(['VALORANT']));
        setCategories([ newCategory,...categories]);
        // setCategories( cat => [ ...cat, 'VALORANT']);
    }


  return (
    <>  
        <h1>GifExpertApp</h1>
        <AddCategory 
            onNewCategory = {(value) => onAddCategory(value)} 
        />


        {/* <button onClick={onAddCategory}>Agregar</button> */}
      
        {
            categories.map( (category) => (
                <GifGrid 
                key={ category }
                category = {category}
                />
            ))
        }

    </>
  )
}
