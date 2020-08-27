import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

function Nav() {
    const [user, setUser] = useState(false)
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.signOut()
    }
    auth.onAuthStateChanged(_user => {
        if (_user) {
            console.log(_user)
            setUser(user)
        }
    })

    return (
        <div className="Navbar">
            <h1> <Link to="/"> LABS</Link></h1>
            <ul>
                {user ?
                    <li><Link to="/" onClick={logoutHandler}>Logout</Link>
                    </li> :

                    <div>
                        <li><Link to="/signup"> Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </div>
                }

            </ul>
        </div>
    )
}

export default Nav
