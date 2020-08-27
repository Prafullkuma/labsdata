import React from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import './Admin.css'
function Admin() {
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <Avatar />
                        <h1>Name of the user</h1>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Admin
