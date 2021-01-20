import { useContext } from 'react';
import Modal from '../../../ui/modal/ModalWindow';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Button,
    Typography,
} from '@material-ui/core';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Alert from '@material-ui/lab/Alert';
import ManagerContext from '../../../../context/manager/ManagerContext'
// import AlertContext from '../../../context/alerts/AlertContext';

const useStyles = makeStyles((theme) => ({
    alert: {
        width: '100%',
        padding: '1rem',

        // margin: theme.spacing(2),
        fontSize: '18px',
        letterSpacing: '1px',
        fontWeight: '500',
        justifyContent: 'center'
    }
}));

const DeleteProject = ({projectKey}) => {
    
    const managerContext = useContext(ManagerContext);
    const {
        closeDeleteProjectModalHandler,
        deleteProject,
    } = managerContext;

    const classes = useStyles();

    return (
        <Modal show={true} clicked={closeDeleteProjectModalHandler}>
            <Alert
                className={classes.alert}
                variant="outlined"
                severity="warning"
                style={{ backgroundColor: '#fff4e5'}}
            >
                Are you sure! Do you want to delete this project?
                <Typography variant='subtitle2'>
                    This project will remove permanently.
                </Typography> 
                <div
                    style={{
                        marginTop: '15px',
                        display: 'flex',
                    }}
                >
                    <p
                        style={{
                            flexGrow: '1'
                        }}
                    >
                    </p> 
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={() => {
                            closeDeleteProjectModalHandler();
                            deleteProject(projectKey);
                        }}
                        startIcon={<CheckCircleOutlineOutlinedIcon />}
                    >
                        Yes
                    </Button>
                    <span style={{ width: '10px' }}></span>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        onClick={closeDeleteProjectModalHandler}
                        startIcon={<NotInterestedIcon />}
                    >
                        No         
                    </Button>
                </div>
            </Alert>
        </Modal>
    );
};

export default DeleteProject;