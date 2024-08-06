import React from 'react';
import './App.css';
import Home from './component/pages/Home';
import Service from './component/pages/Service';

import Sighnup from './component/pages/Sighnup';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './component/Navbar';
import Footer from './component/pages/Footer';



function App() {

  return (
    <>

      <div className="App">
        <Navbar />

        <Routes>
          <Route index element={ <Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Footer />} />
        
          <Route path="/signup" element={<Sighnup />} />
        </Routes>

      </div>
    </>
  );
}

export default App;