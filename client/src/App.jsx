import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './page/Home'
import Navbar from './component/layout/Navbar'
import Location from './page/Location'
import Food from './page/Food'
// working project
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:location" element={<Location />} />
        <Route path="/restaurant/:id" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App