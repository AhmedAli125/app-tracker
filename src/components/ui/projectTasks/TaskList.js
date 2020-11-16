import React from 'react';
import Grid from '@material-ui/core/Grid';
import Task from './task/Task.js';
// import './projectList.css';

function TaskList() {
    return (
        true &&
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
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
                <Grid item sm-12 md-4 lg-3 xl-2>
                    <Task creating={true} buttonClicked={()=>{alert('rippleEffect')}}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default TaskList;