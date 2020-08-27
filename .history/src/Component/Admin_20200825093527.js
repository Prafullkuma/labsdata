import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
function Admin() {
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <Avatar />
                        <h1></h1>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Admin
