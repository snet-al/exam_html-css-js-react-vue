import React from 'react'
import Header from '../components/Header/Header'

function Layout() {
  return (
    <>
    <Header/>
   <main>{children}</main> 
    </>
  )
}

export default Layout