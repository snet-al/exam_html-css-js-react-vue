import React from 'react'
import LoadButton from './UI/LoadButton';

const Images = () => {

    const loadmorePhotos = () => {
        console.log("More photos loading..") //to be completed
      }
    
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
    <section className="container">
    <div className="img-container" id="imageContainer">
        {photos.map((photo, index) =>(
        <figure key={index}>
            <img src={photo.url} alt={`IMG ${index+1}`}/>
            <figcaption>
                <p>{photo.caption}</p>
                <p>{photo.url}</p>
            </figcaption>
        </figure>
        ))}
    </div>
    <div className='loadbutton'>
        <LoadButton onClick={loadmorePhotos} buttontext="More photos" />
    </div>
    
</section>
  )
}

export default Images