import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import MapBoard from '../components/MapBoard'
import PhotosDiv from '../components/PhotosDiv'

const Home = () => {

    return (
        <div className='homePage'>
            <Routes>
                <Route path='/register/login' element={
                    <Login /> 
                } />       
            </Routes>
            <PhotosDiv />
            <MapBoard />
        </div>
    )
}

export default Home