import React, { useState } from 'react'
import './ViewData.css'
import { makeStyles } from '@material-ui/core/styles'
import { db } from '../../../firebase'
import { Modal, CardContent, Card, Typography, FormControl, FormControlLabel, Radio, FormLabel, RadioGroup } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function ViewStudentData({ id, allData }) {

    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [Sname, setSname] = useState('')
    const [classs, setClasss] = useState('')
    const [division, setDivision] = useState('')
    const [value, setValue] = useState('active');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const editHandler = (e) => {
        e.preventDefault()
        setOpen(true)
    }
    const updateAddStudent = (e) => {
        e.preventDefault();
        // //upadate the text from input text field
        db.collection('addStudent').doc(id).set({
            name: name,
            date: date,
            schoolname: Sname,
            class: classs,
            division: division,
            status: value
        }, { merge: true })
        setOpen(false)
    }
    return (
        <div className="all_Data">
            <Modal open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    {/* <input value={input} placeholder={props.text.todo}
                        onChange={event => setInput(event.target.value)} /> */}


                    <Card className="all_data">
                        <CardContent>
                            <Typography className="userdata">
                                <form>
                                    <div className="Data_use">
                                        <label> Enter Full Name</label>
                                        <input type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            placeholder={allData.name} />

                                    </div>
                                    <div className="Data_use">
                                        <label> Enter Date Of Birth</label>
                                        <input type="date" value={date}
                                            onChange={e => setDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="Data_use">
                                        <label>Select School Name</label>
                                        <select value={Sname} onChange={e => setSname(e.target.value)}>
                                            <option value="S.D.HighScholl">S.D High school</option>
                                            <option value="VTU Belgaum">VTU Belgaum</option>
                                            <option value="VTU Bangalore">VTU Bangalore</option>
                                            <option value="MAratha Mandal">Maratha Mandal</option>
                                            <option value="RLS Belgaum">RLS Belgaum</option>
                                        </select>
                                    </div>

                                    <div className="Data_use">

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
                                    </div>
                                    <div className="Data_use">
                                        <label>Select Division</label>
                                        <select value={division} onChange={e => setDivision(e.target.value)}>
                                            <option value="div A">Division A</option>
                                            <option value="div B">Division B</option>
                                            <option value="div c">Division C</option>
                                            <option value="div d">Division D</option>
                                        </select>

                                    </div>
                                    <div className="Data_use1">
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Status</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                <FormControlLabel value="active" control={<Radio />} label="active" />
                                                <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </form>
                            </Typography>
                        </CardContent>
                    </Card>
                    <button onClick={updateAddStudent}>Update now</button>
                </div>
            </Modal>

            <table border="1">
                <tr>
                    <td>{allData.name}</td>
                    <td>{allData.date}</td>
                    <td>{allData.school}</td>
                    <td>{allData.class}</td>
                    <td>{allData.division}</td>
                    <td>{allData.status}</td>
                    <td><button onClick={editHandler}>Edit</button></td>
                    <td><button onClick={event => db.collection('addStudent').doc(id).delete()}>Delete</button></td>
                </tr>
            </table>
        </div >
    )
}

export default ViewStudentData
