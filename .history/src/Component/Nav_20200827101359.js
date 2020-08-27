import React, { useState } from 'react'
import './Nav.css'
import { Link, Redirect } from 'react-router-dom'
import { auth } from '../firebase'
import Main from './Main'
import Admin from './Admin'
function Nav() {
    const [user, setUser] = useState(false)
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.signOut()
    }
    auth.onAuthStateChanged(_user => {
        if (_user) {
            Redirect(<Admin user={user.email} userToken={_user.refreshToken} />)
        }
        else {
            Redirect(<Main />)
        }
    })
    return (
        <div className="Navbar">
            <h1> <Link to="/"> LABS</Link></h1>
            <ul>
                {user ?
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
