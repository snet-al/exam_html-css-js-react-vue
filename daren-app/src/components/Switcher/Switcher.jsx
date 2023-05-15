import React from 'react'
import "./Switcher.css"
const Switcher = () => {
  return (
    <>
   <label class="form-switch">
        <input class="form-switch-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <span class="form-switch-span" for="flexSwitchCheckDefault"></span>
    </label>
    </>
  )
}

export default Switcher