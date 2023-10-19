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

import AdventureCarousel from "../components/AdventureCarousel"

import Login from './Login'
import MapBoard from '../components/MapBoard'

import React from 'react'

import PhotosDiv from '../components/PhotosDiv'
import Modal from '../components/Modal'


/**
 * Need conditional rendering for MapBoard
 * So if user logged in show adventure carousel
 * If user NOT logged in, show MapBoard
 * 
 */

const Home = () => {

    return (
      <div className="homePage">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PhotosDiv />
                <AdventureCarousel /> {/*shown when logged in*/}
                {/* <MapBoard /> */}  {/*only shown when user logged out*/}
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