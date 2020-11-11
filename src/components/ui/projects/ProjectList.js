import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Project from './project/Project';
import ProjectManagerContext from '../../../context/ProjectManager/ProjectManagerContext';
import './projectList.css';

function ProjectList() {

    const managerContext = useContext(ProjectManagerContext)
    const {projects} = managerContext
    // console.log('list '+ projects)

    return (
        projects && <div>
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