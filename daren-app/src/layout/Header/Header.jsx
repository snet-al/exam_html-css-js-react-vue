import React from 'react'
import './Header.css'
import HeaderText from '../../components/HeaderText/HeaderText'
import Switcher from '../../components/Switcher/Switcher'
import SecondaryHeader from '../../components/SecondaryHeaderText/SecondaryHeaderText'
import Button from '../../components/Button/Button'

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