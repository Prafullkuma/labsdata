import React from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import './Admin.css'
import Details from './Details/Details'
import { auth } from '../firebase'
auth.onAuthStateChanged(user => {
    if (user) {
        setName({ name: user })
    }
})
function Admin() {
    const [name, setName] = useState(null)
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <Avatar />
                        <h3>Username</h3>
                    </Typography>
                </CardContent>
            </Card>
            <Details name />
        </div>
    )
}

export default Admin
