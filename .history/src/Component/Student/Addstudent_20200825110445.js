import React from 'react'
import './addstudent.css'
import { Card, CardContent, Typography } from '@material-ui/core'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
function Addstudent() {
    return (
        <div>

            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <form >
                            <input type="text"
                                placeholder="Enter Full Name" />
                        </form>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default Addstudent







