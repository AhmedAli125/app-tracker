import React from 'react'
import loader from '../../../assets/loader.gif'
import {
    makeStyles
} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    modalStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const Loader = () => {
    const classes = useStyles();

    return (
        <Modal
            className={classes.modalStyle}
            open={true}
            // onClose={handleClose}
        >
            <div
                style={ {
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'whitesmoke',    
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                } }
            >
                <img 
                    src={loader} 
                    alt='loading'
                    width="300px" 
                    height="300px"
                 />
            </div>
        </Modal>
    )
}


export default Loader
