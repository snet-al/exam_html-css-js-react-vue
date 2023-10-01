import React from 'react';
import './App.css';
import ImageGalleryPage from './pages/ImageGalleryPage';

function App() {
  //fetch ("https://picsum.photos/list")
//.then((response) => response.json())
//.then((data) => {
   // console.log(data);
//});

  return (
    <div className="app">
     <ImageGalleryPage/>
    </div>
  );
}

export default App;