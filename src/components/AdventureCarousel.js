import React from "react"
import { useState } from "react";
import PhotoUploadForm from "./AddPhotosForm";
import Modal from "./Modal";

const AdventureCarousel = () => {
  // state for photo Upload
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
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
  );
}

export default AdventureCarousel