import React from 'react';
import './App.css';
import Header from './components/Header';
import ImageContainer from './pages/ImageContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
     <Header/>
     <ImageContainer/>
     <Footer/>
    </div>
  );
}

export default App;