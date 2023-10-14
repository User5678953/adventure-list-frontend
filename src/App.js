
import './App.css';
import AdventureCarousel from './components/AdventureCarousel';
import MapBoard from './components/MapBoard';
import Navbar from './components/Navbar';
import PhotosCarousel from './components/PhotosCarousel';
import AdventureList from './pages/AdventureList';
import AdventureManagement from './pages/AdventureManagement';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import PhotosManagement from './pages/PhotosManagement';
import PhotosView from './pages/PhotosView';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <header >
        <Navbar />
        <AdventureCarousel />
        <MapBoard />
        <PhotosCarousel />
        
        <h1>THIS IS APP.JS</h1>
        <Home />
        <Login />
        <Register />
        <Dashboard />
        <AdventureList />
        <AdventureManagement />
        <PhotosManagement />
        <PhotosView />
      </header>
    </div>
  );
}

export default App;
