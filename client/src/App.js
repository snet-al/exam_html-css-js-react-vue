import React from 'react';

import './App.css';
import Header from './components/Header';
import ImageContainer from './pages/ImageContainer';
import Footer from './components/Footer';
import Toggle from './components/UI/Toggle';
import FetchButton from './components/UI/FetchButton';

function App() {
  return (
    <div className="App">
     <Header/>
     <Toggle/>
     <FetchButton/>
     <ImageContainer/>
     <Footer/>
    </div>
  );
}

export default App;
