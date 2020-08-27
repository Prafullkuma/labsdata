import React from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import './Admin.css'
import Details from './Details/Details'
function Admin() {
    return (
        <Card className="all_data">
            <CardContent>
                <Typography className="userdata">
                    <Avatar />
                    <h3>Username</h3>
                </Typography>
            </CardContent>
        </Card>
        <Details />
        
    )
}

export default Admin
