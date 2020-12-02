import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Project from './project/Project';
import ManagerContext from '../../../context/manager/ManagerContext';
import './projectList.css';
import AddButton from '../button/addButton/AddButton';

function ProjectList() {

    return (
        <div>
            <Grid
                style={{
                    width: '100%'
                }}
                container
                justify='center'
                spacing='2'
            >
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Project />
                </Grid>
            </Grid>
        </div>
    );
}

export default ProjectList;