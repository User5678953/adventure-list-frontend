import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import MapBoard from '../components/MapBoard'


const Home = () => {
    return (
        <div>
            <Routes>
                <Route path='/register/login' element={
                    <Login /> 
                } />       
            </Routes>
            <h1>Home Page</h1>
            <div className="publicPhotos">
                <img src="https://petapixel.com/assets/uploads/2022/08/fdfs19-800x533.jpg" alt="Landscape picture" />
            </div>
            <MapBoard />
        </div>
    )
}

export default Home