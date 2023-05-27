import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

import Home from './pages/home';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Login from './pages/login';
import Cart from './pages/cart';

function App() {

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/cart' element={<Cart></Cart>} />
      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
