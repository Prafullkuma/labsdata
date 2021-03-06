import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function ViewStudentData({ id, allData }) {
    const [counter, setCounter] = useState('1')
    return (
        <div>
            <table>
                <tr>
                    <td>{counter+2}</td>
                    <td>{allData.name}</td>
                    <td>{allData.date}</td>
                    <td>{allData.school}</td>
                    <td>{allData.class}</td>
                    <td>{allData.division}</td>
                    <td>{allData.status}</td>
                    <td><Link to="/admin/edit/">Edit</Link></td>
                    <td><Link to="/admin/edit/">Edit</Link></td>
                </tr>
            </table>
        </div>
    )
}

export default ViewStudentData
