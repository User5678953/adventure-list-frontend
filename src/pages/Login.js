import axios from "axios";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Modal from "../components/Modal";
import Register from "./Register";
const cookies = new Cookies();

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Use State for Register
  const [showRegister, setRegister] = useState(false);

  const move = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios
        .post("http://localhost:3000/register/login", {
          username,
          password,
        })
        .then((res) => {
          if (res.data === "logged in") {
            cookies.set("TOKEN", res.data.token, { path: "/" });
            move("/");
            window.location.reload();
          } else {
            alert("try again");
          }
        });
      console.log("User Logged In");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="form-fill-modal">
      <form action="POST" ClassName="form-background">
        <h1>Login</h1>
        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />

        <label>Password:</label>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

        <button type="submit" onClick={submit} className="submit">
          Login
        </button>
        <h3>New to adventuring?</h3>
        <button
          type="submit"
          onClick={() => setRegister(true)}
          className="submit"
        >
          Create an account
        </button>
      </form>
      {showRegister && (
        <Modal onClose={() => setRegister(false)}>
          <Register />
        </Modal>
      )}
    </div>
  );
};

export default Login;
