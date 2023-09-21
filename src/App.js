import React from 'react';
import './App.css';
import Header from './components/Header';
import ImageGalleryPage from './pages/ImageGalleryPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
     <Header/>
     <ImageGalleryPage/>
     <Footer/>
    </div>
  );
}

export default App;