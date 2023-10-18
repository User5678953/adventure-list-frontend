import React, { useState } from 'react';
import "../styles/form.scss";


 // Setting up state for each input field
function AddAdventureListForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [completed, setCompleted] = useState(false);
  const [tags, setTags] = useState('');
  const [owner, setOwner] = useState('');


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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-background">
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div className="form-background">
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>

      <div className="form-background">
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>

      <div className="form-background">
        <label>Tags:</label>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>

      <div className="form-background">
        <label>Owner:</label>
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} required />
      </div>

      <div className="form-background checkbox-container">
        <label>Completed:</label>
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
      </div>


      <button type="submit">Add Adventure</button>
    </form>
  );
}

export default AddAdventureListForm;
