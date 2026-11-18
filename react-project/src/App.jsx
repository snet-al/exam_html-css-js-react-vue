import { useState } from 'react';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import { PhotoProvider } from './store/PhotoContext';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <PhotoProvider>
      <MainLayout currentPage={currentPage} onNavigate={setCurrentPage}>
        {currentPage === 'home' ? <Home /> : <About />}
      </MainLayout>
    </PhotoProvider>
  );
}
