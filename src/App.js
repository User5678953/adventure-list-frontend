import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <header >
        <Navbar />
        <Home />
        {/* <Dashboard /> */} 
        {/* need to create conditional statement that renders Home/Dashboard depending on if user is logged in */}
        
      </header>
    </div>
  );
}

export default App;
