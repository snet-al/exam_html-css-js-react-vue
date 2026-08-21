import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import "./css/App.css"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'

function App() {


  return (
      <main>
        <Navbar/>
        <Routes> 
          <Route index element={<Home />} />
          <Route path='Favorites' element={<Favorites />} />
        </Routes>
      </main>
  )
}

export default App
