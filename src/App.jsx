import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

import Home from './pages/home';
import Header from './layouts/header';
import Login from './pages/login';
import Cart from './pages/cart';
import Register_Success from './pages/register_success';
import Orders from './pages/orders';
import Recently_viewed from './pages/recently_viewed';
import Favorites from './pages/favorites';

function App() {

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/user/login' element={<Login></Login>} />
        <Route path='/user/register_success' element={<Register_Success></Register_Success>} />
        <Route path='/user/cart' element={<Cart></Cart>} />
        <Route path='/user/orders' element={<Orders></Orders>} />
        <Route path='/user/recently_viewed' element={<Recently_viewed></Recently_viewed>} />
        <Route path='/user/favorites' element={<Favorites></Favorites>} />
  
      </Routes>
    </>
  )
}

export default App
