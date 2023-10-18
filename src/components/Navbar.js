// import {Link, Route, Routes} from 'react-router-dom'
// import Login from '../pages/Login'
import React from "react"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href='/' className='site-title'>
                AdventureList 2.0
            </a>
            <ul>
                <li>
                    <a href='/login'>Login/Register</a>
                </li>
            </ul>

            {/* <Link to='/register/login'>
                <div>Login</div>
            </Link> */}
               {/* <Routes>
                <Route path='/register/login' element={
                    <Login />
                } 

                />
            </Routes> */}
        </nav>
    )
}

export default Navbar