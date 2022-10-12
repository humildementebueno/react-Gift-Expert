import { useState, useEffect } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);


  
    
    // let imge = images.map(img => ({
    //   id:img.id,
    //   title: img.title
    // }));
    // console.log("************");
    // console.log(imge);

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
          
        }

        <div className='card-grid'>
            {
                images.map( ( image ) => (

                  <GifItem 
                      key={image.id}
                      { ...image } //aqui exparsimos todas las property
                  />
                ))
            }
            
        </div>

    </>
  )
}
