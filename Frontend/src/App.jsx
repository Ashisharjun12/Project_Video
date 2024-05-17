import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Video from './Pages/Video/Video'


function App() {


  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Header/>}/>
     <Route path='/Video' element={<Video/>}/>



    </Routes>
    </>
  )
}

export default App
