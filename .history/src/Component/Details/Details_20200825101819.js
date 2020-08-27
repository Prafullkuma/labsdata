import React from 'react'
import './details.css'
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Addstudent from '../Student/Addstudent';
import ViewStudent from '../Student/ViewStudent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other} >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Details() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="items">
            <div className="items_data">
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Add Student" {...a11yProps(0)} />
                        <Tab label="View Student" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
            </div>
            <TabPanel value={value} index={0}>
                Add Student data will be display here
                <Addstudent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                View Student Data will be Diplay here
                <ViewStudent />
            </TabPanel>
        </div>
    )
}


export default Details
