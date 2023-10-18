import axios from "axios"
import { useState } from "react"
import React from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const move = useNavigate()

    async function submit(e) {
        e.preventDefault()

        try {
           const response = await axios.post("http://localhost:3000/register/login", {
                username, password
            } ).then(res =>{
                if(res.data==="logged in") {
                    move('/')
                } else {
                    alert("try again")
                }
            })
             console.log("User Logged In")

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login-container">
             <h2>Login</h2>
            <form action="POST">
                <input type="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"></input>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"></input>
                <input className="submit-btn" type="submit" onClick={submit}></input>
            </form>
        <Link to="/register">Register Instead</Link>
        
        </div>
    )
}

export default Login