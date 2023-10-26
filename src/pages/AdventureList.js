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

const AdventureList = ({ id }) => {
  const [adventure, setAdventure] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);


  // fetch request

  useEffect(() => {
    if (id) {
      fetch(`${backendURL}/adventureList/${id}`)
        .then((response) => response.json())
        .then((data) => setAdventure(data))
        .catch((error) =>
          console.error("Error fetching adventure data:", error)
        );
    }
  }, [id]);

  return (
    <>
      <div className="adventure-list">
        {adventure ? (
          <>
            <h2>{adventure.title}</h2>
            <p>Description: {adventure.description}</p>
            <p>Date Created: {adventure.dateCreated}</p>
            <p>Location: {adventure.location}</p>
            <p>Completed: {adventure.completed ? "Yes" : "No"}</p>
            <p>Tags: {adventure.tags}</p>
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
          </>
        ) : (
          <p>Select an Adventure below or add one! Get Adventuring already!</p>
        )}

        {/* Conditional rendering of the modal with PhotoUploadForm */}
        {showUploadModal && (
          <Modal onClose={() => setShowUploadModal(false)}>
            <PhotoUploadForm />
          </Modal>
        )}
      </div>
    </>
  );
}
export default AdventureList;