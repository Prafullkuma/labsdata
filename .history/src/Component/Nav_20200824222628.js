import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/signup"> Register</Link></li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Nav
