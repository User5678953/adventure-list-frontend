import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import AddAdventureListForm from "../components/AddAdventureListForm";
import Modal from "../components/Modal";
import PhotoUploadForm from "../components/AddPhotosForm";

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;
// console.log("Backend URL:", backendURL);

const cookies = new Cookies();

const AdventureList = ({ id }) => {
  const [adventure, setAdventure] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const navigate = useNavigate()

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

  // Handler to initiate the edit mode
  const handleEditClick = () => {
    setShowEditModal(true);
  };

  // Handler to close the edit mode
  const handleEditClose = () => {
    setShowEditModal(false);
  };

  // Handler to close the edit form
  const handleCloseFunction = () => {
    setShowUploadModal(false);
  };

  const getAdventure = async () => {
    const response = await fetch(backendURL)
    const data = await response.json()
    setAdventure(data)
  }

  // this is what the route should look like for delete.
  // console.log(backendURL + '/adventureList/' + id)

  const deleteAdventure = async (id) => {
    await fetch(backendURL + '/adventureList/' + id, {
      method: 'delete'
    })
    getAdventure()
  }

  // Handle delete adventure
  const handleDelete = () => {
    deleteAdventure(id)
    navigate('/')
  }

  return (
    <>
      <div className="adventure-list">
        {adventure && !showEditModal ? (
          <>
            <h2>{adventure.title}</h2>
            <p>Description: {adventure.description}</p>
            {/* <p>Date Created: {adventure.dateCreated}</p> */}
            <p>Location: {adventure.location}</p>
            <p>Completed: {adventure.completed ? "Yes" : "No"}</p>
            {/* <p>Tags: {adventure.tags}</p> */}
            <div className="button-container">
              <button
                className="advent-button advent-button-left"
                onClick={handleEditClick}
              >
                Edit
              </button>
              <button 
                className="advent-button advent-button-delete"
                onClick={handleDelete}
              >
                Delete
              </button>
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

        {/* Conditional rendering of the edit modal with AddAdventureListForm */}
        {showEditModal && (
          <Modal onClose={handleEditClose}>
            <AddAdventureListForm
              adventure={adventure}
              onClose={handleEditClose}
            />
          </Modal>
        )}

        {/* Conditional rendering of the modal with PhotoUploadForm */}
        {showUploadModal && (
          <Modal onClose={handleCloseFunction}>
            <PhotoUploadForm onClose={handleCloseFunction} />
          </Modal>
        )}
      </div>
    </>
  );
}
export default AdventureList;