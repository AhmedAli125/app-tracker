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
        checkTaskAssigned,
    } = managerContext;
    
    useEffect(() => {
   
    }, [data.isAssigned, data.error])

    // console.log(data)
    const [checked, setChecked] = useState(data.isAssigned);
    const handleChange = (e) => {

        // console.log(checkTaskAssigned(data))
        
        // if (e.target.checked === false) {
        if (checkTaskAssigned(data)) {
            // checkTaskAssigned(data)
            // console.log(organizationMembers)
            // console.log(data.error)
            if (data.error) {
                // console.log(data.error)

                // setChecked(e.target.checked);
                // handleAssignedMember(data)
            } else {
                setChecked(e.target.checked);
                // handleAssignedMember(data)
            }
        } else {
            setChecked(e.target.checked);
            handleAssignedMember(data)
        }
        // console.log(organizationMembers)

    }

    if (checked !== data.isAssigned) {
        setChecked(data.isAssigned);
    }
    
    return (
        <Paper variant='contained' elevation='1' className='member-paper'>
            <div className='flex'>
                <div className='flex-grow1'>
                    <Typography variant='body1'>
                        {`${data.firstName} ${data.lastName}`}
                    </Typography>
                    <div
                        style={{display: 'flex', flexDirection:'row'}}
                    >
                        <div style={{width:'120px'}}>
                            <Typography variant='body2' >
                                { data.designation }
                            </Typography>
                        </div>
                        {
                          (data.error) &&           
                            <span style={{ color: '#fa0057' }}>
                                Already assigned
                            </span>
                        }
                    </div>
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
