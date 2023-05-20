import React from 'react'
import './Hgroup.css'

const Hgroup = ({Button:Button, SecondaryHeader:SecondaryHeader, Switcher:Switcher}) => {
  return (
    <>
       <Switcher/>
       <SecondaryHeader/>
       <Button/>
    </>
  )
}

export default Hgroup