import React from 'react'
import Toggler from './UI/Toggler'
import LoadButton from './UI/LoadButton'

const Header = () => {

    const FetchNewPhotos = () => {
        console.log('Fetching New Photos..') //to be completed
    }

  return (
    <header className="header">
      <h1 className="headertext">Photo Fetcher</h1>
      <div className="subheader">
          <Toggler />
          <LoadButton onClick={FetchNewPhotos} buttontext='Fetch New Photos'/>
      </div>
    </header>

  )
}

export default Header