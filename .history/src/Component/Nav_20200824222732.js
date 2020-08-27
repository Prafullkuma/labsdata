import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <h1>LABS</h1>
            <ul>
                <li><Link to="/signup"> Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    )
}

export default Nav
