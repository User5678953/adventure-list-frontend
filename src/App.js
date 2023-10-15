import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
  import PhotosManagement from "./pages/PhotosManagement";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Home />
        
      </header>
    </div>
  );
}

export default App;
