import React from 'react'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Cookies from "universal-cookie";

import AdventureList from "./AdventureList";

import AdventureCarousel from "../components/AdventureCarousel"
import Modal from '../components/Modal'
import PhotosCarousel from "../components/PhotosCarousel"
import PhotosDiv from '../components/PhotosDiv'

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