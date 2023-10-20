// import {Link, Route, Routes} from 'react-router-dom'
// import Login from '../pages/Login'
import { useState } from "react"
import AddAdventureForm from "./AddAdventureListForm";
import Modal from "./Modal"
import React from "react"
import Cookies from "universal-cookie"
const cookies = new Cookies()





const Navbar = () => {
    
     // State for Add Adventure
     const [showAddAdventureModal, setShowAddAdventureModal] = useState(false);

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
            <nav className="navbar">
              <a href="/" className="site-title">
                AdventureList 2.0
              </a>
              <ul>
                <li>
                  {/* Button to trigger Add Adventure modal */}
                  <a onClick={() => setShowAddAdventureModal(true)}>
                    New Adventure
                  </a>
                  {showAddAdventureModal && (
                    <Modal onClose={() => setShowAddAdventureModal(false)}>
                      <AddAdventureForm
                        onClose={() => setShowAddAdventureModal(false)}
                      />
                    </Modal>
                  )}
                </li>
                <li>
                  <a href="/login">Logout</a>
                </li>
              </ul>
            </nav>
          </>
        );
    }

    return (
        token ? loggedIn() : notLoggedIn()

    )
    
}

export default Navbar

