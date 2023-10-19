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

export default Navbar

