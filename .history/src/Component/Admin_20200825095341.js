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
                        <h3>Username</h3>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Admin
