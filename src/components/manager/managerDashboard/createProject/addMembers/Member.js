import React, {useContext, useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import ManagerContext from '../../../../../context/manager/ManagerContext'
import './addMember.css'

function Member({data}) {
    const managerContext = useContext(ManagerContext)
    const {
        handleAssignedMember,
        organizationMembers
    } = managerContext;
    
    useEffect(() => {
        // console.log('render - member comp')
    }, [organizationMembers.isAssigned])

    const [checked, setChecked] = useState(data.isAssigned);
    const handleChange = (e) => {
        setChecked(e.target.checked);
        handleAssignedMember(data)
    }
    
    return (
        <Paper variant='contained' elevation='1' className='member-paper'>
            <div className='flex'>
                <div className='flex-grow1'>
                    <Typography variant='body1'>
                        {`${data.firstName} ${data.lastName}`}
                    </Typography>
                    <Typography variant='body2'>
                        {data.designation}
                    </Typography>
                </div>
                <Checkbox
                    checked={checked}
                    onChange={(e)=>{handleChange(e)}}
                    inputProps={{ 'aria-label': 'primary-checkbox' }}
                />
            </div>
        </Paper>
    )
}

export default Member
