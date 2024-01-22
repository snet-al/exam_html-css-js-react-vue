import React from 'react'
import LoadButton from './UI/LoadButton'
import Figure from './Figure'

const loadmorePhotos = () => {
    console.log("More photos loading..") //to be completed
  }

const FigureContainer = (props) => {

    const {imageList} = props;

  return (
    <section className="container">
        <div className="img-container" id="imageContainer">
        {imageList.map((photo, index) =>(
            <Figure key={index} url={photo.url} caption={photo.caption}/>
        ))}
        </div>
        <div className='loadbutton'>
            <LoadButton onClick={loadmorePhotos} buttontext="More photos" />
        </div>
    </section>
  )
}

export default FigureContainer