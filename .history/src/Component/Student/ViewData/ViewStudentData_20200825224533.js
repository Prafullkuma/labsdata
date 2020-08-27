import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


function ViewStudentData({ id, allData }) {
    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">School</TableCell>
                            <TableCell align="right">Class</TableCell>
                            <TableCell align="right">Division</TableCell>
                            <TableCell align="right">Student Status</TableCell>
                            <TableCell align="right">Do you Want..?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allData.map((row) => (
                            <TableRow key={id}>
                                <TableCell component="th" scope="row">
                                    {allData.name}
                                </TableCell>
                                <TableCell align="right">{allData.date}</TableCell>
                                <TableCell align="right">{allData.schoolname}</TableCell>
                                <TableCell align="right">{allData.class}</TableCell>
                                <TableCell align="right">{allData.division}</TableCell>
                                <TableCell align="right">{allData.status}</TableCell>
                                <TableCell align="right"><Link to="/Edit/{}">Edit</Link>
                                    <Link to="/delete">Delete</Link>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default ViewStudentData



