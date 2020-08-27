import React from 'react'
import './addstudent.css'
import { Card, CardContent, Typography } from '@material-ui/core'
function Addstudent() {
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

export default Addstudent
