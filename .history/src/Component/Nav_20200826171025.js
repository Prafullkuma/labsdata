import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
function Nav() {
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.signOut()
    }
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log(user)
        } else {
            console.log("not Logged in ")
        }
    })
    return (
        <div className="Navbar">
            <h1> <Link to="/"> LABS</Link></h1>
            <ul>
                <li><Link to="/signup"> Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/" onClick={logoutHandler}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
