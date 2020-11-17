import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import ProjectManagerContext from '../../../../context/ProjectManager/ProjectManagerContext'
// import clsx from 'clsx';

function AddButton({ clicked }) {
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
    // showAddButton sirf manager k login hony k bad manager ko show hoga
    // showAddButton && 
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={clicked}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default AddButton;
