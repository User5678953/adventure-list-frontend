import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
//import PhotoUploadForm from "./AddPhotosForm";
//import Modal from "./Modal";

const cookies = new Cookies();

// state for photo Upload
//const [showUploadModal, setShowUploadModal] = useState(false);

const AdventureList = () => {

  return (
    <>
      <div className="button-container">
        {/*<h2>{adventure.title}</h2>
        <p>{adventure.description}</p>*/}
        <button className="advent-button advent-button-left">Edit</button>
        <button className="advent-button advent-button-delete">Delete</button>
        <button className="advent-button advent-button-color">Add Photo</button>
      </div>
    </>
  );
};

export default AdventureList;





// <>
    //   <h1>Adventure List Page</h1>

    //   <div>
    //     {/* Button to trigger photo upload modal */}
    //     <button onClick={() => setShowUploadModal(true)}>Upload Photo</button>

    //     {/* Conditional rendering of the modal with PhotoUploadForm */}
    //     {showUploadModal && (
    //       <Modal onClose={() => setShowUploadModal(false)}>
    //         <PhotoUploadForm />
    //       </Modal>
    //     )}