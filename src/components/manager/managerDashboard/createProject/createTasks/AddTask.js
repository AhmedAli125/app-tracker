import React, { useContext, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Modal from '../../../../ui/modal/ModalWindow';
import ManagerContext from '../../../../../context/manager/ManagerContext';
import AuthContext from '../../../../../context/auth/AuthContext';

function AddTask() {
    const managerContext = useContext(ManagerContext);
    const {
        closeTaskModalHandler,
        selectedMembers,
        createTask
    } = managerContext;

    const authContext = useContext(AuthContext);
    const {
        currentDate
    } = authContext;

    useEffect(() => {
        console.log('add tasks')
    }, []);

    const [title, setTitle] = useState('');
    const changeTitle = e => setTitle(e.target.value);

    const [desc, setDesc] = useState('');
    const changeDesc = e => setDesc(e.target.value);

    const [developer, setDeveloper] = useState(null);
    const selectDeveloper = (e) => setDeveloper(e.target.value);

    const [tester, setTester] = useState(null);
    const selectTester = (e) => setTester(e.target.value);

    const [developerDeadline, setDeveloperDeadline] = useState(currentDate);
    const setDeveloperDate = e => setDeveloperDeadline(e.target.value);

    const [testerDeadline, setTesterDeadline] = useState(currentDate);
    const setTesterDate = e => setTesterDeadline(e.target.value);

    let taskData = {
        title,
        desc,
        developer,
        tester,
        developerDeadline,
        testerDeadline
    }

    const addTask = () => {
        createTask(taskData)
        setTitle('')
        setDesc('')
        setDeveloper(null)
        setTester(null)
        setDeveloperDeadline(currentDate)
        setTesterDeadline(currentDate)
        closeTaskModalHandler()
    }

    return (
        <Modal show={true} clicked={closeTaskModalHandler}>
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
                        autoComplete='off'
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
                        autoComplete='off'
                        />

                    <FormControl
                        margin='normal'
                        fullWidth={true}
                        variant='outlined'>
                        <Select
                            value={developer}
                            onChange={selectDeveloper}
                            // displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                                Select Developer
                            </MenuItem>
                            {selectedMembers ? selectedMembers.map((member) => {
                                return (
                                    member.designation === 'developer' ?
                                    <MenuItem
                                    value={member}
                                    key={member.key}
                                    >
                                            {`${member.firstName} ${member.lastName} `}
                                        </MenuItem> : null
                                );
                            }) : null}
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
                        } }
                        InputProps = {
                            {
                                inputProps: {
                                    min: currentDate()
                                }
                            }
                        }
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
                            {selectedMembers ? selectedMembers.map((member) => {
                                return (
                                    member.designation === 'tester' ?
                                        <MenuItem
                                            value={member}
                                            key={member.key}
                                        >
                                            {`${member.firstName} ${member.lastName} `}
                                        </MenuItem> : null
                                );
                            }) : null}
                        </Select>
                    </FormControl>

                    <TextField
                        id="date"
                        margin='normal'
                        label="Tester's Deadline"
                        type="date"
                        fullWidth={true}
                        variant='outlined'
                        defaultValue={testerDeadline}
                        onChange={setTesterDate}
                        InputLabelProps={{
                            shrink: true,
                        } }
                        InputProps = {
                            {
                                inputProps: {
                                    min: currentDate()
                                }
                            }
                        }
                    />

                    <ButtonGroup
                        style={{ marginTop: '10px' }}
                        variant='contained'
                        fullWidth={true}>
                        <Button
                            color='primary'
                            onClick={addTask}
                        >
                            Add
                        </Button>
                        <Button 
                            color='secondary' 
                            onClick={closeTaskModalHandler}
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </form>
            </div>
        </Modal>
    );
}

export default AddTask;