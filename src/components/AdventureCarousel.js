import React from "react"
import AdvCard from "./adventureCards/AdvCard"
import { useEffect, useState } from "react";
import PhotoUploadForm from "./AddPhotosForm";
import Modal from "./Modal";

// IMPORT TEST DATA
import advTestData from './adventureCards/TestAdvData'

// IMPORT STYLE
import "../styles/cards.scss"

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;


/**
 * Need to create a fetch request to backend API to GET all adventures and display as individual cards.
 * 1) GET request
 * 2) MAP the data into the function
 * 
 */
const AdventureCarousel = () => {


  // state for photo Upload
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [adventure, setAdventure] = useState([])

  const getAdventure = async () => {
    const response = await fetch (`${backendURL}/adventureList`)
    const data = await response.json()
    setAdventure(data)
  }

  useEffect(() => {
    getAdventure()
  },[])

  console.log(adventure)
  
    return (
      <>
        <div className="adventure-carousel">
            {/* <h1>Adventure Carousel Component</h1> */}
            <div className="adventures" style={{width: "18rem"}}>
                {adventure.map((adventure, i) => {
                    return (<AdvCard {...adventure} key={i} />)
                })}
            </div>
        </div>


    <div>
      <h1>Adventure Carousel Component</h1>

      {/* Button to trigger photo upload modal */}
      <button onClick={() => setShowUploadModal(true)}>Upload Photo</button>

      {/* Conditional rendering of the modal with PhotoUploadForm */}
      {showUploadModal && (
        <Modal onClose={() => setShowUploadModal(false)}>
          <PhotoUploadForm />
        </Modal>
      )}
    </div>
    </>
  );
};

export default AdventureCarousel;
