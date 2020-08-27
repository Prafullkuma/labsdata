import React, { useState, useEffect } from 'react'
import './viewstudent.css'
import { db } from '../../firebase'
function ViewStudent() {
    useEffect(() => {
        db.collection('addStudent').onSnapshot(snapshot => {
            snapshot.docs.map(doc => { console.log(doc) })
        })
    }, [])
    return (
        <div>
            <h1>View student</h1>
        </div>
    )
}

export default ViewStudent
