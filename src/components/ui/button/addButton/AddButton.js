import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import clsx from 'clsx';

function AddButton({ showAddButton, createWindow }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  }));

  const classes = useStyles();

  return (
    showAddButton && <div className={classes.root}>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={createWindow}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default AddButton;
