import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import AddPhotosForm from "../components/AddPhotosForm"
import Modal from "../components/Modal";

const cookies = new Cookies();

// state for photo Upload
// const [showUploadModal, setShowUploadModal] = useState(false);

const AdventureList = () => {
  return (
    <div className="adventureList">
      <h1>Adventure List Page</h1>

      {/* Upload Photo button needs to be moved into the view adventure modal */}

      <div>
        {/* Button to trigger photo upload modal */}
        {/* <button onClick={() => setShowUploadModal(true)}>Upload Photo</button> */}

        {/* Conditional rendering of the modal with PhotoUploadForm */}
        {/* {showUploadModal && (
          <Modal onClose={() => setShowUploadModal(false)}>
            <AddPhotosForm />
          </Modal>
        )} */}
      </div>
    </div>
  );
};

export default AdventureList;
