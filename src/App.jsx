import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';

import './App.css'
import Header from './layouts/header';
import Footer from './layouts/footer';

function App() {

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
