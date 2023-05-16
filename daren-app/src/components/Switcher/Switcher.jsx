import React from 'react'
import "./Switcher.css"
import { useGlobalContext } from '../../context/context'
const Switcher = () => {
  const {handleSwitcher}=useGlobalContext()
  return (
    <>
   <label class="form-switch">
        <input class="form-switch-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <span class="form-switch-span" for="flexSwitchCheckDefault" onClick={handleSwitcher}></span>
    </label>
    </>
  )
}

export default Switcher