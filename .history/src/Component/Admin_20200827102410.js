import React, { useState } from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import './Admin.css'
import Details from './Details/Details'

function Admin(props) {
    const [name, setName] = useState(null)
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <Avatar />
                        <h3 style={{ color: black }}>{props.user}</h3>
                    </Typography>
                </CardContent>
            </Card>
            <Details />
        </div>
    )
}

export default Admin
