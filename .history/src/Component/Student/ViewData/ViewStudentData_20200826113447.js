import React, { useState } from 'react'
import './ViewData.css'
import { makeStyles } from '@material-ui/core/styles'

import { db } from '../../../firebase'
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
    }
    const updateTodo = (e) => {
        e.preventDefault();
        //upadate the text from input text field
        db.collection('todos').doc(props.text.id).set({
            text: input
        }, { merge: true })
        setOpen(false)
    }
    return (
        <div className="all_Data">
            <Modal open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>i am modal</h1>
                    <input value={input} placeholder={props.text.todo}

                        onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update now</Button>
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
