import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Modal from '../../../../ui/modal/ModalWindow';

function AddTask({ showAddTask, reset }) {

    let currentDate = () => {
        let now = new Date();
        let getMonth = () => {
            let month = now.getMonth() + 1;
            if (month < 10) {
                return "0" + month.toString();
            } else return month.toString();
        };

        let getDate = () => {
            let current = (now.getDate());
            if (current < 10) {
                return current.toString();
                // return current.toString();
            } else return current.toString();

        };
        let getYear = () => {
            let year = (now.getFullYear()).toString();
            if (year < 10) {
                return "0" + year.toString();
            } else return year.toString();
        };
        return getYear() + "-" + getMonth() + "-" + "0" + getDate();
    };

    const [title, setTitle] = useState('');
    const changeTitle = e => setTitle(e.target.value);
    
    const [desc, setDesc] = useState('');
    const changeDesc = e => setDesc(e.target.value);
    
    const [developer, setDeveloper] = useState('');
    const selectDeveloper = (e) => setDeveloper(e.target.value);
    
    const [tester, setTester] = useState('');
    const selectTester = (e) => setTester(e.target.value);
    
    const [developerDeadline, setDeveloperDeadline] = useState(currentDate);
    const setDeveloperDate = e => setDeveloperDeadline(e.target.value);
    
    const [testerDeadline, setTesterDeadline] = useState(currentDate);   
    const setTesterDate = e => setTesterDeadline(e.target.value);

    const developersArray = [
        {
            id: '1',
            name: 'mem1',
            desig: 'desig'
        },
        {
            id: '2',
            name: 'mem2',
            desig: 'desig'
        },
        {
            id: '3',
            name: 'mem3',
            desig: 'desig'
        }
    ];
    const testersArray = [
        {
            id: '1',
            name: 'tester1',
            desig: 'desig'
        },
        {
            id: '2',
            name: 'tester2',
            desig: 'desig'
        },
        {
            id: '3',
            name: 'tester3',
            desig: 'desig'
        }
    ];

    console.log(currentDate)

    return (
        showAddTask && <Modal show={true} clicked={reset}>
            <Typography variant='h5' align='left' display='block' >
                Add Task
            </Typography>
            <div>
                <form noValidate>
                    <TextField
                        margin='normal'
                        fullWidth={true}
                        value={title}
                        placeholder="Enter Task Title"
                        onChange={changeTitle}
                        id="outlined-basic" label="Task Title" variant="outlined"
                    />

                    <TextField
                        margin='normal'
                        multiline={true}
                        rows='4'
                        fullWidth={true}
                        value={desc}
                        placeholder="Enter Task Description"
                        onChange={changeDesc}
                        id="outlined-basic" label="Task Description" variant="outlined"
                    />

                    <FormControl
                        margin='normal'
                        fullWidth={true}
                        variant='outlined'>
                        <Select
                            value={developer}
                            onChange={selectDeveloper}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Select Developer
                            </MenuItem>
                            {developersArray.map((value) => {
                                return <MenuItem
                                    value={value.id}
                                    key={value.id}
                                    >{value.name}
                                </MenuItem>;
                            })}
                        </Select>
                    </FormControl>

                    <TextField
                        id="date"
                        margin='normal'
                        label="Developer's Deadline"
                        type="date"
                        fullWidth={true}
                        variant='outlined'
                        defaultValue={developerDeadline}
                        onChange={setDeveloperDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <FormControl
                        margin='normal'
                        fullWidth={true}
                        variant='outlined'>
                        <Select
                            value={tester}
                            onChange={selectTester}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Select Tester
                            </MenuItem>
                            {testersArray.map((value) => {
                                return <MenuItem
                                value={value.id}
                                key={value.id}
                                >{value.name}
                                </MenuItem>;
                            })}
                        </Select>
                    </FormControl>

                    <TextField
                        id="date"
                        margin='normal'
                        label="Tester's Deadline"
                        type="date"
                        fullWidth={true}
                        variant='outlined'
                        defaultValue={currentDate}
                        onChange={setTesterDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <ButtonGroup
                        style={{ marginTop: '10px' }}
                        variant='contained'
                        fullWidth={true}>
                        <Button color='primary'>Add</Button>
                        <Button color='secondary' onClick={reset}>Cancel</Button>
                    </ButtonGroup>
                </form>
            </div>
        </Modal>
    );
}

export default AddTask;