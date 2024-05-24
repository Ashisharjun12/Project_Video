import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './Pages/Header/Header';
import Video from './Pages/Video/Video';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  const location = useLocation();

  
  const hideNavbar = location.pathname === '/Register' || location.pathname === '/Login';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/Video' element={<Video />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
