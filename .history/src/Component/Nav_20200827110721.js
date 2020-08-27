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
        window.localStorage.removeItem("Token", user.refreshToken)
    }
    auth.onAuthStateChanged(_user => {
        if (_user) {
            Redirect(<Admin />)
            setUser(_user)
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
                    <li onClick={logoutHandler}><Link to="/" >Logout</Link>
                    </li>
                    :
                    <div >
                        <li><Link to="/signup"> Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </div>

                }

            </ul>
        </div>
    )
}

export default Nav
