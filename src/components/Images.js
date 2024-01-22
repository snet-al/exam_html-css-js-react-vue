import React from 'react'
import FigureContainer from './FigureContainer';

const Images = () => {
    
        const photos = [
            {
                url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                caption: 'Photo 1'
            },
            {
                url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                caption: 'Photo 2'
            },
            {
                url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                caption: 'Photo 3'
            },
            {
                url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                caption: 'Photo 4'
            }
        ]
        // console.log(photos);
    
  return (
    <FigureContainer imageList={photos}/>
  )
}

export default Images