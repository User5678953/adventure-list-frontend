import {Link, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login'


const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* <Routes>
                <Route path='/register/login' element={
                    <Login />
                } 

                />
            </Routes> */}
            <Link to='/register/login'>
                <div>Login</div>
            </Link>
        </nav>
    )
}

export default Navbar