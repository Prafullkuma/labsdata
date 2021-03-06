import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const loginHandler = (e) => {
        e.preventDefault()
        const _email = email
        const _password = password
        auth.signInWithEmailAndPassword(_email, _password)
            .then(cred => console.log(cred))
            .catch((error) => {
                setError(error.message)
            })
    }
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log(user)
        } else {
            console.log("not Logged in ")
        }
    })
    return (
        <div className="register">
            <h1>Login</h1>
            <form>
                <p>{error}</p>
                <br />
                <br />
                <TextField id="outlined-basic"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Enter Email"
                    variant="outlined"
                />
                <br />
                <br />
                <br />
                <TextField
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="outlined-basic"
                    type="password"
                    required label="Enter Password"
                    variant="outlined" />
                <br />
                <Button onClick={loginHandler}> Login</Button>
                <br />
                <p><Link to="/signup" style={{ color: 'blue' }}>Signup Here</Link> here</p>
            </form>

        </div>

    )
}

export default Login
