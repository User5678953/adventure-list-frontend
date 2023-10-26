
import Cookies from "universal-cookie";
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import AdventureCarousel from "../components/AdventureCarousel"
import React from 'react'
import PhotosDiv from '../components/PhotosDiv'
import Modal from '../components/Modal'
import AdventureList from "./AdventureList";
import PhotosCarousel from "../components/PhotosCarousel"

const cookies = new Cookies()


const Home = () => {

     // token verifaction for user
  const token = cookies.get("TOKEN");
  const [selectedAdventureId, setSelectedAdventureId] = useState(null);

     const loggedIn = () => {
      return (
        <div className="homePage">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="homeContent">
                    <AdventureList id={selectedAdventureId} />
                    <PhotosCarousel />
                  </div>
                
                  <AdventureCarousel
                    selectAdventure={setSelectedAdventureId}
                  />{" "}
                  {/* Below */}
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