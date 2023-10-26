import React, { useState } from "react";
import "../styles/form.scss";

// Setting up state for each input field
function AddAdventureListForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [completed, setCompleted] = useState(false);
  const [tags, setTags] = useState("");
  const [owner, setOwner] = useState("");

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

    // TODO: Send the adventureData to the backend to save in the database.
    try {
      const response = await fetch(
        `http://localhost:3000/adventureList`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adventureData),
        }
      );

      if (response.ok) {
        // Handle a successful response here (e.g., show a success message, redirect, etc.)
        console.log("Adventure created successfully");

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
        Add Adventure
      </button>
    </form>
  );
}

export default AddAdventureListForm;
