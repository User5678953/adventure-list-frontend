import React from "react"
import AdvCard from "./adventureCards/AdvCard"
import { useState } from "react";
import PhotoUploadForm from "./AddPhotosForm";
import Modal from "./Modal";

// IMPORT STYLE
import "../styles/cards.scss"

// IMPORT TEST DATA
import advTestData from './adventureCards/TestAdvData'

const AdventureCarousel = () => {
  // state for photo Upload
  const [showUploadModal, setShowUploadModal] = useState(false);
    return (
      <>
        <div className="adventure-carousel">
            {/* <h1>Adventure Carousel Component</h1> */}
            <div className="adventures" style={{width: "18rem"}}>
                {advTestData.map((adventure, i) => {
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
