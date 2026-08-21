import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import "./css/App.css"
import Home from "./pages/Home"
import NavBar from './components/NavBar'
import MainLayout from './layouts/MainLayout'
import Favorites from './pages/Favorites'

function App() {


  return (
      <main>
        <Routes> 
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='Favorites' element={<Favorites />} />
          </Route>
        </Routes>
      </main>
  )
}

export default App
