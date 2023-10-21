import { useState } from "react";
import AddAdventureForm from "./AddAdventureListForm";
import Login from "../pages/Login";
import Modal from "./Modal";
import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();

const Navbar = () => {
  // State for Add Adventure
  const [showAddAdventureModal, setShowAddAdventureModal] = useState(false);

  // State for Login
  const [showLogin, setLogin] = useState(false);

  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // token verifaction for user
  const token = cookies.get("TOKEN");

  // function for logging out

  const move = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios
        .delete("http://localhost:3000/register/logout", {
          username,
          password,
        })
        .then((res) => {
          if (res.data === "logged out") {
            cookies.remove("TOKEN", res.data.token, { path: "/" });
            move("/");
            window.location.reload();
          } else {
            alert("try again");
          }
        });
      console.log("User Logged Out");
    } catch (err) {
      console.log(err);
    }
  }

  const notLoggedIn = () => {
    return (
      <>
        <nav className="navbar">
          <a href="/" className="site-title">
            AdventureList 2.0
          </a>
          <ul>
            <li>
              <a onClick={() => setLogin(true)}>Login/Register</a>
              {showLogin && (
                <Modal onClose={() => setLogin(false)}>
                  <Login />
                </Modal>
              )}
            </li>
          </ul>
        </nav>
      </>
    );
  };

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
                  <AddAdventureForm />
                </Modal>
              )}
            </li>
            <li>
              <a href="/logout" onClick={submit}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  };

  return token ? loggedIn() : notLoggedIn();
};

export default Navbar;
