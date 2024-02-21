import { Route, Routes } from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/shop/ShopPage'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/About' element={<AboutPage />} />
      <Route path='/Shop' element={<ShopPage />} />
    </Routes>
    <div>test</div>
    </>
  )
}

export default App
