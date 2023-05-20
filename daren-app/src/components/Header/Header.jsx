import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import Switcher from '../Switcher/Switcher'
import SecondaryHeader from '../SecondaryHeaderText/SecondaryHeaderText'
import Button from '../Button/Button'
import Hgroup from '../Hgroup/Hgroup'

const Header = () => {
  return (
   <>
    <HeaderText/> 
    <Hgroup Button={Button} SecondaryHeader={SecondaryHeader} Switcher={Switcher}/>
        
   </>
  )
}

export default Header