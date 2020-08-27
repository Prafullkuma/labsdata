import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

function Nav() {
    const [user, setUser] = useState(false)
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.signOut()
    }


    return (
        <div className="Navbar">
            <h1> <Link to="/"> LABS</Link></h1>
            <ul>
                {user ? <div>
                    <li style={{ display: 'none' }}><Link to="/signup"> Register</Link></li>
                    <li style={{ display: 'none' }}><Link to="/login">Login</Link></li>

                </div>}
                <li><Link to="/" onClick={logoutHandler}>Logout</Link>
                </li>

            </ul>
        </div>
    )
}

export default Nav
