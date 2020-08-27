import React, { useState } from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import './Admin.css'
import Details from './Details/Details'

function Admin({ user, userToken }) {
    const [name, setName] = useState(null)
    console.log(user)
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <p>User Name:{user}</p>
                </CardContent>
            </Card>
            <Details />
        </div>
    )
}

export default Admin
