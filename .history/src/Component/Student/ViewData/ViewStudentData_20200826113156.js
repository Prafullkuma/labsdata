import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ViewData.css'
import { db } from '../../../firebase'
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
