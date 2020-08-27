import React, { useState, useEffect } from 'react'
import './viewstudent.css'
import { db } from '../../firebase'
import { id } from 'date-fns/locale'
function ViewStudent() {
    const [allData, setallData] = useState([])

    useEffect(() => {
        db.collection('addStudent').onSnapshot(snapshot => {
            setallData(snapshot.docs.map(doc => ({ id: id., allData: doc.data() })))
        })
    }, [])
    return (
        <div>

            {console.log(allData)}
            <h1>View student</h1>
        </div >
    )
}

export default ViewStudent
