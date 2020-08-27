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
    const [date, setDate] = useState('')
    const [Sname, setSname] = useState('')
    const [classs, setClasss] = useState('')
    const [division, setDivision] = useState('')
    const [value, setValue] = useState('active');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const saveDataHanlder = (e) => {
        e.preventDefault()
        db.collection('addStudent').add({
            name: name,
            date: date,
            schoolname: Sname,
            class: classs,
            division: division,
            status: value
        })
    }
    return (
        <div>
            <Card className="all_data">
                <CardContent>
                    <Typography className="userdata">
                        <form onSubmit={saveDataHanlder}>
                            <div>
                                <label> Enter Full Name</label>
                                <input type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Enter Full Name" />

                            </div>

                            <label> Enter Date Of Birth</label>
                            <input type="date" value={date}
                                onChange={e => setDate(e.target.value)}
                                className="'date enchiladac" />

                            <label>Select School Name</label>
                            <select value={Sname} onChange={e => setSname(e.target.value)}>
                                <option value="S.D.HighScholl">S.D High school</option>
                                <option value="VTU Belgaum">VTU Belgaum</option>
                                <option value="VTU Bangalore">VTU Bangalore</option>
                                <option value="MAratha Mandal">Maratha Mandal</option>
                                <option value="RLS Belgaum">RLS Belgaum</option>
                            </select>
                            <label>Select Class</label>
                            <select value={classs} onChange={e => setClasss(e.target.value)}>
                                <option value="1">1st</option>
                                <option value="2">2nd </option>
                                <option value="3">3rd</option>
                                <option value="4">4th </option>
                                <option value="5">5th</option>
                                <option value="6">6th </option>
                                <option value="7">7th </option>
                            </select>
                            <label>Select Division</label>
                            <select value={division} onChange={e => setDivision(e.target.value)}>
                                <option value="div A">Division A</option>
                                <option value="div B">Division B</option>
                                <option value="div c">Division C</option>
                                <option value="div d">Division D</option>
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







