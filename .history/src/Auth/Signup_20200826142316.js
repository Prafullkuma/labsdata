import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './signup.css'
import { auth } from '../firebase'
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPasswod] = useState('')
    const signupHandler = (e) => {
        e.preventDefault()
        const email = e.target.value
        const password = e.target.value
        auth.createUserWithEmailAndPassword(email, password)
            .then(cred => console.log(cred))
    }
    return (
        <div className="register">
            <h1>Registeration</h1>
            <form>
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
                    onChange={e => setPasswod(e.target.value)}
                    id="outlined-basic"
                    type="password"
                    required label="Enter Password"
                    variant="outlined" />
                <br />
                <Button onClick={signupHandler}> Signup</Button>
                <br />
                <p>If you Have Account <Link to="/login" style={{ color: 'blue' }}>Login</Link> here</p>
            </form>

        </div>
    )
}

export default Signup
