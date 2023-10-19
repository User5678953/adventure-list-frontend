import React, { useState } from "react";
import "../styles/form.scss";
import Modal from "./Modal";

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;
console.log("Backend URL:", backendURL);



function AddPhotoForm() {
  // Setting up state for each input field
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

const handleUpload = async (event) => {
  event.preventDefault();
  try {
    console.log("About to send POST request");

    const requestBody = {
      imageURL: imageURL,
      description: description,
      isPublic: isPublic,
      location: location,
      tags: tags,
    };

    const response = await fetch(`${backendURL}/photos/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was an error uploading the photo", error);
  }
};

  return (
    <form onSubmit={handleUpload}>
      <div className="form-background">
        <label>Image URL:</label>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
          placeholder="Enter image URL here..."
        />
      </div>

      <div className="form-background">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional"
        ></textarea>
      </div>

      <div className="form-background">
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Optional"
        />
      </div>

      <div className="form-background">
        <label>Tags:</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Optional"
        />
      </div>

      <div className="form-background checkbox-container">
        <label>Public:</label>
        
        <p className="form-background"> Select this box to set photo to public</p>
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
      </div>

      <button type="submit">Upload</button>
    </form>
  );
}

export default AddPhotoForm;
