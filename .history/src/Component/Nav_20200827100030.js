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
            console.log(_user.email)
            setUser(user)
        }
    })

    return (
        <div className="Navbar">
            <h1> <Link to="/"> LABS</Link></h1>
            <ul>
                {user.email === "prafull@gmail.com" ?
                    <li style={{ display: 'block' }} onClick={logoutHandler}><Link to="/" >Logout</Link>
                    </li>
                    :
                    <div style={{ display: 'block' }}>
                        <li><Link to="/signup"> Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </div>

                }

            </ul>
        </div>
    )
}

export default Nav
