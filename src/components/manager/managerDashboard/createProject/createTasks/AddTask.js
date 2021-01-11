import React, { useContext, useState } from 'react';
import {
    Typography,
    TextField,
    ButtonGroup,
    Button,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core';
import Modal from '../../../../ui/modal/ModalWindow';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ManagerContext from '../../../../../context/manager/ManagerContext';
import AuthContext from '../../../../../context/auth/AuthContext';
import AlertContext from '../../../../../context/alerts/AlertContext';

function AddTask() {
    const managerContext = useContext(ManagerContext);
    const {
        closeTaskModalHandler,
        selectedMembers,
        createTask,
        projectDeadline,
        editTask
    } = managerContext;

    const authContext = useContext(AuthContext);
    const {
        currentDate
    } = authContext;

    const alertContext = useContext(AlertContext);
    const {
        setMessage
    } = alertContext;

    const [titleValid, setTitleValid] = useState(editTask ? true : false);
    const [title, setTitle] = useState(editTask ? editTask.title : '');
    const changeTitle = e => {
        setTitle(e.target.value);
        setTitleValid(validate(/^[a-zA-Z_ ]{1,20}$/g, e.target.value));
    };

    const [descValid, setDescValid] = useState(editTask ? true : false);
    const [desc, setDesc] = useState(editTask ? editTask.desc : '');
    const changeDesc = e => {
        setDesc(e.target.value);
        setDescValid(validate(/^[a-zA-Z0-9 ]*$/g, e.target.value));
    };

    const [developer, setDeveloper] = useState(editTask ? editTask.members.developer : null);
    const selectDeveloper = (e) => setDeveloper(e.target.value);

    const [tester, setTester] = useState(editTask ? editTask.members.tester : null);
    const selectTester = (e) => setTester(e.target.value);

    const [devDeadlineValid, setDevDeadlineValid] = useState(false);
    const [developerDeadline, setDeveloperDeadline] = useState(editTask ? editTask.members.developer.deadline : currentDate());
    const setDeveloperDate = e => {
        setDeveloperDeadline(e.target.value);
        setTesterDeadline(e.target.value);
        setDevDeadlineValid(e.target.value === currentDate());
    };

    const [testerDeadlineValid, setTesterDeadlineValid] = useState(false);
    const [testerDeadline, setTesterDeadline] = useState(editTask ? editTask.members.tester.deadline : currentDate());
    const setTesterDate = e => {
        setTesterDeadline(e.target.value);
        setTesterDeadlineValid(e.target.value === developerDeadline);
    };

    const validate = (pattern, field) => {
        let regex = new RegExp(pattern);
        if (regex.test(field)) {
            return true;
        } else {
            return false;
        }
    };

    const addTask = () => {
        let devDate, testerDate;
        devDate = developerDeadline === currentDate();
        testerDate = testerDeadline === developerDeadline;

        // console.log(devDate, testerDate)

        if (title && desc && developer && tester && !devDate && !testerDate) {

            let taskData = {
                title,
                desc,
                developer,
                tester,
                developerDeadline,
                testerDeadline
            };

            createTask(taskData);

            setTitle('');
            setDesc('');
            setDeveloper(null);
            setTester(null);
            setDeveloperDeadline(currentDate);
            setTesterDeadline(currentDate);
            closeTaskModalHandler();
        } else {
            if (devDate) {
                setDevDeadlineValid(true);
            }
            if (testerDate) {
                setTesterDeadlineValid(true);
            }
            if (developer === null && tester === null && (title !== '' && desc !== '')) {
                setMessage('assign Developer & Tester', 'error');
            } else {
                setMessage('Please enter all fields', 'error');
            }
        }
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
                {editTask ? 'Update Task' : 'Add Task'}
            </Typography>
            <div>
                <form noValidate>
                    <TextField
                        margin='normal'
                        fullWidth={true}
                        value={title}
                        placeholder="Enter Task Title"
                        onChange={changeTitle}
                        error={!titleValid && title !== ''}
                        helperText={!titleValid && title !== '' ? 'Numbers / special characters are not allowed and max characters should be 20' : null}
                        label="Task Title"
                        variant="outlined"
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
                        error={!descValid && desc !== '' && !editTask}
                        helperText={!descValid && desc !== '' && !editTask ? 'Special characters are not allowed' : null}
                        label="Task Description"
                        variant="outlined"
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
                                        return (`${developer.firstName} ${developer.lastName}`);
                                    }
                                }
                            }
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled >
                                <em> Select Developer </em>
                            </MenuItem>
                            {selectedMembers ? selectedMembers.map((member) => {
                                return (
                                    member.designation === 'Developer' ?
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
                        error={developerDeadline < currentDate() || developerDeadline > projectDeadline || devDeadlineValid}
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
                                        return (`${tester.firstName} ${tester.lastName}`);
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
                                    member.designation === 'Tester' ?
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
                        error={testerDeadline < developerDeadline || testerDeadline >= projectDeadline || testerDeadlineValid}
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
                            startIcon={editTask ? <EditIcon/> : <AddIcon/>}
                        >
                            {editTask ? 'Update' : 'Add'}
                        </Button>
                        <Button
                            color='secondary'
                            onClick={cancleTask}
                            startIcon={<CloseIcon/>}
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