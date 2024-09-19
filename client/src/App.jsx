import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './page/Home'
import Navbar from './component/layout/Navbar'
import Location from './page/Location'
import Food from './page/Food'
import Cart from './page/Cart'
// working project
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:location" element={<Location />} />
        <Route path="/restaurant/:id" element={<Food />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App