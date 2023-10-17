import { Link, Outlet, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()

    return (
        <nav className='navbar'>
            <Link to='/register/login' state={{background: location}}>
                <div>Login</div>
            </Link>
            {/* <Outlet /> */}
        </nav>
    )
}

export default Navbar