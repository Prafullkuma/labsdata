import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './signup.css'
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPasswod] = useState('')
    return (
        <div className="register">
            <h1>Registeration</h1>
            <form>
                <TextField id="outlined-basic"
                    type="email"
                    required
                    label="Enter Email"
                    variant="outlined"
                />
                <br />
                <br />
                <br />
                <TextField id="outlined-basic" type="password" required label="Enter Password" variant="outlined" />
                <br />
                <Button> Signup</Button>
                <br />
                <p>If you Have Account <Link to="/login" style={{ color: 'blue' }}>Login</Link> here</p>
            </form>

        </div>
    )
}

export default Signup
