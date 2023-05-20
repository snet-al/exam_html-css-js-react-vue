import React from 'react'
import './Hgroup.css'

const Hgroup = ({Button:Button, SecondaryHeader:SecondaryHeader, Switcher:Switcher}) => {
  return (
    <>
      <hgroup>
       <Switcher/>
       <SecondaryHeader/>
       <Button/>
      </hgroup> 

    </>
  )
}

export default Hgroup