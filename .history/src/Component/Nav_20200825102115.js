import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className="Navbar">
            <h1> <Link to="/"> LABS</Link></h1>
            <ul>
                <li><Link to="/signup"> Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
