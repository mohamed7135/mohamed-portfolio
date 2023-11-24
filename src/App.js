import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageHome from './pages/page-home';
import PageWorks from './pages/page-works';
import PageAbout from './pages/page-about';
import Navigation from './Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/works' element={<PageWorks />} />
        <Route path='/about' element={<PageAbout />} />
      </Routes>
    </>
  );
}

export default App;
