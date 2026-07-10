import React from 'react'

function Toggle({ grayscale, setGrayscale }) {
  return (
    <label className="toggle-label">
      <div className="toggle-switch">
        <input
          type="checkbox"
          checked={grayscale}
          onChange={e => setGrayscale(e.target.checked)}
          //set grayscale function to be implemented
        />
        <span className="toggle-track" />
      </div>
      Make photos grayscale
    </label>
  )
}

export default Toggle