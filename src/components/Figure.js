import React from 'react'

const Figure = (props) => {

    const {index, url, caption} = props;

  return (
    <figure key={index}>
        <img src={url} alt={`IMG ${index+1}`}/>
        <figcaption>
            <p>{caption}</p>
            <p>{url}</p>
        </figcaption>
    </figure>
  )
}

export default Figure