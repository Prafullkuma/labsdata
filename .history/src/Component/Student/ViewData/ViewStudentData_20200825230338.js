import React, { useState } from 'react'

function ViewStudentData({ id, allData }) {
    const { counter, setCounter } = useState(1)
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>School</th>
                    <th>class</th>
                    <th>Division</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>{counter}</td>
                    <td>name</td>
                    <td>date</td>
                    <td>school</td>
                    <td>Division</td>
                    <td>Active</td>
                </tr>
            </table>
        </div>
    )
}

export default ViewStudentData
