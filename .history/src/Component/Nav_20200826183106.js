import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
function Nav() {
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.signOut()
    }
    return (
        <div className="Navbar">
            <h1> <Link to="/"> LABS</Link></h1>
            <ul>
                {auth.onAuthStateChanged(user => user ?
                    <li><Link to="/" onClick={logoutHandler}>Logout</Link>
                    </li>
                    : <div >
                        <li><Link to="/signup"> Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </div>)}
            </ul>
        </div>
    )
}

export default Nav
