import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './page/Home'
import Navbar from './component/layout/Navbar'
import Location from './page/Location'
// working project
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App