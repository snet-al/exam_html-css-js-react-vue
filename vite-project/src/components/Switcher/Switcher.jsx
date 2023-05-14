import React from 'react'
import "./Switcher.css"
const Switcher = () => {
  return (
    <>
    <label class="switch">
        <input type="checkbox" class="switch-input"/>
        <span class="switch-slider"></span>
    </label>  
    </>
  )
}

export default Switcher