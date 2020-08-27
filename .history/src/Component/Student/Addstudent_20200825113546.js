import React from 'react'
import './addstudent.css'
import { Card, CardContent, Typography } from '@material-ui/core'

function Addstudent() {
    return (
        <div>

            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <form >
                            <input type="text"
                                placeholder="Enter Full Name" />
                            <input type="date" className="'date enchiladac" />
                            <select value={} onChange={}>
                                <option value="school1">School Name</option>
                                <option value="school1">School Name</option>
                                <option value="school1">School Name</option>

                            </select>
                        </form>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default Addstudent







