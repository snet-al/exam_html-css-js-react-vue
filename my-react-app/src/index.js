import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header.js';
import Imagesdisplay from './components/imagesdisplay.js';
import Layout from './layout/layout.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);


