import Navbar from './components/Navbar';
import Home from './pages/Home'
  import PhotosManagement from "./pages/PhotosManagement";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/photos/PhotosManagement"
            element={<PhotosManagement />}
          />
        </Routes>
        <Home />
      
        
      </header>
    </div>
  );
}

export default App;
