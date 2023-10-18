import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import MapBoard from '../components/MapBoard'
import React from 'react'


import { Routes, Route } from 'react-router-dom'
//import AdventureCarousel from "../components/AdventureCarousel"
import MapBoard from '../components/MapBoard'
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
                 <MapBoard /> 
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