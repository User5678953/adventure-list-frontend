import axios from "axios"
import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const move = useNavigate()


    async function submit(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:3000/register", {
                username, password
            } ).then(res => {
                if(res.data==="Success"){
                    move('/')
                } else {
                    alert("try again")
                }
            })
             console.log("User Registered")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login-container">
            <h2>Register</h2>
        
            <form action="POST">
                <input type="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"></input>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"></input>
                <input className="submit-btn" type="submit" onClick={submit}></input>
            </form>
        
        </div>
    )
}

export default Register