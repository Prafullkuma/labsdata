import React, { useState } from 'react'

function ViewStudentData({ id, allData }) {
    const { counter, setCounter } = useState('1')
    return (
        <div>
            <table>
                {/*             
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>School</th>
                    <th>class</th>
                    <th>Division</th>
                    <th>Status</th>
                </tr>  */}
                <tr>
                    <td>{counter}</td>
                    <td>{allData.name}</td>
                    <td>{allData.date}</td>
                    <td>{allData.school}</td>
                    <td>{allData.class}</td>
                    <td>{allData.division}</td>
                    <td>{allData.status}</td>
                    <td>{allData.status}</td>

                </tr>
            </table>
        </div>
    )
}

export default ViewStudentData
