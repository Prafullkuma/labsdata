import React from 'react'
import './addstudent.css'
import { Card, CardContent, Typography } from '@material-ui/core'


function Addstudent() {
    const [selectedOption, setSelectedOption] = useState('')
    const handleOptionChange = (e) => {
        setSelectedOption({
            selectedOption: e.target.value
        })
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

                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="active"
                                        checked={selectedOption === "active"}
                                        onChange={handleOptionChange}
                                        className="form-check-input"
                                    />
                                                       Active
                               </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="Inactive"
                                        checked={selectedOption === "Inactive"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                                       InActive
                               </label>
                            </div>

                            <input
                                type="radio" id="Googl"
                            />
                        </form>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default Addstudent







