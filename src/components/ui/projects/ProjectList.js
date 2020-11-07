import React from 'react'
import Grid from '@material-ui/core/Grid'
import Project from './project/Project'
import './projectList.css'

function ProjectList({projectList}) {
    return (
        projectList && <div> {/* yahan se project-list ki class hatayi hai */}
            <Grid container justify='center'>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
                <Grid item sm-12 md-4 lg-6 xl-6>
                    <Project />
                </Grid>
            </Grid>
            {/* <Project />
            <Project />
            <Project />
            <Project />
            <Project /> */}
        </div>
    )
}

export default ProjectList