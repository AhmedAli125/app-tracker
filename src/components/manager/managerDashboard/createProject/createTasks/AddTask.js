import React, { useContext, useState } from 'react';
import {
    Typography
} from '@material-ui/core';
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
        createTask,
        projectDeadline,
        // editTaskFlag,
        editTask
    } = managerContext;

    const authContext = useContext(AuthContext);
    const {
        currentDate
    } = authContext;

    const [title, setTitle] = useState(editTask ? editTask.title : null);
    const changeTitle = e => setTitle(e.target.value);

    const [desc, setDesc] = useState(editTask ? editTask.desc : null);
    const changeDesc = e => setDesc(e.target.value);

    const [developer, setDeveloper] = useState(editTask ? editTask.members.developer : null);
    const selectDeveloper = (e) => setDeveloper(e.target.value);

    const [tester, setTester] = useState(editTask ? editTask.members.tester : null);
    const selectTester = (e) => setTester(e.target.value);

    
    const [developerDeadline, setDeveloperDeadline] = useState(editTask ? editTask.members.developer.deadline : currentDate());
    const setDeveloperDate = e => {
        setDeveloperDeadline(e.target.value);
        setTesterDeadline(e.target.value);
    };
    const [testerDeadline, setTesterDeadline] = useState(editTask ? editTask.members.tester.deadline : currentDate());
    const setTesterDate = e => setTesterDeadline(e.target.value);

    let taskData = {
        title,
        desc,
        developer,
        tester,
        developerDeadline,
        testerDeadline
    };

    const addTask = () => {
        createTask(taskData);
        setTitle('');
        setDesc('');
        setDeveloper(null);
        setTester(null);
        setDeveloperDeadline(currentDate);
        setTesterDeadline(currentDate);
        closeTaskModalHandler();
    };
    
    const cancleTask = () => {
        setTitle('');
        setDesc('');
        setDeveloper(null);
        setTester(null);
        setDeveloperDeadline(currentDate);
        setTesterDeadline(currentDate);
        closeTaskModalHandler();
    };

    return (
        <Modal show={true} clicked={closeTaskModalHandler}>
            <Typography variant='h5' align='left' display='block' >
                {editTask? 'Update Task' : 'Add Task'}
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
                        variant='outlined'
                    >
                        <Select
                            value={developer}
                            onChange={selectDeveloper}
                            displayEmpty
                            renderValue={
                                (developer) => {
                                if (developer === null) {
                                  return <em>Select Developer</em>;
                                } else {
                                    return (`${developer.firstName} ${developer.lastName}`)
                                }
                                }
                            }
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value = "" disabled >
                                <em> Select Developer </em>
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
                        value={developerDeadline}
                        onChange={setDeveloperDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={
                            {
                                inputProps: {
                                    min: currentDate(),
                                    max: projectDeadline
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
                            renderValue={
                                (tester) => {
                                if (tester === null) {
                                  return <em>Select Tester</em>;
                                } else {
                                    return (`${tester.firstName} ${tester.lastName}`)
                                }
                                }
                            }
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
                        value={testerDeadline}
                        onChange={setTesterDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={
                            {
                                inputProps: {
                                    min: developerDeadline,
                                    max: projectDeadline
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
                            {editTask? 'Update' : 'Add'}
                        </Button>
                        <Button
                            color='secondary'
                            onClick={cancleTask}
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