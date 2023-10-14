import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/register/login'>
                <div>Login</div>
            </Link>
        </nav>
    )
}

export default Navbar