import React from 'react'

const Toggler = () => {

    const handleSwitch = () => {} //to be completed

  return (
    <div className="left-side">
        <label className="switch">
            <input type="checkbox" id='toggler' onChange={handleSwitch}/>
            <span className="slider"></span>
        </label>
        <p>Make photos grayscale</p>
    </div>
  )
}

export default Toggler