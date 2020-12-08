import React, { useContext, useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import ManagerContext from '../../../../../context/manager/ManagerContext';
import './addMember.css';

function Member({ data }) {
    const managerContext = useContext(ManagerContext);
    const {
        handleAssignedMember,
        tasks,
        selectedMembers,
        objectToArray
    } = managerContext;

    // let selected = false;

    // useEffect(() => {
    //     console.log('useEffect run')
    //     if (selectedMembers) {
    //         for (let member = 0; member < selectedMembers.length; member++) {
    //             if (selectedMembers[member].key === data.key) {
    //                 selected = true;
    //             }
    //         }
    //     }

    // })

    // console.log('condition')
    // console.log(test)

    // const [checked, setChecked] = useState(selectedMembers ? false : selected);

    const [error, setError] = useState(data.error);

    const [checked, setChecked] = useState(data.isAssigned);
    const handleChange = (e) => {
        if (checkTaskAssigned(data)) {
            setError(true)
        } else {
        setChecked(e.target.checked);
            handleAssignedMember(data);
            setError(false)
        }
    };



    if (checked !== data.isAssigned) {
        setChecked(data.isAssigned);
    }

    const checkTaskAssigned = (data) => {
        let taskArray = objectToArray(tasks);
        let memberFound = false;
        let taskFound = false

        if (selectedMembers) {
            for (let memberIndex = 0; memberIndex < selectedMembers.length; memberIndex++) {
                if (selectedMembers[memberIndex].key === data.key) {
                    memberFound = true;
                    break;
                }
            }
            if (memberFound && taskArray !== null) {
                for (let task = 0; task < taskArray.length; task++) {
                    if (taskArray[task].members[data.designation].key === data.key) {
                        taskFound = true;
                        break;
                    }
                }
            }
        }
        return taskFound
    };

    return (
        <Paper variant='contained' elevation='1' className='member-paper'>
            <div className='flex'>
                <div className='flex-grow1'>
                    <Typography variant='body1'>
                        {`${data.firstName} ${data.lastName}`}
                    </Typography>
                    <div
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <div style={{ width: '80px' }}>
                            <Typography variant='body2' >
                                {data.designation}
                            </Typography>
                        </div>
                        {
                            error &&
                            <span style={{ color: '#fa0057' }}>
                                Task already assigned
                            </span>
                        }
                    </div>
                </div>
                <Checkbox
                    checked={checked}
                    onChange={(e) => { handleChange(e); }}
                    inputProps={{ 'aria-label': 'primary-checkbox' }}
                />
            </div>
        </Paper>
    );
};

export default Member;
