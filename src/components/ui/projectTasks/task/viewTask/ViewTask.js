import React, { useContext } from 'react';
import Modal from '../../../modal/ModalWindow';
import UserContext from '../../../../../context/user/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Button,
    TextField,
    Paper
} from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



function ViewTask() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    const userContext = useContext(UserContext)
    const {
        showViewTaskModal,
        closeViewTaskModalHandler
    } = userContext

    return (
        <Modal show={true} clicked={closeViewTaskModalHandler}>
            <div className={classes.root}>
                <Typography variant='h6' component='h2'>
                    Title
                </Typography>
                <Typography variant='p' component='p' align='justify'>
                    loremsjdbsdjkbvsdjkbvsdjkbvsdjkvb sdjbvjksd jhsd vjhs vjhsd vsjhd vjhvsjhdbvsdjhbv
                </Typography>
                <Typography variant='subtitle2'>
                    Developer Deadline: 10-03-2020
                </Typography>
                <Typography variant='subtitle2'>
                    Tester Deadline: 10-03-2020
                </Typography>
                <div style={{
                    maxHeight: '31vh',
                    overflow: 'auto'
                }}>
                    <Paper
                        variant='outlined'
                        style={{
                            width: '90%',
                            margin: '5px auto',
                            backgroundColor: '#F5F5F5'
                        }}>
                        <p
                            style={{
                                width: '90%',
                                margin: '0 auto',
                                padding: '10px'
                            }}
                        >
                            some text here
                        </p>
                    </Paper>
                </div>
                <div className='developerClass'>
                    <div style={{ display: 'flex' }}>
                        <span style={{ flexGrow: 1 }}></span>
                        <div>

                            <Button
                                variant='contained'
                                color='primary'
                                size='small'
                                startIcon={<CheckCircleIcon />}
                                style={{ marginLeft: '10px' }}
                            >
                                Coded
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='testerClass'>
                    <TextField
                        margin='normal'
                        multiline={true}
                        rows='3'
                        fullWidth={true}
                        // value={desc}
                        placeholder="Enter Bug Details"
                        // onChange={changeDesc}
                        id="outlined-basic"
                        label="Report Bug"
                        variant="outlined"
                        autoComplete='off'
                    />
                    <div style={{ display: 'flex' }}>
                        <span style={{ flexGrow: 1 }}></span>
                        <div>
                            <Button
                                variant='contained'
                                color='secondary'
                                size='small'
                                startIcon={<ReportProblemIcon />}
                            >
                                Report
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                size='small'
                                startIcon={<CheckCircleIcon />}
                                style={{ marginLeft: '10px' }}
                            >
                                Tested
                          </Button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: '98%',
                        margin: '20px auto'
                    }}
                >
                    <Button
                        fullWidth={true}
                        variant='outlined'
                        color='primary'
                        onClick={closeViewTaskModalHandler}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default ViewTask;
