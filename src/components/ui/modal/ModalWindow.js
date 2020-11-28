import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function ModalWindow(props) {
    const { clicked, show } = props;
    const useStyles = makeStyles((theme) => ({
        modalStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        paper: {
            position: 'absolute',
            // minWidth: 300,
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(show);

    const handleClose = () => {
        setOpen(false);
        clicked();
    };

    return (
        <Modal
            className={classes.modalStyle}
            open={open}
            onClose={handleClose}
        >
            <div className={classes.paper} >
                {props.children}
            </div>
        </Modal>
    );
}

export default ModalWindow;
