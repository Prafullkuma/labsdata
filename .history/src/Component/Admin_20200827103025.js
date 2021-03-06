import React, { useState } from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import './Admin.css'
import Details from './Details/Details'
import { auth } from '../firebase'
function Admin({ user, userToken }) {
    const [name, setName] = useState(null)
    auth.onAuthStateChanged(user => {
        if (user) {
            setName(user.email)
        } else {
            console.log("Not Logged in")
        }
    })
    console.log(user)
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <p>User Name:{name}</p>
                </CardContent>
            </Card>
            <Details />
        </div>
    )
}

export default Admin
