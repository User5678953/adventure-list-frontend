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

import Cookies from "universal-cookie";
import { Routes, Route } from 'react-router-dom'

import AdventureCarousel from "../components/AdventureCarousel"
// import MapBoard from '../components/MapBoard'

import React from 'react'

import PhotosDiv from '../components/PhotosDiv'
import Modal from '../components/Modal'
import UserUpperDiv from "../components/UserUpperDiv";

const cookies = new Cookies()



/**
 * Need conditional rendering for MapBoard
 * So if user logged in show adventure carousel
 * If user NOT logged in, show MapBoard
 * 
 * DONE
 * 
 */


const Home = () => {

     // token verifaction for user
     const token = cookies.get("TOKEN");

     const loggedIn = () => {
      return (
        <div className="homePage">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <UserUpperDiv />
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

     const notLoggedin = () => {
      return (
        <div className="homePage">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PhotosDiv />
                  {/* <MapBoard />   only shown when user logged out */}
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

    return token ? loggedIn() : notLoggedin()

    
}

export default Home