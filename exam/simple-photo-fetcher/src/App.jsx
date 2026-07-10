import React, { useState, useEffect } from 'react'
import './App.css'


//turn all html components into react components
// implemtnted react components for header , control , grid and footer with placeholder values for upcoming functionality
//header component
function Header() {
  return (
    <header>
      <h1>Photo Fetcher</h1>
    </header>
  )

}

function Controls({ grayscale, setGrayscale, loadNewPhotos, isFetching }) {
  return (
    <div className="controls">
      <label className="toggle-label">
        <div className="toggle-switch">
          <input type="checkbox" checked={grayscale} onChange={e => setGrayscale(e.target.checked)} />
          <span className="toggle-track" />
        </div>
        Make photos grayscale
      </label>

      <button onClick={loadNewPhotos} disabled={isFetching}>
        Fetch New Photos
      </button>
    </div>
  )
}

// create a grid with placeholder cards for loading state , no functionality yet no array mapping yet

function SkeletonCard() {
  return <div className="skeleton-card" />
}

function Grid({ photos, loadingCount, grayscale }) {
  return (
    <div className="grid">
      {photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} grayscale={grayscale} />
      ))}
      {Array.from({ length: loadingCount }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Powered by <a href="https://picsum.photos">Lorem Picsum</a></p>
    </footer>
  )
}

