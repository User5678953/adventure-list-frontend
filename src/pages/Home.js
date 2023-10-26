
import Cookies from "universal-cookie";
import { Routes, Route } from 'react-router-dom'

import AdventureCarousel from "../components/AdventureCarousel"
import { useState } from "react";


import React from 'react'

import PhotosDiv from '../components/PhotosDiv'
import Modal from '../components/Modal'

import AdventureList from "./AdventureList";
import PhotosCarousel from "../components/PhotosCarousel"


const cookies = new Cookies()


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
                  <div className="homeContent">
                    <AdventureList /> {/* Left */}
                    <PhotosCarousel />{/* Right */}
                  </div>
                  <AdventureCarousel /> {/* Below */}
                </>
              }
            />
            <Route
              path="/register/login"
              element={
                <>
                  <Modal />
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
                </>
              }
            />
            <Route
              path="/register/login"
              element={
                <>
                  <Modal />
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