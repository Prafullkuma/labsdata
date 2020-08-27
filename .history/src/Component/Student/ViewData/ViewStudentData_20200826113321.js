import React, { useState } from 'react'
import './ViewData.css'
import { makeStyles } from '@material-ui/core/styles'

import { db } from '../../../firebase'
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function ViewStudentData({ id, allData }) {
    const editHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className="all_Data">
            <table border="1">
                <tr>
                    <td>{allData.name}</td>
                    <td>{allData.date}</td>
                    <td>{allData.school}</td>
                    <td>{allData.class}</td>
                    <td>{allData.division}</td>
                    <td>{allData.status}</td>
                    <td><button onClick={editHandler}>Edit</button></td>
                    <td><button onClick={event => db.collection('addStudent').doc(id).delete()}>Delete</button></td>
                </tr>
            </table>
        </div >
    )
}

export default ViewStudentData
