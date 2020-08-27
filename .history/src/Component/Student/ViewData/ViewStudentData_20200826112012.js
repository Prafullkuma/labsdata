import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ViewData.css'
function ViewStudentData({ id, allData }) {
    const [counter, setCounter] = useState('1')
    return (
        <div className="all_Data">
            <table>
                <tr>
                    <td>{counter + 2}</td>
                    <td>{allData.name}</td>
                    <td>{allData.date}</td>
                    <td>{allData.school}</td>
                    <td>{allData.class}</td>
                    <td>{allData.division}</td>
                    <td>{allData.status}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
            </table>
        </div >
    )
}

export default ViewStudentData
