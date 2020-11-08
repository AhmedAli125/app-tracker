import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Project from './project/Project'
import './projectList.css'

function ProjectList({projectList}) {
    return (
        projectList && <div> {/* yahan se project-list ki class hatayi hai */}
            <Grid
                container 
                justify='center' 
                spacing='2'
                // wrap='wrap'
                // alignItems='center'
                // alignContent='center'
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
            {/* <Project />
            <Project />
            <Project />
            <Project />
            <Project /> */}
        </div>
    )
}

export default ProjectList