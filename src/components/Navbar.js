import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import PhotoUploadForm from "./AddPhotosForm";
import AddAdventureForm from "./AddAdventureListForm";
import React, { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  // state for photo Upload
  const [showUploadModal, setShowUploadModal] = useState(false);

  // State for Add Adventure
  const [showAddAdventureModal, setShowAddAdventureModal] = useState(false);

  return (
    <nav className="navbar">
      <h1>ADVENTURE LIST 2.0</h1>
      <Link to="/register/login" state={{ background: location }}>
        <div>Login</div>
      </Link>

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
    </nav>
  );
};

export default Navbar;
