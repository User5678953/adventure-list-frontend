import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import MapBoard from '../components/MapBoard'
import PhotosDiv from './PhotosDiv'

const Home = () => {

    return (
        <div>
            <Routes>
                <Route path='/register/login' element={
                    <Login /> 
                } />       
            </Routes>
            {/* <h1>Home Page</h1> */}
            <PhotosDiv />
            <MapBoard />
        </div>
    )
}

export default Home