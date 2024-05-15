import React from 'react'
import "./Switcher.css"
import { useGlobalContext } from '../../../context/context'
const Switcher = () => {
  const {handleSwitcher}=useGlobalContext()
  return (
    <>
   <label className="form-switch">
        <input className="form-switch-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <span className="form-switch-span" htmlFor="flexSwitchCheckDefault" onClick={handleSwitcher}></span>
    </label>
    </>
  )
}

export default Switcher