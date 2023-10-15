import React, { useState } from "react";
import "../styles/form.scss";

function PhotoUploadForm() {
  // Setting up state for each input field
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

  return (
    <form>
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

      <button type="button">Upload</button>
    </form>
  );
}

export default PhotoUploadForm;
