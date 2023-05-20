import React from 'react'
import './Header.css'
import HeaderText from '../../components/HeaderText/HeaderText'
import Switcher from '../../components/Switcher/Switcher'
import SecondaryHeader from '../../components/SecondaryHeaderText/SecondaryHeaderText'
import Button from '../../components/Button/Button'
import Hgroup from '../../components/Hgroup/Hgroup'

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