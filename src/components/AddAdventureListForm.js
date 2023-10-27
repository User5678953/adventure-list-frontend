import React, { useState } from "react";
import "../styles/form.scss";

const backendURL = process.env.REACT_APP_BACKEND_URL;

function AddAdventureListForm({ adventure = null, onClose }) {

  console.log("THIS IS ADVENTURE", adventure);


  const isEditMode = adventure !== null;

  const [title, setTitle] = useState(adventure ? adventure.title : "");

  // const [coverPhoto, setCoverPhoto] = useState(adventure ? adventure.coverPhoto : "");

  const [description, setDescription] = useState(adventure ? adventure.description : "");

  const [location, setLocation] = useState(adventure ? adventure.location : "");

  const [completed, setCompleted] = useState(adventure ? adventure.completed : false);

  const [tags, setTags] = useState(adventure ? adventure.tags : ""); // used with coverPhoto URL

  const [owner, setOwner] = useState(adventure ? adventure.owner : "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adventureData = {
      title,
      description,
      location,
      completed,
      tags,
      owner,
      // coverPhoto
    };

    const method = isEditMode ? "PUT" : "POST";

    const endpoint = isEditMode
      ? `${backendURL}/adventureList/${adventure._id}`
      : `${backendURL}/adventureList`;

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adventureData),
      });
      console.log(adventureData)
      if (response.ok) {
        const successMessage = isEditMode
          ? "Adventure updated successfully"
          : "Adventure created successfully";

        console.log(successMessage);

        window.location.reload()
        onClose();
        // alert(successMessage);
      } else {
        const errorData = await response.json();
        console.error("Error creating adventure:", errorData);
      }
    } catch (error) {
      console.error("Error creating adventure:", error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-background">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-background">
        <label>Cover Photo:</label>
        <input
          type="text"
          value={tags} // used as coverPhoto
          placeholder="Photo URL"
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="form-background">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-background">
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      {/* <div className="form-background">
        <label>Tags:</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div> */}
      <div className="form-background checkbox-container">
        <label>Completed:</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div>
      {/* <div className="form-background">
        <label>Owner:</label>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </div> */}
      <button type="submit" className="submit">
        {isEditMode ? "Update Adventure" : "Add Adventure"}
      </button>
    </form>
  );
}

export default AddAdventureListForm;