import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const backendURL = process.env.REACT_APP_BACKEND_URL;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const move = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post(`${backendURL}/register`, {
          username,
          password,
        })
        .then((res) => {
          if (res.data === "Success") {
            cookies.set("TOKEN", res.data.token, { path: "/" });
            move("/");
            window.location.reload();
          } else {
            alert("try again");
          }
        });
      console.log("User Registered");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="form-fill-modal">
      <form action="POST" className="form-background">
        <h1>Register</h1>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
