import React, { useState, useEffect } from 'react'
import './viewstudent.css'
import { db } from '../../firebase'
import ViewStudentData from './ViewData/ViewStudentData'
function ViewStudent() {
    const [allData, setallData] = useState([])

    useEffect(() => {
        db.collection('addStudent').onSnapshot(snapshot => {
            setallData(snapshot.docs.map(doc => ({ id: doc.id, allData: doc.data() })))
        })
    }, [])
    return (
        <div>
            {/* {console.log(allData.map(id => console.log(id.id)))}
             {console.log(allData.map(id => console.log(id.allData.name)))} */}
            {allData.map(data => (
                <ViewStudentData id={data.id} allData={data.allData} />
            ))}
        </div >
    )
}

export default ViewStudent
