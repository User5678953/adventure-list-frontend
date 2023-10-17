<<<<<<< Updated upstream
import { Link, Outlet, useLocation } from 'react-router-dom'
=======
import {Link} from 'react-router-dom'


>>>>>>> Stashed changes

const Navbar = () => {

    const location = useLocation()

    return (
<<<<<<< Updated upstream
        <nav className='navbar'>
            <Link to='/register/login' state={{background: location}}>
                <div>Login</div>
            </Link>
            {/* <Outlet /> */}
        </nav>
    )
=======
      <nav className="navbar">
        <Link to="/register/login">
          <div>Login</div>
        </Link>
        <Link to="/photos/PhotosManagement">
          <div>Add Photo</div>
        </Link>
      </nav>
    );
>>>>>>> Stashed changes
}

export default Navbar