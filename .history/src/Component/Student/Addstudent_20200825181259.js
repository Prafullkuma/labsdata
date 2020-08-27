import React, { useState } from 'react'
import './addstudent.css'
import { Card, CardContent, Typography } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { db } from '../../firebase'
function Addstudent() {
    const [name, setName] = useState('')
    const [Sname, setSname] = useState('')
    const [classs, setClasss] = useState('')
    const [division, setDivision] = useState('')
    const [value, setValue] = useState('active');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const saveDataHanlder = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <form onSubmit={saveDataHanlder}>
                            <input type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
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
                            <button type="submit"> SAve</button>
                        </form>
                    </Typography>
                </CardContent>
            </Card>

        </div >
    )
}

export default Addstudent







