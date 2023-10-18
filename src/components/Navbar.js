<<<<<<< HEAD
// import {Link, Route, Routes} from 'react-router-dom'
// import Login from '../pages/Login'
import React from "react"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Navbar = () => {

    const token = cookies.get("TOKEN")

    const notLoggedIn = () => {
        return (
            
                <>
          
                <nav className='navbar'>
                    <a href='/' className='site-title'>
                        AdventureList 2.0
                    </a>
                    <ul>
                        <li>
                            <a href='/login'>Login/Register</a>
                        </li>
                    </ul>
        
                </nav>
        
                </> 
            
        )
    }

    const loggedIn = () => {
        return (
            
            <>
      
            <nav className='navbar'>
                <a href='/' className='site-title'>
                    AdventureList 2.0
                </a>
                <ul>
                    <li>
                        <a href='/login'>New Adventure</a>
                    </li>
                    <li>
                        <a href='/login'>Logout</a>
                    </li>
                </ul>
    
            </nav>
    
            </> 
        
    )
    }

    
    return (
        token ? loggedIn() : notLoggedIn()
    )

}
=======
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import PhotoUploadForm from "./AddPhotosForm";
import AddAdventureForm from "./AddAdventureListForm";
import React, { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  // state for photo Upload
  const [showUploadModal, setShowUploadModal] = useState(false);

  // State for Add Adventure
  const [showAddAdventureModal, setShowAddAdventureModal] = useState(false);
>>>>>>> development

  return (
    <nav className="navbar">
      <h1>ADVENTURE LIST 2.0</h1>
      <Link to="/register/login" state={{ background: location }}>
        <div>Login</div>
      </Link>

      {/* Button to trigger photo upload modal */}
      <button onClick={() => setShowUploadModal(true)}>Upload Photo</button>

      {/* Button to trigger Add Adventure modal */}
      <button onClick={() => setShowAddAdventureModal(true)}>
        Add Adventure
      </button>

      {/* Conditional rendering of the modal with PhotoUploadForm */}
      {showUploadModal && (
        <Modal onClose={() => setShowUploadModal(false)}>
          <PhotoUploadForm />
        </Modal>
      )}

      {showAddAdventureModal && (
        <Modal onClose={() => setShowAddAdventureModal(false)}>
          <AddAdventureForm />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
