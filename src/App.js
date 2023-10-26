import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register'



function App() {
  return (
    <div className="App">
      <header>
        <Navbar />

        <div className='container'>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        </div>
        <Home />
        
      </header>

      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;