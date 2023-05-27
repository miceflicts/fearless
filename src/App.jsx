import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

import Home from './pages/home';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Login from './pages/login';
import Cart from './pages/cart';
import Register_Success from './pages/register_success';

function App() {

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/user/login' element={<Login></Login>} />
        <Route path='/user/register_success' element={<Register_Success></Register_Success>} />
        <Route path='/cart' element={<Cart></Cart>} />
      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
