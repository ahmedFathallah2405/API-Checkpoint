import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {api_key} from '../../fetching';
import ImageCard from './ImageCard';
import './ImageList.css';


const ImageList = ({searchedValue}) => {
    const [images , setImages ] = useState([]);
    useEffect (()=>{
        const fetchImages= async ()=>{
            try {
                const res = await axios.get (
                 `https://pixabay.com/api/?key=${api_key}&q=${searchedValue}&image_type=photo&per_page=12`
                )
                //console.log(res)
                setImages(res.data.hits);
                console.log('the images are', images);
            } catch (error) {
                console.error(error);
            }
        };
        fetchImages();
    }, [searchedValue]);
    return (
        <div className="image-container">
        {!searchedValue ? (
          <h3 style={{color: 'white'}}>
            please type something to start searching
          </h3>
        ) : (
          <div className="image-container">
            {images.map((image, index) => (
              <ImageCard image={image} key={index} />
            ))}
          </div>
        )}
      </div>
    );
};

export default ImageList
