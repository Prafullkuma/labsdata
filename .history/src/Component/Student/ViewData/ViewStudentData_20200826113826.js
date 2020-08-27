import React, { useState } from 'react'
import './ViewData.css'
import { makeStyles } from '@material-ui/core/styles'
import { db } from '../../../firebase'
import { Modal } from '@material-ui/core'
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

    const editHandler = (e) => {
        e.preventDefault()
        setOpen(true)
    }
    const updateAddStudent = (e) => {
        e.preventDefault();
        // //upadate the text from input text field
        // db.collection('todos').doc(props.text.id).set({
        //     text: input
        // }, { merge: true })
        setOpen(false)
    }
    return (
        <div className="all_Data">
            <Modal open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    {/* <input value={input} placeholder={props.text.todo}
                        onChange={event => setInput(event.target.value)} /> */}
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
