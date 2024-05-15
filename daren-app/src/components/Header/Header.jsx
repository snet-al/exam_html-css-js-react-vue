import React from 'react'
import './Header.css'
import HeaderText from '../HeaderText/HeaderText'
import Switcher from "../UI/Switcher/Switcher"
import SecondaryHeader from '../SecondaryHeaderText/SecondaryHeaderText'
import Button from '../UI/Button/Button'
import Hgroup from '../Hgroup/Hgroup'

const Header = () => {
  return (
   <>
    <HeaderText/> 
    <Hgroup>
      <Switcher/>
      <SecondaryHeader/>
      <Button/>
    </Hgroup>  
   </>
  )
}

export default Header