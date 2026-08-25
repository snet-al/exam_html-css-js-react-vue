import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import "./styles/App.css"
import HomePage from "./pages/HomePage"
import NavBar from './components/NavBar'
import MainLayout from './layouts/MainLayout'
import FavoritesPage from './pages/FavoritesPage'

function App() {


  return (
      <main>
        <Routes> 
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='Favorites' element={<FavoritesPage />} />
          </Route>
        </Routes>
      </main>
  )
}

export default App
