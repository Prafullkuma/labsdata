import React, { useState } from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import './Admin.css'
import Details from './Details/Details'

function Admin({ user }) {
    const [name, setName] = useState(null)
    return (
        <div>
            {console.log(user)}
            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <Avatar />
                        <h3 style={{ color: 'black' }}>{user}</h3>
                    </Typography>
                </CardContent>
            </Card>
            <Details />
        </div>
    )
}

export default Admin
