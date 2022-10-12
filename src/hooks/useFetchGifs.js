import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

      const [images, setImages] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( ()=>{
      getImages();
      
    },[]);//[]significa que solo la primera vez se ejecutara

  return {
    images,//apunta asi mismo xq existe una variable del mismo nombre
    isLoading //isLoading:isLoading
  }
}
