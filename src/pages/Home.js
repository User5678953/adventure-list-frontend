/**
 * Home Component
 * 
 * This component is the main landing page of the application. It renders:
 * - A photos display section (PhotosDiv component)
 * - A map board (MapBoard component)
 * 
 * It also contains routing logic for:
 * - The root path (`/`): Which displays the photos and the map.
 * - The login path (`/register/login`): Displays a modal for user login.
 */


import { Routes, Route } from 'react-router-dom'
//import AdventureCarousel from "../components/AdventureCarousel"
//import MapBoard from '../components/MapBoard'
import PhotosDiv from '../components/PhotosDiv'
import Modal from '../components/Modal'

const Home = () => {

    return (
      <div className="homePage">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PhotosDiv />
                {/*<AdventureCarousel />*/}
                {/* <MapBoard /> */}
              </>
            }
          />
          <Route
            path="/register/login"
            element={
              <>
                <Modal />
                {/* <Login />  */}
              </>
            }
          />
        </Routes>
      </div>
    );
}

export default Home