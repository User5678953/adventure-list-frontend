import React, { useState } from "react";
import "../styles/form.scss";

// Setting up state for each input field
function AddAdventureListForm({ adventure = null, onClose }) {
  const isEditMode = adventure !== null; {
  
    // Initialize state with adventure data if in edit mode
    const [title, setTitle] = useState(adventure ? adventure.title : "");
    const [description, setDescription] = useState(adventure ? adventure.description : "");
    const [location, setLocation] = useState(adventure ? adventure.location : "");
    const [completed, setCompleted] = useState(adventure ? adventure.completed : false);
    const [tags, setTags] = useState(adventure ? adventure.tags : "");
    const [owner, setOwner] = useState(adventure ? adventure.owner : "");

    const handleSubmit = async (event) => {
      event.preventDefault();

      // adventure data
      const adventureData = {
        title,
        description,
        location,
        completed,
        tags,
        owner,
      };

      // Determine if we should POST (add) or PUT (edit) based on mode
      const method = isEditMode ? "PUT" : "POST";
      const endpoint = isEditMode
          ? `${process.env.REACT_APP_BACKEND_URL}/adventureList/${adventure.id}`
          : `${process.env.REACT_APP_BACKEND_URL}/adventureList`;


      try {
        const response = await fetch(endpoint, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adventureData),
        });

        if (response.ok) {
          const successMessage = isEditMode
            ? "Adventure updated successfully"
            : "Adventure created successfully";

          console.log(successMessage);
          onClose();
          alert(successMessage);

          // Close the modal
          onClose();
          alert("Adventure created successfully!");
        } else {
          // Handle errors
          const errorData = await response.json();
          console.error("Error creating adventure:", errorData);
        }
      } catch (error) {
        // Handle network  errors
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
          />
        </div>

        <div className="form-background">
          <label>Tags:</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="form-background checkbox-container">
          <label>Completed:</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>

        <button type="submit" className="submit">
          {isEditMode ? "Update Adventure" : "Add Adventure"}
        </button>
      </form>
    );
  }
}

export default AddAdventureListForm;
