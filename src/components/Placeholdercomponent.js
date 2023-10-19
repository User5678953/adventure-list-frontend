import React, { useState } from "react";
import Modal from "./Modal";
import PhotoUploadForm from "./AddPhotosForm";
import AddAdventureForm from "./AddAdventureListForm";
import Navbar from "./Navbar"; // Import the Navbar component

const ModalController = () => {
  // state for photo Upload
  const [showUploadModal, setShowUploadModal] = useState(false);

  // State for Add Adventure
  const [showAddAdventureModal, setShowAddAdventureModal] = useState(false);

  return (
    <div>
      <Navbar />
      {/* Add buttons (or other UI elements) here to trigger modals if needed */}

      {/* Button to trigger photo upload modal */}
      <button onClick={() => setShowUploadModal(true)}>Upload Photo</button>

      {/* Button to trigger Add Adventure modal */}
      <button onClick={() => setShowAddAdventureModal(true)}>
        Add Adventure
      </button>

      {/* Conditional rendering of the modal with PhotoUploadForm */}
      {showUploadModal && (
        <Modal onClose={() => setShowUploadModal(false)}>
          <PhotoUploadForm />
        </Modal>
      )}

      {showAddAdventureModal && (
        <Modal onClose={() => setShowAddAdventureModal(false)}>
          <AddAdventureForm />
        </Modal>
      )}
    </div>
  );
};

export default ModalController;
