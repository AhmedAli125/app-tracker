import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import './addProject.css'

function Member({member, designation}) {
    
    const [checked, setChecked] = useState(false);
    const handleChange = e => setChecked(e.target.checked);

    console.log(checked);
    return (
        <Paper variant='contained' elevation='1' className='member-paper'>
            <div className='flex'>
                <div className='flex-grow1'>
                    <Typography variant='body1'>
                        {member}
                    </Typography>
                    <Typography variant='body2'>
                        {designation}
                    </Typography>
                </div>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{'aria-label' : 'primary-checkbox'}}
                />
            </div>
            
        </Paper>
    )
}

export default Member
