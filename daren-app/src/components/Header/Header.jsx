import React from 'react'
import './Header.css'
import HeaderText from '../HeaderText/HeaderText'
import Switcher from '../Switcher/Switcher'
import SecondaryHeader from '../SecondaryHeaderText/SecondaryHeaderText'
import Button from '../Button/Button'

const Header = () => {
  return (
   <>
    <HeaderText/> 
    <hgroup> 
        <Switcher/>
        <SecondaryHeader/>
        <Button/>
     </hgroup>
   </>
  )
}

export default Header