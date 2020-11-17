import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';

function FilterButton({clicked}) {
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    return (
        <IconButton onClick={clicked} aria-label="filter"
            // color='primary'
            className={classes.margin}>
            <FilterListIcon />
        </IconButton>
    )
}

export default FilterButton
