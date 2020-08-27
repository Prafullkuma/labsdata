import React, { useState } from 'react'
import './addstudent.css'
import { Card, CardContent, Typography } from '@material-ui/core'


function Addstudent() {
    const [selectedOption, setSelectedOption] = useState('active')
    const [checked, setChecked] = useState(false)
    const radioHandler = (e) => {

        setSelectedOption({
            selectedOption: e.target.value
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


                            <FormControl component="fieldset">
                                <FormLabel component="legend">Status</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="active" control={<Radio />} label="active" />
                                    <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </FormControl>

                            {/* <label>
                                <input type="radio"
                                    name="status"
                                    value="active"
                                    checked={checked}
                                    onChange={radioHandler} />
                           Active
                            </label>

                            <label>
                                <input type="radio"
                                    name="status"
                                    value="inactive"

                                    checked={selectedOption === 'inactive'}
                                    onChange={radioHandler} />
                               Inactive
                            </label> */}
                            <button type="submit"> SAve</button>
                        </form>
                    </Typography>
                </CardContent>
            </Card>

        </div >
    )
}

export default Addstudent







