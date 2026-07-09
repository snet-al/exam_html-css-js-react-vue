import React, { useState, useEffect } from 'react'
import './App.css'
//4 photos
const BATCH = 4
// create an array with random numbers
function getRandomIds(count) {
  const ids = []
  while (ids.length < count) {
    const id = Math.floor(Math.random() * 1000) + 1
    if (!ids.includes(id)) ids.push(id)
  }
  return ids
}

//map ids for fetch
async function fetchPhotos(ids) {
  return Promise.all(

    ids.map(id =>
      fetch(`https://picsum.photos/id/${id}/info`).then(r => r.json())
    )
  )
}

// Photocard component
function PhotoCard({ photo, grayscale }) {
  return (
    <div className="photo-card">
      <img
        src={`https://picsum.photos/id/${photo.id}/600/450`}
        alt={photo.author}
        style={{ filter: grayscale ? 'grayscale(1)' : 'none' }}
      />
      <div className="photo-info">
        <span className="photo-author">{photo.author}</span>
        <span className="photo-url">{photo.url}</span>
      </div>
    </div>
  )
}


function SkeletonCard() {
  return <div className="skeleton-card" />
}


export default function App() {
  const [photos, setPhotos] = useState([])
  const [loadingCount, setLoadingCount] = useState(0)
  const [grayscale, setGrayscale] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  async function loadNewPhotos() {
    setIsFetching(true)
    setPhotos([])
    setLoadingCount(BATCH)
    const ids = getRandomIds(BATCH)
    const data = await fetchPhotos(ids)
    setPhotos(data)
    setLoadingCount(0)
    setIsFetching(false)
  }

  async function loadMore() {
    const existingIds = photos.map(p => p.id)
    const ids = getRandomIds(BATCH)
    setLoadingCount(BATCH)
    const data = await fetchPhotos(ids)
    setPhotos(prev => [...prev, ...data])
    setLoadingCount(0)
  }

  useEffect(() => {
    loadNewPhotos()
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Photo Fetcher</h1>
      </header>

      <main>
        <div className="controls">
          <label className="toggle-label">
            <div className="toggle-switch">
              <input
                type="checkbox"
                checked={grayscale}
                onChange={e => setGrayscale(e.target.checked)}
              />
              <span className="toggle-track" />
            </div>
            Make photos grayscale
          </label>

          <button onClick={loadNewPhotos} disabled={isFetching}>
            Fetch New Photos
          </button>
        </div>

        <div className="grid">
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} grayscale={grayscale} />
          ))}
          {Array.from({ length: loadingCount }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>

        {!isFetching && loadingCount === 0 && photos.length > 0 && (
          <button className="more-btn" onClick={loadMore}>
            More Photos
          </button>
        )}
      </main>

      <footer>
        <p>Powered by <a href="https://picsum.photos">Lorem Picsum</a></p>
      </footer>
    </div>
  )
}
