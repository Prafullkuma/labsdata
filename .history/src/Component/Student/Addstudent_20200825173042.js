import React, { useState } from 'react'
import './addstudent.css'
import { Card, CardContent, Typography } from '@material-ui/core'


function Addstudent() {
    const [selectedOption, setSelectedOption] = useState('')

    const radioHandler = (e) => {
        const data = e.target.value
        setSelectedOption({
            selectedOption: data
        })
        console.log(selectedOption)
    }
    return (
        <div>

            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <form >
                            <input type="text"
                                placeholder="Enter Full Name" />
                            <input type="date" className="'date enchiladac" />
                            <select value="" onChange="">
                                <option value="school1">School Name</option>
                                <option value="school1">School Name</option>
                                <option value="school1">School Name</option>
                            </select>
                            <select value="" onChange="">
                                <option value="class A">class A</option>
                                <option value="class A">class b</option>
                                <option value="class A">class c</option>
                            </select>
                            <select value="" onChange="">
                                <option value="Dvision 1">Dvision 1</option>
                                <option value="Dvision 1">Dvision 1</option>
                                <option value="Dvision 1">Dvision 1</option>
                            </select>

                            <label>
                                <input type="radio"
                                    name="do"
                                    value="active"
                                    onChange={radioHandler}
                                    checked={selectedOption === "active"} />
                           Active
                            </label>

                            <label>
                                <input type="radio"
                                    name="do"
                                    value="inactive"
                                    onChange={radioHandler}
                                    checked={selectedOption === "inactive"} />
                               Inactive
                            </label>
                            <button type="submit"> SAve</button>
                        </form>
                    </Typography>
                </CardContent>
            </Card>

        </div >
    )
}

export default Addstudent







