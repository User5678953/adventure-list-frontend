import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import PhotoUploadForm from "../components/AddPhotosForm";
import Modal from "../components/Modal";

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;

console.log("Backend URL:", backendURL);

const cookies = new Cookies();

const AdventureList = () => {
  const [adventure, setAdventure] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // fetch request
  useEffect(() => {

    fetch(`${backendURL}/adventureList`)
      .then((response) => response.json())
      .then((data) => setAdventure(data))
      .catch((error) => console.error("Error fetching adventure data:", error));
  }, []);

  return (
    <>
      <div className="adventure-list">
        {/* <h1>Adventure List Page</h1> */}
        <h2>Adventure Title</h2>
        <p>Description: Adventure Description</p>
        <p>Date Created: Date</p>
        <p>Location: Location</p>
        <p>Completed: Yes/No</p>
        <p>Tags: Tags</p>
        <p>Co-Owners: Co-Owner Names</p>
        <div className="button-container">
          <button className="advent-button advent-button-left">Edit</button>
          <button className="advent-button advent-button-delete">Delete</button>
          <button
            className="advent-button advent-button-color"
            onClick={() => setShowUploadModal(true)}
          >
            Add Photo
          </button>
        </div>

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
export default AdventureList;