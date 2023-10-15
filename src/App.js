import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
import Home from './pages/Home';
=======
import Login from "./pages/Login";
>>>>>>> Stashed changes


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
<<<<<<< Updated upstream
        <Home />
        
=======

        <h1>THIS IS APP.JS</h1>
        <Route path="/login" component={Login} />
>>>>>>> Stashed changes
      </header>
    </div>
  );
}

export default App;
