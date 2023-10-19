import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import React from 'react'

function App() {
  return (
    <div className="App">
      <header >
        <Navbar />
        <div className='container'>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        </div>
        <Home />
        {/* <Dashboard /> */} 
        {/* need to create conditional statement that renders Home/Dashboard depending on if user is logged in */}
        
      </header>
    </div>
  );
}

export default App;
